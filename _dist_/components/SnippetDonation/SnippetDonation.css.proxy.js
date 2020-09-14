
const code = ".SnippetDonation{\n    margin: 12px 8px 0;\n    overflow: hidden;\n    background: var(--background_suggestions);\n/* Light / Image Border */\n\n    border: 0.5px solid rgba(0, 0, 0, 0.08);\n    box-sizing: border-box;\n    /* Elevation · Snippet */\n\n    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.04), 0px 2px 4px rgba(0, 0, 0, 0.01);\n    border-radius: 8px;\n}\n\n.SnippetDonation__cell > .SimpleCell {\n    padding-left: 12px;\n    padding-right: 12px;\n}\n\n.SnippetDonation__cell .SimpleCell--android .SimpleCell__children {\n    font-weight: 500;\n    font-size: 15px;\n    line-height: 20px;\n\n    letter-spacing: 0.2px;\n}\n\n.SnippetDonation__cell .SimpleCell--ios .SimpleCell__children {\n    font-weight: 600;\n    font-size: 15px;\n    line-height: 20px;\n\n    letter-spacing: -0.24px;\n}\n.SnippetDonation__cell .SimpleCell--android .SimpleCell__description {\n    font-size: 12px;\n    line-height: 14px;\n\n    letter-spacing: 0.2px;\n}\n\n.SnippetDonation__cell .SimpleCell--ios .SimpleCell__description {\n    font-size: 13px;\n    line-height: 16px;\n    /* identical to box height, or 123% */\n\n    letter-spacing: -0.078px;\n    margin-top: 0;\n}\n\n.SnippetDonation__cell .SimpleCell__main {\n    padding-top: 8px;\n    padding-bottom: 8px;\n}\n\n.SnippetDonation__cell .SimpleCell--android .SimpleCell__main {\n    padding-bottom: 7px;\n}\n\n\n.SnippetDonation__bottom {\n    display: flex;\n    justify-content: space-between;\n    padding: 3px 12px 4px;\n}\n\n.SnippetDonation__before {\n    padding-bottom: 10px;\n    flex-grow: 1;\n}\n\n.SnippetDonation__progress{\n    padding: 8px 0;\n    font-size: 13px;\n    line-height: 16px;\n    /* identical to box height, or 123% */\n\n    letter-spacing: 0.2px;\n}\n\n.SnippetDonation__action {\n    flex-shrink: 0;\n    display: flex;\n    align-items: center;\n    margin-left:12px;\n}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);