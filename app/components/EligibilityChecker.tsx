"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { countries } from "../data/site";
// `image_7a605c.png` ke folder structure ke hisab se exact relative path import:
import ProcessLeadForm from "./ui/ProcessLeadForm"; 

type AnswerValue = string | string[] | undefined;
type CountryAnswerKey = "spouseResidency" | "spouseNationality";

function isAnswer(value: AnswerValue, expected: string) {
    return typeof value === "string" && value.toLowerCase() === expected.toLowerCase();
}

export default function EligibilityChecker() {
    const [current, setCurrent] = useState<string>("q1");
    const [history, setHistory] = useState<string[]>([]);
    const [answers, setAnswers] = useState<Record<string, AnswerValue>>({});
    const [ineligibleReason, setIneligibleReason] = useState<string | null>(null);
    const [openCountryDropdown, setOpenCountryDropdown] = useState<CountryAnswerKey | null>(null);
    const [countrySearch, setCountrySearch] = useState("");

    function updateAnswer(key: string, value: AnswerValue) {
        setAnswers((s) => ({ ...s, [key]: value }));
    }

    function navigateTo(next: string) {
        setHistory((h) => [...h, current]);
        setCurrent(next);
    }

    function markIneligible(reason: string) {
        setIneligibleReason(reason);
    }

    function nextFrom(qid: string, value?: AnswerValue) {
        switch (qid) {
            case "q1":
                if (value === "UK Resident Sponsor") return "q2";
                return "q3";
            case "q2":
                return "q3";
            case "q3":
                if (value === "None of the above") {
                    markIneligible("Sponsor does not hold British, ILR or qualifying EU status.");
                    return "not-eligible";
                }
                return "q4";
            case "q4":
                if (isAnswer(value, "No")) {
                    markIneligible("Unfortunately, the applicant and sponsor must both be over the age of 18 to be eligible for this visa application.");
                    return "not-eligible";
                }
                return "q5";
            case "q5":
                if (isAnswer(value, "No")) {
                    markIneligible("Unfortunately, you must have met each other in person to be eligible for this visa application.");
                    return "not-eligible";
                }
                return "q6";
            case "q6":
                if (isAnswer(value, "No")) {
                    markIneligible("Unfortunately, you must intend to live together permanently in the UK to be eligible for this visa application.");
                    return "not-eligible";
                }
                return "q7";
            case "q7":
                return "q8";
            case "q8":
                return "q9";
            case "q9":
                return "q10";
            case "q10":
                if (isAnswer(value, "Yes")) return "q12";
                return "q11";
            case "q11":
                return "q12";
            case "q12":
                const sel: string[] = Array.isArray(value) ? value : [];
                const groupA = [
                    "Carer's Allowance",
                    "Disability Living Allowance",
                    "Industrial Injuries Disablement Benefit",
                    "Attendance Allowance",
                    "Personal Independence Payment",
                    "Armed Forces Independence Payment",
                ];
                if (sel.some((s) => groupA.includes(s))) return "q13a";
                return "q13b";
            case "q13a":
                return "eligible";
            case "q13b":
                return "q14";
            case "q14":
                return "q15";
            case "q15":
                if (value === "I am employed in the UK") return "q16";
                return "eligible";
            case "q16":
                if (isAnswer(value, "Yes")) {
                    return "eligible";
                }
                markIneligible("Employment salary requirement not met (£29,000 p.a. for 6 months).");
                return "not-eligible";
            default:
                return "not-eligible";
        }
    }

    function handleContinue(answerKey: string, value?: AnswerValue) {
        if (answerKey) updateAnswer(answerKey, value);
        const next = nextFrom(current, value ?? answers[answerKey]);
        navigateTo(next);
    }

    function goBack() {
        setHistory((h) => {
            if (h.length === 0) return h;
            const prev = h[h.length - 1];
            setIneligibleReason(null);
            setCurrent(prev);
            return h.slice(0, -1);
        });
    }

    function renderStepActions(continueButton: ReactNode) {
        return (
            <div className="flex items-center justify-between gap-4 mt-8 pt-4 border-t border-gray-100">
                <button
                    className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium bg-white hover:bg-gray-50 transition disabled:opacity-40 disabled:cursor-not-allowed text-sm"
                    onClick={goBack}
                    disabled={history.length === 0}
                >
                    Back
                </button>
                {continueButton}
            </div>
        );
    }

    function resetChecker() {
        setCurrent("q1");
        setHistory([]);
        setAnswers({});
        setIneligibleReason(null);
    }

    function renderSocialLinks() {
        return (
            <div className="flex justify-center gap-3 mt-4 mb-6">
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-slate-100 hover:bg-teal-600 hover:text-white flex items-center justify-center text-sm font-semibold transition text-slate-600">f</a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-slate-100 hover:bg-black hover:text-white flex items-center justify-center text-sm font-semibold transition text-slate-600">X</a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-slate-100 hover:bg-teal-700 hover:text-white flex items-center justify-center text-sm font-semibold transition text-slate-600">in</a>
            </div>
        );
    }

    function renderOptions(qid: string, options: string[] | undefined, name: string, answerKey: string) {
        if (!options) return null;
        return (
            <div className="grid grid-cols-1 gap-3 mt-4">
                {options.map((opt) => {
                    const isChecked = answers[answerKey] === opt;
                    return (
                        <label
                            key={opt}
                            className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                                isChecked
                                    ? "border-teal-600 bg-teal-50/40 text-teal-900 font-medium"
                                    : "border-gray-200 bg-white hover:border-gray-300 text-gray-700"
                            }`}
                        >
                            <input
                                type="radio"
                                name={name}
                                checked={isChecked}
                                className="w-4 h-4 text-teal-600 border-gray-300 focus:ring-teal-500"
                                onChange={() => {
                                    updateAnswer(answerKey, opt);
                                    if (qid === "q13b" && opt === "Yes") {
                                        const next = nextFrom(qid, opt);
                                        navigateTo(next);
                                    }
                                }}
                            />
                            <span className="text-sm md:text-base">{opt}</span>
                        </label>
                    );
                })}
            </div>
        );
    }

    function renderCountryDropdown(answerKey: CountryAnswerKey, placeholder: string) {
        const selected = typeof answers[answerKey] === "string" ? answers[answerKey] : "";
        const isOpen = openCountryDropdown === answerKey;
        const visibleCountries = countries ? countries.filter((country) =>
            country.toLowerCase().includes(countrySearch.trim().toLowerCase())
        ) : [];

        return (
            <div className="relative mt-4 w-full">
                <button
                    type="button"
                    className="w-full flex items-center justify-between p-3.5 bg-white border-2 border-gray-200 rounded-xl shadow-sm text-left focus:outline-none focus:border-teal-600 transition"
                    onClick={() => {
                        setOpenCountryDropdown(isOpen ? null : answerKey);
                        setCountrySearch("");
                    }}
                >
                    <span className={`block truncate text-base ${selected ? "text-gray-900 font-medium" : "text-gray-400"}`}>
                        {selected || placeholder}
                    </span>
                    <span className="ml-2 flex items-center pointer-events-none text-gray-400">
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                            <path d="M7 10l3 3 3-3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                </button>

                {isOpen && (
                    <div className="absolute z-50 mt-2 w-full bg-white rounded-xl shadow-xl border border-gray-100 max-h-60 overflow-hidden flex flex-col">
                        <div className="p-2 border-b border-gray-100 bg-gray-50">
                            <input
                                className="w-full px-3 py-2 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-teal-500"
                                type="search"
                                placeholder="Search country..."
                                value={countrySearch}
                                onChange={(event) => setCountrySearch(event.target.value)}
                                autoFocus
                            />
                        </div>
                        <div className="overflow-y-auto py-1 flex-1 max-h-48">
                            {visibleCountries.length > 0 ? (
                                visibleCountries.map((country) => (
                                    <button
                                        type="button"
                                        key={country}
                                        className={`w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 transition ${
                                            country === selected ? "bg-teal-50 text-teal-700 font-medium" : "text-gray-700"
                                        }`}
                                        onClick={() => {
                                            updateAnswer(answerKey, country);
                                            setOpenCountryDropdown(null);
                                            setCountrySearch("");
                                        }}
                                    >
                                        {country}
                                    </button>
                                ))
                            ) : (
                                <div className="px-4 py-3 text-sm text-gray-400 italic text-center">No country found</div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        );
    }

    return (
        <section className="py-5 md:py-5 bg-gradient-to-b from-slate-50 to-white min-h-[600px] flex items-center">
            <div className="max-w-2xl mx-auto px-4 w-full">
                
                {/* Header Context (Hidden on Form Lead submission screens for focus layout) */}
                {current !== "eligible" && current !== "not-eligible" && (
                    <div className="text-center mb-10">
                        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                            MSD Solicitors — Spouse Visa Eligibility Checker
                        </h1>
                        <p className="mt-2 text-base text-slate-500 max-w-lg mx-auto">
                            This guided tool shows whether you are likely eligible for a UK spouse visa based on your answers.
                        </p>
                    </div>
                )}

                {/* Main Dynamic Wizard Container */}
                <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-6 md:p-8 transition-all duration-300">
                    
                    {current === "q1" && (
                        <div className="animate-fadeIn">
                            <p className="text-teal-700 font-semibold uppercase tracking-wider text-xs mb-2">Step 1 of 5</p>
                            <h3 className="text-lg md:text-xl font-bold text-slate-800">
                                Hello. Welcome to MSD Solicitors&apos; spouse visa eligibility checker.
                            </h3>
                            <p className="text-slate-500 mt-1 text-sm md:text-base">Are you the Applicant or the UK Resident Sponsor?</p>
                            {renderOptions("q1", ["UK Resident Sponsor", "Applicant"], "role", "role")}
                            {renderStepActions(
                                <button 
                                    className="px-6 py-2.5 rounded-lg bg-teal-600 text-white font-medium hover:bg-teal-700 transition shadow-sm text-sm disabled:opacity-50"
                                    onClick={() => handleContinue("role", answers.role)}
                                    disabled={!answers.role}
                                >
                                    Continue
                                </button>
                            )}
                        </div>
                    )}

                    {current === "q2" && (
                        <div className="animate-fadeIn">
                            <h3 className="text-lg md:text-xl font-bold text-slate-800">Sponsor Eligibility Check</h3>
                            <p className="text-slate-500 mt-2 text-sm">Please confirm you meet the sponsor eligibility checks.</p>
                            {renderStepActions(
                                <button className="px-6 py-2.5 rounded-lg bg-teal-600 text-white font-medium hover:bg-teal-700 transition shadow-sm text-sm" onClick={() => handleContinue("", "")}>Continue</button>
                            )}
                        </div>
                    )}

                    {current === "q3" && (
                        <div className="animate-fadeIn">
                            <h3 className="text-lg md:text-xl font-bold text-slate-800">Do you hold?</h3>
                            <p className="text-slate-500 text-sm mt-1">Select your status below.</p>
                            {renderOptions("q3", ["British Citizenship", "Indefinite Leave to Remain (ILR)", "EU Citizenship", "None of the above"], "status", "status")}
                            {renderStepActions(
                                <button className="px-6 py-2.5 rounded-lg bg-teal-600 text-white font-medium hover:bg-teal-700 transition shadow-sm text-sm disabled:opacity-50" onClick={() => handleContinue("status", answers.status)} disabled={!answers.status}>Continue</button>
                            )}
                        </div>
                    )}

                    {current === "q4" && (
                        <div className="animate-fadeIn">
                            <h3 className="text-lg md:text-xl font-bold text-slate-800">Are you and your spouse over the age of 18?</h3>
                            {renderOptions("q4", ["Yes", "No"], "over18", "over18")}
                            {renderStepActions(
                                <button className="px-6 py-2.5 rounded-lg bg-teal-600 text-white font-medium hover:bg-teal-700 transition shadow-sm text-sm disabled:opacity-50" onClick={() => handleContinue("over18", answers.over18)} disabled={!answers.over18}>Continue</button>
                            )}
                        </div>
                    )}

                    {current === "q5" && (
                        <div className="animate-fadeIn">
                            <h3 className="text-lg md:text-xl font-bold text-slate-800">Have you met each other in person?</h3>
                            {renderOptions("q5", ["Yes", "No"], "metInPerson", "metInPerson")}
                            {renderStepActions(
                                <button className="px-6 py-2.5 rounded-lg bg-teal-600 text-white font-medium hover:bg-teal-700 transition shadow-sm text-sm disabled:opacity-50" onClick={() => handleContinue("metInPerson", answers.metInPerson)} disabled={!answers.metInPerson}>Continue</button>
                            )}
                        </div>
                    )}

                    {current === "q6" && (
                        <div className="animate-fadeIn">
                            <h3 className="text-lg md:text-xl font-bold text-slate-800">Do you intend to live together permanently in the UK?</h3>
                            {renderOptions("q6", ["Yes", "No"], "intendLiveTogether", "intendLiveTogether")}
                            {renderStepActions(
                                <button className="px-6 py-2.5 rounded-lg bg-teal-600 text-white font-medium hover:bg-teal-700 transition shadow-sm text-sm disabled:opacity-50" onClick={() => handleContinue("intendLiveTogether", answers.intendLiveTogether)} disabled={!answers.intendLiveTogether}>Continue</button>
                            )}
                        </div>
                    )}

                    {current === "q7" && (
                        <div className="animate-fadeIn">
                            <h3 className="text-lg md:text-xl font-bold text-slate-800">What is your Spouse&apos;s Country of Residency?</h3>
                            {renderCountryDropdown("spouseResidency", "Select country")}
                            {renderStepActions(
                                <button className="px-6 py-2.5 rounded-lg bg-teal-600 text-white font-medium hover:bg-teal-700 transition shadow-sm text-sm disabled:opacity-50" onClick={() => handleContinue("spouseResidency", answers.spouseResidency)} disabled={!answers.spouseResidency}>Continue</button>
                            )}
                        </div>
                    )}

                    {current === "q8" && (
                        <div className="animate-fadeIn">
                            <h3 className="text-lg md:text-xl font-bold text-slate-800">Has your spouse had a TB Test from a clinic approved by the Home Office?</h3>
                            {renderOptions("q8", ["Yes", "No"], "tbTest", "tbTest")}
                            {renderStepActions(
                                <button className="px-6 py-2.5 rounded-lg bg-teal-600 text-white font-medium hover:bg-teal-700 transition shadow-sm text-sm disabled:opacity-50" onClick={() => handleContinue("tbTest", answers.tbTest)} disabled={!answers.tbTest}>Continue</button>
                            )}
                        </div>
                    )}

                    {current === "q9" && (
                        <div className="animate-fadeIn">
                            <h3 className="text-lg md:text-xl font-bold text-slate-800">What is your Spouse&apos;s Nationality?</h3>
                            {renderCountryDropdown("spouseNationality", "Select nationality")}
                            {renderStepActions(
                                <button className="px-6 py-2.5 rounded-lg bg-teal-600 text-white font-medium hover:bg-teal-700 transition shadow-sm text-sm disabled:opacity-50" onClick={() => handleContinue("spouseNationality", answers.spouseNationality)} disabled={!answers.spouseNationality}>Continue</button>
                            )}
                        </div>
                    )}

                    {current === "q10" && (
                        <div className="animate-fadeIn">
                            <h3 className="text-lg md:text-xl font-bold text-slate-800">Has your spouse passed an SELTS English test (speaking & listening) at A1?</h3>
                            {renderOptions("q10", ["Yes", "No"], "q10", "selts")}
                            {renderStepActions(
                                <button className="px-6 py-2.5 rounded-lg bg-teal-600 text-white font-medium hover:bg-teal-700 transition shadow-sm text-sm disabled:opacity-50" onClick={() => handleContinue("selts", answers.selts)} disabled={!answers.selts}>Continue</button>
                            )}
                        </div>
                    )}

                    {current === "q11" && (
                        <div className="animate-fadeIn">
                            <h3 className="text-lg md:text-xl font-bold text-slate-800">Does your Spouse hold a degree taught or researched in English?</h3>
                            {renderOptions("q11", ["Yes", "No"], "q11_deg", "degree")}
                            {answers.degree === "Yes" && (
                                <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-100 animate-slideDown">
                                    <p className="text-sm font-medium text-slate-700 mb-2">Does your spouse have a UK NARIC statement confirming equivalence?</p>
                                    {renderOptions("q11", ["Yes", "No"], "q11_naric", "naric")}
                                </div>
                            )}
                            {renderStepActions(
                                <button className="px-6 py-2.5 rounded-lg bg-teal-600 text-white font-medium hover:bg-teal-700 transition shadow-sm text-sm disabled:opacity-50" onClick={() => handleContinue("degree", answers.degree)} disabled={!answers.degree}>Continue</button>
                            )}
                        </div>
                    )}

                    {current === "q12" && (
                        <div className="animate-fadeIn">
                            <h3 className="text-lg md:text-xl font-bold text-slate-800">Are you in receipt of any of the following benefits or allowances?</h3>
                            <div className="grid grid-cols-1 gap-2 mt-4">
                                {[
                                    "Carer's Allowance",
                                    "Disability Living Allowance",
                                    "Industrial Injuries Disablement Benefit",
                                    "Attendance Allowance",
                                    "Personal Independence Payment",
                                    "Armed Forces Independence Payment or Guaranteed Income Payment under the Armed Forces Compensation Scheme",
                                    "Constant Attendance Allowance, Mobility Supplement or War Disablement Pension under the War Pensions Scheme",
                                    "None of the above",
                                ].map((b) => {
                                    const isBoxChecked = Array.isArray(answers.benefits) ? answers.benefits.includes(b) : false;
                                    return (
                                        <label key={b} className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition ${
                                            isBoxChecked ? "border-teal-600 bg-teal-50/20 text-teal-900" : "border-gray-200 hover:bg-slate-50 text-gray-700"
                                        }`}>
                                            <input
                                                type="checkbox"
                                                checked={isBoxChecked}
                                                className="mt-1 w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                                                onChange={(e) => {
                                                    const cur = Array.isArray(answers.benefits) ? answers.benefits : [];
                                                    if (b === "None of the above") {
                                                        if (e.target.checked) {
                                                            updateAnswer("benefits", [b]);
                                                            navigateTo("q13b");
                                                        } else {
                                                            updateAnswer("benefits", []);
                                                        }
                                                    } else {
                                                        if (e.target.checked) {
                                                            const nextArr = cur.filter((x) => x !== "None of the above");
                                                            updateAnswer("benefits", [...nextArr, b]);
                                                        } else {
                                                            updateAnswer("benefits", cur.filter((x) => x !== b));
                                                        }
                                                    }
                                                }}
                                            />
                                            <span className="text-sm">{b}</span>
                                        </label>
                                    );
                                })}
                            </div>
                            {renderStepActions(
                                <button className="px-6 py-2.5 rounded-lg bg-teal-600 text-white font-medium hover:bg-teal-700 transition shadow-sm text-sm" onClick={() => handleContinue("benefits", answers.benefits)}>Continue</button>
                            )}
                        </div>
                    )}

                    {current === "q13a" && (
                        <div className="text-center py-4 animate-fadeIn">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 mb-3">Exempt Eligible</span>
                            <h3 className="text-xl font-bold text-slate-800">Spouse Visa Income Requirement Exempt</h3>
                            <p className="text-slate-500 mt-2 text-sm md:text-base max-w-md mx-auto">
                                Congratulations — it appears you are exempt from the income requirement and meet other core requirements.
                            </p>
                            {renderStepActions(
                                <button className="px-6 py-2.5 rounded-lg bg-teal-600 text-white font-medium hover:bg-teal-700 transition shadow-sm text-sm w-full md:w-auto" onClick={() => navigateTo("eligible")}>Continue</button>
                            )}
                        </div>
                    )}

                    {current === "q13b" && (
                        <div className="animate-fadeIn">
                            <h3 className="text-lg md:text-xl font-bold text-slate-800">Are you applying with any child dependants who are not British citizens?</h3>
                            {renderOptions("q13b", ["Yes", "No"], "childDependants", "childDependants")}
                            {renderStepActions(
                                <button className="px-6 py-2.5 rounded-lg bg-teal-600 text-white font-medium hover:bg-teal-700 transition shadow-sm text-sm disabled:opacity-50" onClick={() => handleContinue("childDependants", answers.childDependants)} disabled={!answers.childDependants}>Continue</button>
                            )}
                        </div>
                    )}

                    {current === "q14" && (
                        <div className="animate-fadeIn">
                            <h3 className="text-lg md:text-xl font-bold text-slate-800">How many child applicants are you applying with?</h3>
                            {renderOptions("q14", ["None", "One Dependant Child", "Two Dependant Children", "Three Dependant Children", "Four Dependant Children", "Five Dependant Children"], "childrenCount", "childrenCount")}
                            {renderStepActions(
                                <button className="px-6 py-2.5 rounded-lg bg-teal-600 text-white font-medium hover:bg-teal-700 transition shadow-sm text-sm disabled:opacity-50" onClick={() => handleContinue("childrenCount", answers.childrenCount)} disabled={!answers.childrenCount}>Continue</button>
                            )}
                        </div>
                    )}

                    {current === "q15" && (
                        <div className="animate-fadeIn">
                            <h3 className="text-lg md:text-xl font-bold text-slate-800">What is your current working status?</h3>
                            {renderOptions("q15", [
                                "I am employed in the UK",
                                "I am self employed in the UK",
                                "I am employed outside of the UK",
                                "I am self employed outside of the UK",
                                "I am unemployed",
                                "I am retired",
                            ], "q15_work", "workStatus")}
                            {renderStepActions(
                                <button className="px-6 py-2.5 rounded-lg bg-teal-600 text-white font-medium hover:bg-teal-700 transition shadow-sm text-sm disabled:opacity-50" onClick={() => handleContinue("workStatus", answers.workStatus)} disabled={!answers.workStatus}>Continue</button>
                            )}
                        </div>
                    )}

                    {current === "q16" && (
                        <div className="animate-fadeIn">
                            <h3 className="text-lg md:text-xl font-bold text-slate-800">Have you been in the same employment with an annual gross salary of at least £29,000 for at least six months?</h3>
                            {renderOptions("q16", ["Yes", "No"], "salaryMet", "salaryMet")}
                            {renderStepActions(
                                <button className="px-6 py-2.5 rounded-lg bg-teal-600 text-white font-medium hover:bg-teal-700 transition shadow-sm text-sm disabled:opacity-50" onClick={() => handleContinue("salaryMet", answers.salaryMet)} disabled={!answers.salaryMet}>Continue</button>
                            )}
                        </div>
                    )}

                    {/* 🏆 CONGRATULATIONS STATE WITH LEAD CAPTURE FORM */}
                    {current === "eligible" && (
                        <div className="animate-fadeIn">
                            <div className="text-center mb-6">
                                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">✓</div>
                                <h2 className="text-2xl font-extrabold text-slate-800 tracking-tight">Great News! You Are Eligible</h2>
                                <p className="text-slate-500 mt-1.5 text-sm max-w-md mx-auto">
                                    Based on your system analysis, you fully meet the UK Spouse Visa requirements. Claim your step-by-step roadmap below.
                                </p>
                                {renderSocialLinks()}
                            </div>

                            {/* Integrated Lead Form with High Converting Custom Props */}
                            <div className="border-t border-slate-100 pt-6">
                                <ProcessLeadForm 
                                    heading="Claim Your Free Spouse Visa Blueprint"
                                    description="Enter your contact info below to receive instant access to our expert document checklist and book your priority 1-on-1 legal assessment."
                                />
                            </div>
                            
                            <div className="mt-6 flex gap-3 justify-center items-center pt-4 border-t border-slate-100">
                                <button className="px-5 py-2 rounded-lg border border-gray-300 text-gray-600 text-xs font-semibold bg-white hover:bg-gray-50 transition" onClick={goBack}>Back</button>
                                <button className="text-xs text-slate-400 underline hover:text-teal-600 font-semibold uppercase tracking-wider" onClick={resetChecker}>Reset Wizard</button>
                            </div>
                        </div>
                    )}

                    {/* ⚠️ UNFORTUNATELY / INELIGIBLE STATE WITH LEAD CAPTURE FORM (As shown in image_7a6016.png layout but upgraded) */}
                    {current === "not-eligible" && (
                        <div className="animate-fadeIn">
                            <div className="text-center mb-6">
                                <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">!</div>
                                <h2 className="text-xl font-extrabold text-slate-800 px-2 leading-snug">
                                    {ineligibleReason || "Your application requires immediate legal routing."}
                                </h2>
                                <p className="text-slate-500 mt-2 text-xs md:text-sm max-w-md mx-auto">
                                    Don&apos;t worry! Many initial rejections can be easily solved with professional legal structuring, alternative financial routes, or human rights exceptions.
                                </p>
                                {renderSocialLinks()}
                            </div>
                            
                            {/* Integrated Lead Form to capture users who hit a roadblock */}
                            <div className="border-t border-slate-100 pt-6">
                                <ProcessLeadForm 
                                    heading="Let Our Immigration Solicitors Fix Your Case"
                                    description="Fill out the form below. Our legal team will review your specific roadblock and contact you with custom bypass options to approve your visa."
                                />
                            </div>

                            <div className="mt-6 flex gap-3 justify-center items-center pt-4 border-t border-slate-100">
                                <button className="px-5 py-2 rounded-lg border border-gray-300 text-gray-600 text-xs font-semibold bg-white hover:bg-gray-50 transition" onClick={goBack}>Back</button>
                                <button className="px-5 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition" onClick={resetChecker}>Try Again</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}