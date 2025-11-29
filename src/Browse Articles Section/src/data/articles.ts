export interface Article {
  id: number;
  title: string;
  link: string;
  source: string;
  date: string;
  summary: string;
  imageUrl: string;
  category: 'indonesia' | 'integrity' | 'both';
  tags: string[];
}

export const articles: Article[] = [
  {
    id: 1,
    title: "Corruption Eradication in Indonesia: One Step Forward, Two Steps Back",
    link: "https://www.iseas.edu.sg/articles-commentaries/iseas-perspective/2024-42-corruption-eradication-in-indonesia-one-step-forward-two-steps-back-by-astrid-meilasari-sugiana-gunardi-endro-siwage-dharma-negara/",
    source: "ISEAS-Yusof Ishak Institute",
    date: "June 2024",
    summary: "Discusses challenges facing Indonesia's anti-corruption efforts, the weakening of KPK independence, and corruption cases involving government ministers",
    imageUrl: "https://images.unsplash.com/photo-1761387787737-c850f5db6fa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWElMjBnb3Zlcm5tZW50JTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY0MzQyMjczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: 'indonesia',
    tags: ['KPK', 'Government', 'Policy', 'Indonesia']
  },
  {
    id: 2,
    title: "Beyond the Rhetoric: Youth and Anti-Corruption Efforts in Indonesia",
    link: "https://devpolicy.org/beyond-the-rhetoric-youth-and-anti-corruption-efforts-in-indonesia-20250718/",
    source: "Devpolicy Blog",
    date: "June 2025",
    summary: "Explores the role of young people in fighting corruption at local levels, including the Anti-Corruption Academy in Kupang and risks faced by activists",
    imageUrl: "https://images.unsplash.com/photo-1740118125318-7e07c97a13c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGFjdGl2aXNtJTIwaW5kb25lc2lhfGVufDF8fHx8MTc2NDQwMjgwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: 'indonesia',
    tags: ['Youth', 'Activism', 'Local Government', 'Indonesia']
  },
  {
    id: 3,
    title: "Indonesia Strengthens Financial Investigation Capabilities to Fight Corruption",
    link: "https://www.unodc.org/roseap/en/indonesia/2025/02/financial-investigation-fight-corruption/story.html",
    source: "UNODC",
    date: "February 2025",
    summary: "Details training programs by UNODC and KPK to enhance financial crime investigation capabilities, with KPK recovering over IDR 2.5 trillion between 2020-2024",
    imageUrl: "https://images.unsplash.com/photo-1579226905180-636b76d96082?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBpbnZlc3RpZ2F0aW9ufGVufDF8fHx8MTc2NDQwMjgwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: 'indonesia',
    tags: ['Financial Crime', 'Investigation', 'UNODC', 'Indonesia']
  },
  {
    id: 4,
    title: "2024 Corruption Perceptions Index - Indonesia",
    link: "https://www.transparency.org/en/cpi/2024/index/idn",
    source: "Transparency International",
    date: "February 2025",
    summary: "Indonesia scored 37/100 and ranked 99th out of 180 countries, highlighting corruption as a major obstacle to climate action and development",
    imageUrl: "https://images.unsplash.com/photo-1719496175596-7da518b2e1e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFuc3BhcmVuY3klMjBkYXRhfGVufDF8fHx8MTc2NDQwMjgwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: 'indonesia',
    tags: ['Data', 'Index', 'Transparency', 'Indonesia']
  },
  {
    id: 5,
    title: "Anti-Corruption Collective Action Initiative in Indonesia",
    link: "https://acca.unglobalcompact.org/indonesia",
    source: "UN Global Compact Network Indonesia",
    date: "2024",
    summary: "Details the ACCA program targeting agribusiness sector, with 18 companies signing anti-corruption declarations and regional workshops conducted",
    imageUrl: "https://images.unsplash.com/photo-1634326080825-985cfc816db6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV0aGljcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzY0NDAyODAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: 'both',
    tags: ['Business', 'Collective Action', 'UN', 'Indonesia']
  },
  {
    id: 6,
    title: "How to Navigate Integrity Challenges in Southeast Asia",
    link: "https://www.ey.com/en_id/insights/assurance/navigating-integrity-challenges-in-southeast-asia",
    source: "EY Indonesia",
    date: "April 2024",
    summary: "Discusses the EY Global Integrity Report 2024 findings, showing 44% of Southeast Asian respondents believe unethical behavior is tolerated by senior management",
    imageUrl: "https://images.unsplash.com/photo-1763718528755-4bca23f82ac3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbXBsaWFuY2V8ZW58MXx8fHwxNzY0NDAyODAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: 'integrity',
    tags: ['Integrity', 'Southeast Asia', 'Business Ethics', 'EY']
  },
  {
    id: 7,
    title: "Responsible Business Forum 2024: Leadership Beyond Compliance",
    link: "https://indonesiagcn.org/collaboration-between-igcn-and-idx-at-the-responsible-business-forum-2024-realizing-business-governance-with-integrity/",
    source: "UN Global Compact Network Indonesia",
    date: "December 2024",
    summary: "Forum attended by 250+ participants discussing ethical business practices, with 18 Indonesian companies signing calls-to-action for business integrity",
    imageUrl: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBnb3Zlcm5hbmNlfGVufDF8fHx8MTc2NDQwMjgwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: 'both',
    tags: ['Business Governance', 'Forum', 'Leadership', 'Indonesia']
  },
  {
    id: 8,
    title: "Blueprint of Integrity: Crafting Indonesia's Comprehensive Anti-Corruption Strategy",
    link: "https://acfe-indonesia.or.id/2024/05/blueprint-of-integrity-crafting-indonesias-comprehensive-anti-corruption-strategy/",
    source: "ACFE Indonesia Chapter",
    date: "May 2024",
    summary: "Outlines comprehensive strategy including legal reforms, institutional strengthening, public participation, and fostering culture of integrity",
    imageUrl: "https://images.unsplash.com/photo-1704969724221-8b7361b61f75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpdCUyMGNvbXBsaWFuY2V8ZW58MXx8fHwxNzY0NDAyODAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: 'both',
    tags: ['Strategy', 'ACFE', 'Integrity', 'Indonesia']
  },
  {
    id: 9,
    title: "B20 Indonesia Integrity and Compliance Task Force Recommendations",
    link: "https://www.ey.com/en_id/insights/forensic-integrity-services/b20-indonesia-priorities",
    source: "EY Indonesia",
    date: "2024",
    summary: "Details four key recommendations for businesses including promoting ESG initiatives, encouraging transparency, and combating money laundering",
    imageUrl: "https://images.unsplash.com/photo-1762427354251-f008b64dbc32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2xpY3klMjByZXNlYXJjaHxlbnwxfHx8fDE3NjQ0MDI4MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: 'both',
    tags: ['B20', 'ESG', 'Compliance', 'Indonesia']
  },
  {
    id: 10,
    title: "The Evolution of the Honorary Council of the Code of Ethics: Strengthening SAI Indonesia's Jurisdiction",
    link: "https://intosaijournal.org/journal-entry/the-evolution-of-the-honorary-council-of-the-code-of-ethics-strengthening-sai-indonesias-jurisdiction/",
    source: "INTOSAI Journal",
    date: "May 2024",
    summary: "Discusses integrity enforcement mechanisms and the Integrity Management Framework issued by SAI Indonesia in 2024",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBsYXd8ZW58MXx8fHwxNzY0NDAyODA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: 'both',
    tags: ['Ethics', 'SAI', 'Framework', 'Indonesia']
  },
  {
    id: 11,
    title: "A Systematic Literature Review of Anti-corruption Policy in Indonesia",
    link: "https://link.springer.com/article/10.1007/s11115-025-00847-8",
    source: "Public Organization Review",
    date: "March 2025",
    summary: "Academic review of corruption dynamics at local government level and effectiveness of anti-corruption policies",
    imageUrl: "https://images.unsplash.com/photo-1761387787737-c850f5db6fa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWElMjBnb3Zlcm5tZW50JTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY0MzQyMjczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: 'indonesia',
    tags: ['Research', 'Policy', 'Academic', 'Indonesia']
  },
  {
    id: 12,
    title: "Corporate Law and Business Ethics: A Review in Indonesia",
    link: "https://stekom.ac.id/en/article/corporate-law-and-business-ethics-a-review-in-indonesia",
    source: "STEKOM University",
    date: "2024",
    summary: "Reviews legal frameworks governing business ethics, including corruption as a pervasive issue and cultural considerations",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBsYXd8ZW58MXx8fHwxNzY0NDAyODA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: 'both',
    tags: ['Corporate Law', 'Business Ethics', 'Legal Framework', 'Indonesia']
  },
  {
    id: 13,
    title: "10 Sectors with the Most Corruption Cases in Indonesia in 2024",
    link: "https://databoks.katadata.co.id/en/economics-macro/statistics/68dcd879b05ee/10-sectors-with-the-most-corruption-cases-in-indonesia-in-2024",
    source: "Databoks Katadata",
    date: "October 2025",
    summary: "ICW monitoring revealed 364 corruption cases in 2024 with 888 suspects and potential state losses of Rp279 trillion, with village-level corruption being the highest at 77 cases",
    imageUrl: "https://images.unsplash.com/photo-1759268624337-7cf3bdf52f4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY29ycnVwdGlvbiUyMHN0YXRpc3RpY3N8ZW58MXx8fHwxNzY0NDAzMTYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: 'indonesia',
    tags: ['ICW', 'Statistics', 'Village Corruption', 'Indonesia']
  },
  {
    id: 14,
    title: "Indonesia's KPK Names 100 Corruption Suspects in First Half of 2024",
    link: "https://en.tempo.co/read/1886133/indonesias-kpk-names-100-corruption-suspects-in-first-half-of-2024",
    source: "Tempo.co",
    date: "July 2024",
    summary: "KPK handled 93 corruption cases with 100 suspects as of May 31, 2024, with half of the cases related to procurement of goods and services",
    imageUrl: "https://images.unsplash.com/photo-1760482736830-2df21567df7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZlc3RpZ2F0aW9uJTIwc3VzcGVjdHxlbnwxfHx8fDE3NjQ0MDMxNjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: 'indonesia',
    tags: ['KPK', 'Suspects', 'Procurement', 'Indonesia']
  },
  {
    id: 15,
    title: "KPK Probes Potential Corruption in Dozens of Regional General Hospitals",
    link: "https://www.thejakartapost.com/indonesia/2025/11/26/kpk-probes-into-potential-corruption-in-dozens-of-regional-general-hospitals.html",
    source: "The Jakarta Post",
    date: "November 2025",
    summary: "KPK investigates potential corruption in expansion projects for regional hospitals following bid-rigging case in East Kolaka hospital construction",
    imageUrl: "https://images.unsplash.com/photo-1563233269-7e86880558a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzY0MzEwNzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: 'indonesia',
    tags: ['Healthcare', 'KPK', 'Bid-Rigging', 'Indonesia']
  },
  {
    id: 16,
    title: "Indonesia's Corruption Scandals and Their Impact on Foreign Direct Investment",
    link: "https://www.ainvest.com/news/indonesia-corruption-scandals-impact-foreign-direct-investment-2508/",
    source: "AI Invest",
    date: "August 2025",
    summary: "The 2025 Pertamina scandal revealed $12 billion losses from fuel fraud, exposing systemic corruption risks in state-owned enterprises and triggering a 12% FDI drop in energy sectors",
    imageUrl: "https://images.unsplash.com/photo-1751273907369-aa92b5b62d48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JlaWduJTIwaW52ZXN0bWVudHxlbnwxfHx8fDE3NjQ0MDMxNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: 'indonesia',
    tags: ['FDI', 'Pertamina', 'State-Owned', 'Indonesia']
  },
  {
    id: 17,
    title: "Indonesia Scores 37 in 2024 CPI, Signaling Persistent Challenges",
    link: "https://indonesiabusinesspost.com/3665/investment-and-risk/indonesia-scores-37-in-2024-cpi-signaling-persistent-challenges",
    source: "Indonesia Business Post",
    date: "February 2025",
    summary: "Indonesia scored 37/100 in Transparency International's 2024 CPI, highlighting persistent challenges with political corruption, judicial independence, and environmental corruption",
    imageUrl: "https://images.unsplash.com/photo-1719496175596-7da518b2e1e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFuc3BhcmVuY3klMjBpbmRleHxlbnwxfHx8fDE3NjQ0MDMxNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: 'indonesia',
    tags: ['CPI', 'Transparency', 'Judicial', 'Indonesia']
  },
  {
    id: 18,
    title: "Whistleblowers in Indonesia: A Comprehensive Guide",
    link: "https://adcolaw.com/blog/whistleblowers-in-indonesia-a-comprehensive-guide/",
    source: "ADCO Law",
    date: "July 2024",
    summary: "Law No. 32 of 2014 provides protection for whistleblowers in Indonesia, with institutions like KPK, LPSK, and BPK establishing whistleblowing systems",
    imageUrl: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGlzdGxlYmxvd2VyJTIwcHJvdGVjdGlvbnxlbnwxfHx8fDE3NjQ0MDMxNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: 'both',
    tags: ['Whistleblower', 'Protection', 'Legal', 'Indonesia']
  },
  {
    id: 19,
    title: "Whistleblowers Can Get Rp200 Million for Reporting Graft Under Indonesia's New Law",
    link: "https://theconversation.com/whistleblowers-can-get-rp200-million-for-reporting-graft-under-indonesias-new-law-will-it-be-effective-105573",
    source: "The Conversation",
    date: "September 2024",
    summary: "Indonesia's revised whistleblower regulation caps rewards at Rp200 million (US$13,175), representing 0.2% of total recovered money from corruption cases",
    imageUrl: "https://images.unsplash.com/photo-1554134449-8ad2b1dea29e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25leSUyMHJld2FyZHxlbnwxfHx8fDE3NjQ0MDMxNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: 'both',
    tags: ['Whistleblower', 'Rewards', 'Law', 'Indonesia']
  },
  {
    id: 20,
    title: "Silencing Whistleblowers: Proof of Backsliding in Anti-Corruption Efforts",
    link: "https://www.antikorupsi.org/en/silencing-whistleblowers-proof-backsliding-anti-corruption-efforts",
    source: "Indonesia Corruption Watch",
    date: "2024",
    summary: "ICW documented 204 individuals facing threats for criticizing anti-corruption efforts from 1996 to 2024, with 17 charged with defamation",
    imageUrl: "https://images.unsplash.com/photo-1761001316264-66da0d239771?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90ZXN0JTIwYWN0aXZpc218ZW58MXx8fHwxNzY0MzEwMDAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: 'both',
    tags: ['Whistleblower', 'ICW', 'Threats', 'Indonesia']
  },
  {
    id: 21,
    title: "A Whistleblowing Platform That Cuts Through Empty Promises",
    link: "https://www.integrity-indonesia.com/blog/secure-whistleblowing-platform/",
    source: "Integrity Indonesia",
    date: "September 2025",
    summary: "EY's Global Integrity Report 2024 shows that more than half of respondents (51%) faced or witnessed retaliation against someone who reported misconduct through their organization's whistleblowing mechanism",
    imageUrl: "https://images.unsplash.com/photo-1762330464095-026f22035c76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cmUlMjBwbGF0Zm9ybSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY0NDAzMTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: 'integrity',
    tags: ['Whistleblowing', 'Platform', 'Technology', 'EY']
  },
  {
    id: 22,
    title: "Hot Topics in Corporate Governance in Indonesia",
    link: "https://www.mondaq.com/corporate-governance/1691514/hot-topics-in-corporate-governance-in-indonesia",
    source: "SSEK Law Firm via Mondaq",
    date: "October 2025",
    summary: "OJK Reg 45/2024 requires public companies to disclose material information before the next business day's opening, accelerating the timeline to enhance transparency and market integrity",
    imageUrl: "https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2FyZHJvb20lMjBtZWV0aW5nfGVufDF8fHx8MTc2NDQwMzE2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: 'both',
    tags: ['Corporate Governance', 'OJK', 'Disclosure', 'Indonesia']
  },
  {
    id: 23,
    title: "Corporate Disclosure on Business Integrity in ASEAN 2024",
    link: "https://bschool.nus.edu.sg/cgs/wp-content/uploads/sites/145/2025/01/CGS_Corporate-Disclosure-on-Business-Integrity-in-ASEAN-2024.pdf",
    source: "NUS Business School",
    date: "January 2025",
    summary: "Survey found 44% of Southeast Asian respondents believe unethical behavior is tolerated by senior management, compared with 31% globally, revealing a 'say-do' gap in integrity culture",
    imageUrl: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBnb3Zlcm5hbmNlfGVufDF8fHx8MTc2NDQwMjgwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: 'integrity',
    tags: ['ASEAN', 'Disclosure', 'Business Integrity', 'Survey']
  },
  {
    id: 24,
    title: "Empowering Auditors: Indonesia Uses Data-Driven Oversight to Clean Up Corruption-Prone Procurement",
    link: "https://www.open-contracting.org/2024/08/28/empowering-auditors-indonesia-uses-data-driven-oversight-to-clean-up-its-corruption-prone-procurement-sector/",
    source: "Open Contracting Partnership",
    date: "December 2024",
    summary: "As of April 2024, 120 inspectorate offices nationwide have access to the Opentender system, up from 35 in 2023, allowing auditors to identify high-risk procurement using red flag indicators",
    imageUrl: "https://images.unsplash.com/photo-1761519609249-c0ca325f81db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHlzaXMlMjBhdWRpdHxlbnwxfHx8fDE3NjQ0MDMxNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: 'both',
    tags: ['Procurement', 'Data-Driven', 'Audit', 'Indonesia']
  },
  {
    id: 25,
    title: "Public Procurement 2024 - Indonesia",
    link: "https://practiceguides.chambers.com/practice-guides/public-procurement-2024/indonesia",
    source: "Chambers and Partners",
    date: "2024",
    summary: "Indonesia's electronic procurement system (SPSE) enhances transparency with real-time information on procurement progress, and mandates adherence to principles of transparency, competitiveness, fairness, and accountability",
    imageUrl: "https://images.unsplash.com/photo-1758519288905-38b7b00c1023?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9jdXJlbWVudCUyMGNvbnRyYWN0fGVufDF8fHx8MTc2NDQwMzE2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: 'both',
    tags: ['Procurement', 'SPSE', 'Transparency', 'Indonesia']
  }
];
