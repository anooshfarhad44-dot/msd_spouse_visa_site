"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { countries } from "../data/site";

type AnswerValue = string | string[] | undefined;
type CountryAnswerKey = "spouseResidency" | "spouseNationality";

function isAnswer(value: AnswerValue, expected: string) {
    return typeof value === "string" && value.toLowerCase() === expected.toLowerCase();
}

export default function EligibilityChecker() {
    // We'll implement a dynamic branching questionnaire driven by local state.

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

    // Determine next question based on current and answers
    function nextFrom(qid: string, value?: AnswerValue) {
        switch (qid) {
            case "q1":
                // Role selection. If Sponsor -> q2, else go to q3
                if (value === "sponsor") return "q2";
                return "q3";
            case "q2":
                return "q3";
            case "q3":
                if (value === "None of the above") {
                    markIneligible(
                        "Sponsor does not hold British, ILR or qualifying EU status."
                    );
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
                // After TB test go to nationality question
                return "q9";
            case "q9":
                return "q10";
            case "q10":
                if (isAnswer(value, "Yes")) return "q12";
                return "q11";
            case "q11":
                // Degree and NARIC question handled as part of q11 answers; proceed to q12 regardless
                return "q12";
            case "q12":
                // evaluate benefits selection
                const sel: string[] = Array.isArray(value) ? value : [];
                const groupA = [
                    "Carer's Allowance",
                    "Disability Living Allowance",
                    "Industrial Injuries Disablement Benefit",
                    "Attendance Allowance",
                    "Personal Independence Payment",
                    "Armed Forces Independence Payment",
                ];
                const groupB = ["Constant Attendance Allowance", "Mobility Supplement", "War Disablement Pension"];
                if (sel.some((s) => groupA.includes(s))) return "q13a";
                if (sel.some((s) => groupB.includes(s))) return "q13b";
                return "q13b"; // default to 13B if none selected (follow onward flow)
            case "q13a":
                // exempt eligible
                return "eligible";
            case "q13b":
                return "q14";
            case "q14":
                return "q15";
            case "q15":
                if (value === "I am employed in the UK") return "q16";
                // other statuses => eligible result screen
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

    function renderBackButton() {
        return (
            <button className="btn btn-outline" onClick={goBack} disabled={history.length === 0}>
                Back
            </button>
        );
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function renderStepActions(continueButton: ReactNode) {
        return (
            <div className="checker-actions">
                {renderBackButton()}
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
            <div aria-label="Share result" style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 28 }}>
                <a href="https://www.facebook.com/sharer/sharer.php" aria-label="Share on Facebook" className="result-social result-social-facebook">f</a>
                <a href="https://twitter.com/intent/tweet" aria-label="Share on X" className="result-social result-social-x">X</a>
                <a href="https://www.linkedin.com/shareArticle" aria-label="Share on LinkedIn" className="result-social result-social-linkedin">in</a>
            </div>
        );
    }

    function renderOptions(qid: string, options: string[] | undefined, name: string, answerKey: string) {
        if (!options) return null;
        return (
            <div className="checker-option-grid">
                {options.map((opt) => (
                    <label key={opt} className="checklist-item checker-option">
                        <input
                            type="radio"
                            name={name}
                            checked={answers[answerKey] === opt}
                            onChange={() => {
                                updateAnswer(answerKey, opt);
                                // If this is the child-dependants question and user selects Yes, advance immediately
                                if (qid === "q13b" && opt === "Yes") {
                                    const next = nextFrom(qid, opt);
                                    navigateTo(next);
                                }
                                // Otherwise selection is stored and user presses Continue to proceed
                            }}
                        /> {opt}
                    </label>
                ))}
            </div>
        );
    }

    function renderCountryDropdown(answerKey: CountryAnswerKey, placeholder: string) {
        const selected = typeof answers[answerKey] === "string" ? answers[answerKey] : "";
        const isOpen = openCountryDropdown === answerKey;
        const visibleCountries = countries.filter((country) =>
            country.toLowerCase().includes(countrySearch.trim().toLowerCase())
        );

        return (
            <div className="eligibility-country-combobox">
                <button
                    type="button"
                    className="eligibility-country-trigger"
                    aria-expanded={isOpen}
                    onClick={() => {
                        setOpenCountryDropdown(isOpen ? null : answerKey);
                        setCountrySearch("");
                    }}
                >
                    <span className={selected ? "country-trigger-value" : "country-trigger-placeholder"}>
                        {selected || placeholder}
                    </span>
                    <span className="country-trigger-chevron" aria-hidden="true" />
                </button>

                {isOpen && (
                    <div className="eligibility-country-menu">
                        <input
                            className="eligibility-country-search"
                            type="search"
                            placeholder="Search country..."
                            value={countrySearch}
                            onChange={(event) => setCountrySearch(event.target.value)}
                            autoFocus
                        />
                        <div className="eligibility-country-options">
                            {visibleCountries.length > 0 ? (
                                visibleCountries.map((country) => (
                                    <button
                                        type="button"
                                        key={country}
                                        className={country === selected ? "country-option is-selected" : "country-option"}
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
                                <div className="country-option-empty">No country found</div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        );
    }

    return (
        <section className="section page-section eligibility-checker-page">
            <div className="container narrow">
                <h1>MSD Solicitors — Spouse Visa Eligibility Checker</h1>
                <p className="lead">This guided tool shows whether you are likely eligible for a UK spouse visa based on your answers.</p>

                {current === "q1" && (
                    <div style={{ marginTop: 24 }}>
                        <p><strong>Hello. Welcome to MSD Solicitors&apos; spouse visa eligibility checker.</strong></p>
                        <p>Are you the Applicant or the UK Resident Sponsor?</p>
                        <div style={{ display: "grid", gap: 8 }}>
                            {renderOptions("q1", ["UK Resident Sponsor", "Applicant"], "role", "role")}
                        </div>
                        {renderStepActions(
                            <button className="btn btn-accent" onClick={() => handleContinue("role", answers.role)}>Continue</button>
                        )}
                    </div>
                )}

                {current === "q2" && (
                    <div style={{ marginTop: 24 }}>
                        <h3>Sponsor Eligibility Check</h3>
                        <p className="muted">Please confirm you meet the sponsor eligibility checks.</p>
                        {renderStepActions(
                            <button className="btn btn-accent" onClick={() => handleContinue("", "")}>Continue</button>
                        )}
                    </div>
                )}

                {current === "q3" && (
                    <div style={{ marginTop: 24 }}>
                        <h3>Do you hold?</h3>
                        {renderOptions("q3", ["British Citizenship", "Indefinite Leave to Remain (ILR)", "EU Citizenship", "None of the above"], "status", "status")}
                        {renderStepActions(
                            <button className="btn btn-accent" onClick={() => handleContinue("status", answers.status)} disabled={!answers.status}>Continue</button>
                        )}
                    </div>
                )}

                {current === "q4" && (
                    <div style={{ marginTop: 24 }}>
                        <h3>Are you and your spouse over the age of 18?</h3>
                        {renderOptions("q4", ["Yes", "No"], "over18", "over18")}
                        {renderStepActions(
                            <button className="btn btn-accent" onClick={() => handleContinue("over18", answers.over18)} disabled={!answers.over18}>Continue</button>
                        )}
                    </div>
                )}

                {current === "q5" && (
                    <div style={{ marginTop: 24 }}>
                        <h3>Have you met each other in person?</h3>
                        {renderOptions("q5", ["Yes", "No"], "metInPerson", "metInPerson")}
                        {renderStepActions(
                            <button className="btn btn-accent" onClick={() => handleContinue("metInPerson", answers.metInPerson)} disabled={!answers.metInPerson}>Continue</button>
                        )}
                    </div>
                )}

                {current === "q6" && (
                    <div style={{ marginTop: 24 }}>
                        <h3>Do you intend to live together permanently in the UK?</h3>
                        {renderOptions("q6", ["Yes", "No"], "intendLiveTogether", "intendLiveTogether")}
                        {renderStepActions(
                            <button className="btn btn-accent" onClick={() => handleContinue("intendLiveTogether", answers.intendLiveTogether)} disabled={!answers.intendLiveTogether}>Continue</button>
                        )}
                    </div>
                )}

                {current === "q7" && (
                    <div style={{ marginTop: 24 }}>
                        <h3>What is your Spouse&apos;s Country of Residency?</h3>
                        {renderCountryDropdown("spouseResidency", "Select country")}
                        {renderStepActions(
                            <button className="btn btn-accent" onClick={() => handleContinue("spouseResidency", answers.spouseResidency)} disabled={!answers.spouseResidency}>Continue</button>
                        )}
                    </div>
                )}

                {current === "q8" && (
                    <div style={{ marginTop: 24 }}>
                        <h3>Has your spouse had a TB Test from a clinic approved by the Home Office?</h3>
                        {renderOptions("q8", ["Yes", "No"], "tbTest", "tbTest")}
                        {renderStepActions(
                            <button className="btn btn-accent" onClick={() => handleContinue("tbTest", answers.tbTest)} disabled={!answers.tbTest}>Continue</button>
                        )}
                    </div>
                )}

                {current === "q9" && (
                    <div style={{ marginTop: 24 }}>
                        <h3>What is your Spouse&apos;s Nationality?</h3>
                        {renderCountryDropdown("spouseNationality", "Select nationality")}
                        {renderStepActions(
                            <button className="btn btn-accent" onClick={() => handleContinue("spouseNationality", answers.spouseNationality)} disabled={!answers.spouseNationality}>Continue</button>
                        )}
                    </div>
                )}

                {current === "q10" && (
                    <div style={{ marginTop: 24 }}>
                        <h3>Has your spouse passed an SELTS English test (speaking & listening) at A1?</h3>
                        {renderOptions("q10", ["Yes", "No"], "q10", "selts")}
                        {renderStepActions(
                            <button className="btn btn-accent" onClick={() => handleContinue("selts", answers.selts)} disabled={!answers.selts}>Continue</button>
                        )}
                    </div>
                )}

                {current === "q11" && (
                    <div style={{ marginTop: 24 }}>
                        <h3>Does your Spouse hold a degree taught or researched in English?</h3>
                        {renderOptions("q11", ["Yes", "No"], "q11_deg", "degree")}
                        {answers.degree === "Yes" && (
                            <div style={{ marginTop: 12 }}>
                                <p>Does your spouse have a UK NARIC statement confirming equivalence?</p>
                                {renderOptions("q11", ["Yes", "No"], "q11_naric", "naric")}
                            </div>
                        )}
                        {renderStepActions(
                            <button className="btn btn-accent" onClick={() => handleContinue("degree", answers.degree)} disabled={!answers.degree}>Continue</button>
                        )}
                    </div>
                )}

                {current === "q12" && (
                    <div style={{ marginTop: 24 }}>
                        <h3>Are you in receipt of any of the following benefits or allowances?</h3>
                        <div style={{ display: "grid", gap: 6 }}>
                            {[
                                "Carer's Allowance",
                                "Disability Living Allowance",
                                "Industrial Injuries Disablement Benefit",
                                "Attendance Allowance",
                                "Personal Independence Payment",
                                "Armed Forces Independence Payment or Guaranteed Income Payment under the Armed Forces Compensation Scheme",
                                "Constant Attendance Allowance, Mobility Supplement or War Disablement Pension under the War Pensions Scheme",
                                "None of the above",
                            ].map((b) => (
                                <label key={b} className="checklist-item">
                                    <input
                                        type="checkbox"
                                        checked={Array.isArray(answers.benefits) ? answers.benefits.includes(b) : false}
                                        onChange={(e) => {
                                            const cur = Array.isArray(answers.benefits) ? answers.benefits : [];
                                            if (b === "None of the above") {
                                                if (e.target.checked) {
                                                    // make 'None of the above' exclusive and immediately show child dependants question
                                                    updateAnswer("benefits", [b]);
                                                    navigateTo("q13b");
                                                } else {
                                                    updateAnswer("benefits", []);
                                                }
                                            } else {
                                                if (e.target.checked) {
                                                    // if selecting a benefit, remove any existing 'None of the above'
                                                    const nextArr = cur.filter((x) => x !== "None of the above");
                                                    updateAnswer("benefits", [...nextArr, b]);
                                                } else {
                                                    updateAnswer("benefits", cur.filter((x) => x !== b));
                                                }
                                            }
                                        }}
                                    /> {b}
                                </label>
                            ))}
                        </div>
                        {renderStepActions(
                            <button className="btn btn-accent" onClick={() => handleContinue("benefits", answers.benefits)}>Continue</button>
                        )}
                    </div>
                )}

                {current === "q13a" && (
                    <div style={{ marginTop: 24 }}>
                        <h3>Spouse Visa Income Requirement Exempt — Eligible</h3>
                        <p>Congratulations — it appears you are exempt from the income requirement and meet other core requirements.</p>
                        {renderStepActions(
                            <button className="btn btn-accent" onClick={() => navigateTo("eligible")}>Continue</button>
                        )}
                    </div>
                )}

                {current === "q13b" && (
                    <div style={{ marginTop: 24 }}>
                        <h3>Are you applying with any child dependants who are not British citizens?</h3>
                        {renderOptions("q13b", ["Yes", "No"], "childDependants", "childDependants")}
                        {renderStepActions(
                            <button className="btn btn-accent" onClick={() => handleContinue("childDependants", answers.childDependants)} disabled={!answers.childDependants}>Continue</button>
                        )}
                    </div>
                )}

                {current === "q14" && (
                    <div style={{ marginTop: 24 }}>
                        <h3>How many child applicants are you applying with?</h3>
                        {renderOptions("q14", ["None", "One Dependant Child", "Two Dependant Children", "Three Dependant Children", "Four Dependant Children", "Five Dependant Children"], "childrenCount", "childrenCount")}
                        {renderStepActions(
                            <button className="btn btn-accent" onClick={() => handleContinue("childrenCount", answers.childrenCount)} disabled={!answers.childrenCount}>Continue</button>
                        )}
                    </div>
                )}

                {current === "q15" && (
                    <div style={{ marginTop: 24 }}>
                        <h3>What is your current working status?</h3>
                        {renderOptions("q15", [
                            "I am employed in the UK",
                            "I am self employed in the UK",
                            "I am employed outside of the UK",
                            "I am self employed outside of the UK",
                            "I am unemployed",
                            "I am retired",
                        ], "q15_work", "workStatus")}
                        {renderStepActions(
                            <button className="btn btn-accent" onClick={() => handleContinue("workStatus", answers.workStatus)} disabled={!answers.workStatus}>Continue</button>
                        )}
                    </div>
                )}

                {current === "q16" && (
                    <div style={{ marginTop: 24 }}>
                        <h3>Have you been in the same employment with an annual gross salary of at least £29,000 for at least six months?</h3>
                        {renderOptions("q16", ["Yes", "No"], "salaryMet", "salaryMet")}
                        {renderStepActions(
                            <button className="btn btn-accent" onClick={() => handleContinue("salaryMet", answers.salaryMet)} disabled={!answers.salaryMet}>Continue</button>
                        )}
                    </div>
                )}

                {current === "eligible" && (
                    <div className="eligibility-result eligibility-result-success">
                        <div className="result-badge">Eligible</div>
                        <h2>Congratulations</h2>
                        <p>
                            Based on your answers, you appear likely to meet the core spouse visa eligibility requirements.
                        </p>
                        {renderSocialLinks()}
                        <div style={{ marginTop: 30, display: "flex", gap: 10, justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                            <button className="btn btn-outline" onClick={goBack}>Back</button>
                            <a className="btn btn-accent" href="/contact">Book free consultation</a>
                            <button className="result-try-btn" onClick={resetChecker}>try again</button>
                        </div>
                    </div>
                )}

                {current === "not-eligible" && (
                    <div className="eligibility-result eligibility-result-warning">
                        <div className="result-badge">Not eligible</div>
                        <h2>{ineligibleReason || "Unfortunately, based on the answers provided, you do not currently meet the eligibility requirements for a spouse visa application."}</h2>
                        {renderSocialLinks()}
                        <div style={{ marginTop: 30, display: "flex", gap: 10, justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                            <button className="btn btn-outline" onClick={goBack}>Back</button>
                            <button className="result-try-btn" onClick={resetChecker}>try again</button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
