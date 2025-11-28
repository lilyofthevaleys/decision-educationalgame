export const scenariosData = {
  scenarios: [
    {
      id: 1,
      title: "The Sponsor Dilemma",
      category: "school_corruption",
      difficulty: "medium",
      sdg_connection: "SDG 16",
      character_context: {
        student: "You're leading the committee for a school competition",
        teacher: "You're organizing a district educational event",
        entrepreneur: "You're seeking funding for your startup"
      },
      description: "A sponsor offers 5 million rupiah for prizes but demands their name be mentioned in every announcement, video, and social media post. They want prominent logo placement everywhere.",
      choices: [
        {
          id: "A",
          text: "Accept it. The money helps and the sponsor gets fair credit.",
          impacts: {
            integrity: -15,
            trust: 5,
            sustainability: -5
          },
          consequence: "The sponsor starts demanding more. Every announcement feels like an ad. People notice and question your independence. The money helped short-term, but your reputation takes a hit."
        },
        {
          id: "B",
          text: "Politely decline and find sponsors without strings attached.",
          impacts: {
            integrity: 15,
            trust: -5,
            sustainability: 10
          },
          consequence: "Finding ethical sponsors takes two extra weeks. The event is delayed but authentic. When you find one, they respect boundaries. Your integrity stays intact and people notice."
        },
        {
          id: "C",
          text: "Accept without telling school administration to speed things up.",
          impacts: {
            integrity: -25,
            trust: -10,
            sustainability: -10
          },
          consequence: "Money comes fast. Word spreads you bypassed approval. Teachers question your judgment. The sponsor later demands favors you can't refuse. Your reputation suffers serious damage."
        }
      ]
    },
    {
      id: 2,
      title: "The Food Waste Challenge",
      category: "food_waste",
      difficulty: "easy",
      sdg_connection: "SDG 12",
      character_context: {
        student: "You're at an all-you-can-eat buffet with friends",
        teacher: "You're organizing a teacher appreciation dinner",
        entrepreneur: "You're at a networking dinner event"
      },
      description: "The buffet has amazing food, and you've already eaten a lot. There's still a mountain of food on your plate, but you're full. Your friends encourage you to just leave it.",
      choices: [
        {
          id: "A",
          text: "Leave it. Everyone does it, and you can't force yourself to eat more.",
          impacts: {
            integrity: -10,
            trust: 0,
            sustainability: -15
          },
          consequence: "You leave the plate. Later you see staff throwing away dozens of similar plates. You remember reading that Indonesia wastes 13 million tons of food yearly. This was a small part of that statistic."
        },
        {
          id: "B",
          text: "Take only what you can finish from now on. Pack leftovers if allowed.",
          impacts: {
            integrity: 10,
            trust: 5,
            sustainability: 20
          },
          consequence: "Your friends laugh, but you don't care. You ask for containers and take leftovers home. One friend actually does the same. Small action, ripple effect. You started something without even trying."
        },
        {
          id: "C",
          text: "Order more anyway because it's unlimited and you paid for it.",
          impacts: {
            integrity: -15,
            trust: -5,
            sustainability: -25
          },
          consequence: "You grab more food just because you can. Most of it goes uneaten. You justified it as 'getting your money's worth,' but deep down you know it was wasteful and unnecessary."
        }
      ]
    },
    {
      id: 3,
      title: "The Family Favor",
      category: "nepotism",
      difficulty: "hard",
      sdg_connection: "SDG 16",
      character_context: {
        student: "You're helping select new club members",
        teacher: "You're choosing students for a scholarship program",
        entrepreneur: "You're hiring for your company"
      },
      description: "Your cousin needs this spot desperately. They're qualified, but there's another candidate who's slightly better. Your family expects you to help. They've helped you before.",
      choices: [
        {
          id: "A",
          text: "Choose your cousin. Family comes first, and they're qualified anyway.",
          impacts: {
            integrity: -20,
            trust: 10,
            sustainability: -10
          },
          consequence: "Your cousin gets in. Family is happy. But the better candidate questions the fairness. Others notice the connection. You wonder if this sets a precedent you'll regret."
        },
        {
          id: "B",
          text: "Choose the better candidate. Explain to family it must be merit-based.",
          impacts: {
            integrity: 20,
            trust: -15,
            sustainability: 15
          },
          consequence: "Family is upset. Dinners are awkward for months. But you sleep well knowing it was fair. The selected candidate excels, proving you made the right call. Family eventually understands."
        },
        {
          id: "C",
          text: "Find a reason to disqualify the better candidate so you can choose your cousin guilt-free.",
          impacts: {
            integrity: -30,
            trust: -20,
            sustainability: -15
          },
          consequence: "You fabricate a minor issue with the other candidate. Your cousin gets in. You've crossed a line. The rejected candidate never knows, but you do. It eats at you."
        }
      ]
    },
    {
      id: 4,
      title: "The Exam Leak",
      category: "academic_integrity",
      difficulty: "medium",
      sdg_connection: "SDG 4",
      character_context: {
        student: "Your friend offers you leaked exam answers the night before",
        teacher: "You discover a student has exam answers ahead of time",
        entrepreneur: "A contact offers confidential competitor information"
      },
      description: "Tomorrow's exam determines your final grade. A friend has the questions from someone in the administration office. They're sharing with a small group. 'Everyone's doing it,' they say.",
      choices: [
        {
          id: "A",
          text: "Take the answers. You've studied hard anyway, this just ensures success.",
          impacts: {
            integrity: -25,
            trust: 0,
            sustainability: -10
          },
          consequence: "You ace the exam. But so do 15 others suspiciously. Teachers investigate. Even though you studied, you know this success is tainted. The guilt doesn't fade with the good grade."
        },
        {
          id: "B",
          text: "Refuse and report it to administration.",
          impacts: {
            integrity: 25,
            trust: -20,
            sustainability: 15
          },
          consequence: "The leak is stopped. Fifteen students hate you. You're labeled a snitch for weeks. The exam is rescheduled. You score well anyway. Years later, you have no regrets."
        },
        {
          id: "C",
          text: "Don't take it but don't report it either. Stay neutral.",
          impacts: {
            integrity: -5,
            trust: 5,
            sustainability: 0
          },
          consequence: "You avoid the moral crisis but enable others. The cheaters succeed while honest students struggle. You pass fairly, but wonder if your silence made you complicit in the injustice."
        }
      ]
    },
    {
      id: 5,
      title: "The Construction Shortcut",
      category: "bribery_safety",
      difficulty: "hard",
      sdg_connection: "SDG 16",
      character_context: {
        student: "You're building a project for a competition",
        teacher: "You're overseeing a school construction project",
        entrepreneur: "You're constructing your business facility"
      },
      description: "The contractor offers to finish 2 months early and 30% under budget by using cheaper materials that still 'meet most standards.' They suggest a personal 'thank you' payment of 50 million rupiah to you for approving it.",
      choices: [
        {
          id: "A",
          text: "Accept. The building will be fine, and you need the money.",
          impacts: {
            integrity: -35,
            trust: -15,
            sustainability: -20
          },
          consequence: "You take the money. The building looks good initially. Three years later, cracks appear. During heavy rain, part of the ceiling collapses. Nobody dies, but you can't sleep thinking about what could have happened."
        },
        {
          id: "B",
          text: "Refuse the bribe. Demand original materials even if it takes longer.",
          impacts: {
            integrity: 30,
            trust: 10,
            sustainability: 25
          },
          consequence: "The contractor is annoyed. The project finishes late and over budget. You face criticism for delays. But 10 years later, the building stands strong. You sleep soundly knowing you didn't compromise safety for money."
        },
        {
          id: "C",
          text: "Negotiate to take a smaller 'thank you' but still use cheaper materials.",
          impacts: {
            integrity: -30,
            trust: -10,
            sustainability: -15
          },
          consequence: "You take 20 million instead. The building is completed with mixed materials. You tell yourself it's not that bad. The building has minor issues over the years. You avoid thinking about your decision."
        }
      ]
    },
    {
      id: 6,
      title: "The Plastic Problem",
      category: "environmental",
      difficulty: "easy",
      sdg_connection: "SDG 12",
      character_context: {
        student: "You're buying lunch at the campus cafeteria",
        teacher: "You're organizing a school event with 200 people",
        entrepreneur: "You're choosing packaging for your product"
      },
      description: "The vendor automatically gives you plastic bags and single-use containers. You have a reusable bag in your backpack. No one else is asking for alternatives. It's easier to just take the plastic.",
      choices: [
        {
          id: "A",
          text: "Just take the plastic. One person won't make a difference.",
          impacts: {
            integrity: -10,
            trust: 0,
            sustainability: -20
          },
          consequence: "You take the plastic. It's convenient. Later you see the bag in a drain, contributing to flooding. Indonesia produces 64 million tons of waste annually. You were part of that statistic today."
        },
        {
          id: "B",
          text: "Use your reusable bag and refuse plastic containers.",
          impacts: {
            integrity: 15,
            trust: 5,
            sustainability: 25
          },
          consequence: "The vendor is surprised but complies. Two people behind you see this and ask for no plastic too. Small action, ripple effect. You started something without even trying."
        },
        {
          id: "C",
          text: "Take plastic today but promise yourself to bring reusable items 'next time.'",
          impacts: {
            integrity: -5,
            trust: 0,
            sustainability: -10
          },
          consequence: "You take the plastic with good intentions. Next time comes. You forget your reusable items. The cycle repeats. Good intentions without action change nothing."
        }
      ]
    },
    {
      id: 7,
      title: "The Recommendation Letter",
      category: "professional_ethics",
      difficulty: "medium",
      sdg_connection: "SDG 16",
      character_context: {
        student: "A friend asks you to vouch for them in a club application",
        teacher: "A struggling student asks for a strong recommendation they don't deserve",
        entrepreneur: "An investor asks you to give a positive reference for their friend"
      },
      description: "Someone you know needs a strong recommendation. They're counting on you. Problem: they're not actually qualified. They made mistakes you witnessed. Writing a glowing letter would be dishonest, but refusing could hurt them badly.",
      choices: [
        {
          id: "A",
          text: "Write a glowing recommendation anyway. Everyone exaggerates these things.",
          impacts: {
            integrity: -20,
            trust: 10,
            sustainability: -5
          },
          consequence: "You write the letter. They get the position. Six months later, they fail spectacularly. Your name was on that recommendation. People remember. Your future recommendations lose credibility."
        },
        {
          id: "B",
          text: "Write an honest, balanced letter noting both strengths and weaknesses.",
          impacts: {
            integrity: 20,
            trust: -5,
            sustainability: 10
          },
          consequence: "You write the truth professionally. They're upset initially. They don't get this position but find another that fits better. They eventually thank you for your honesty. Your reputation for truthfulness grows."
        },
        {
          id: "C",
          text: "Decline to write it, making an excuse about being too busy.",
          impacts: {
            integrity: -5,
            trust: -10,
            sustainability: 0
          },
          consequence: "You avoid the hard conversation. They find someone else who writes a dishonest letter. You protected yourself but missed a chance to give honest feedback that could've helped them grow."
        }
      ]
    },
    {
      id: 8,
      title: "The Social Media Truth",
      category: "digital_ethics",
      difficulty: "medium",
      sdg_connection: "SDG 16",
      character_context: {
        student: "You witness something problematic at school",
        teacher: "You see misleading information being shared about your school",
        entrepreneur: "Fake news about your company spreads online"
      },
      description: "A video goes viral showing something that looks bad but lacks full context. You were there. You know the real story is more nuanced. Clarifying might make you unpopular. Staying silent lets misinformation spread.",
      choices: [
        {
          id: "A",
          text: "Post the full context with evidence, even if people won't like it.",
          impacts: {
            integrity: 25,
            trust: -10,
            sustainability: 15
          },
          consequence: "You post the truth with receipts. Comments attack you for 'defending the wrong side.' But quietly, people DM thanking you for clarity. Truth isn't always popular, but it's valuable."
        },
        {
          id: "B",
          text: "Stay silent. It's not your responsibility to correct everyone.",
          impacts: {
            integrity: -15,
            trust: 0,
            sustainability: -10
          },
          consequence: "You stay quiet. The false narrative dominates. Someone's reputation is damaged unfairly. You could've helped but chose comfort over truth. That weighs on you."
        },
        {
          id: "C",
          text: "Share the viral video yourself without context to gain followers.",
          impacts: {
            integrity: -30,
            trust: -15,
            sustainability: -15
          },
          consequence: "You boost the misleading video for engagement. Your followers increase. But you actively spread misinformation for personal gain. The people hurt by this post never forget, even if you do."
        }
      ]
    },
    {
      id: 9,
      title: "The Overtime Pressure",
      category: "workplace_ethics",
      difficulty: "hard",
      sdg_connection: "SDG 8",
      character_context: {
        student: "Your group project leader demands everyone work through the night",
        teacher: "Administration pressures you to give extra unpaid hours",
        entrepreneur: "You need your team to work weekends without extra pay"
      },
      description: "A crucial deadline approaches. Your superior 'suggests' everyone work unpaid overtime, including weekends. They imply future opportunities depend on 'team players.' Others comply quietly. You're exhausted and this feels exploitative.",
      choices: [
        {
          id: "A",
          text: "Comply silently. You need this position and can't risk conflict.",
          impacts: {
            integrity: -10,
            trust: 5,
            sustainability: -15
          },
          consequence: "You work the extra hours unpaid. You keep your position but burn out. The deadline is met. This becomes the expected norm. Your health suffers. You wonder when you stopped valuing your own time."
        },
        {
          id: "B",
          text: "Respectfully decline and cite labor rights or personal boundaries.",
          impacts: {
            integrity: 20,
            trust: -15,
            sustainability: 20
          },
          consequence: "You politely refuse and explain your limits. There's tension. Surprisingly, two others follow your lead. The superior adjusts the timeline. You're watched carefully but eventually respected for having boundaries."
        },
        {
          id: "C",
          text: "Pretend to comply but do minimal work during overtime.",
          impacts: {
            integrity: -15,
            trust: -10,
            sustainability: 0
          },
          consequence: "You show up but barely work. You're dishonest to leadership and unhelpful to teammates who are working hard. You get the worst of both worlds: wasted time and damaged relationships."
        }
      ]
    },
    {
      id: 10,
      title: "The Public Fund Choice",
      category: "resource_management",
      difficulty: "hard",
      sdg_connection: "SDG 16",
      character_context: {
        student: "You're deciding how to spend student organization funds",
        teacher: "You're allocating a limited school budget",
        entrepreneur: "You're choosing between employee welfare and business expansion"
      },
      description: "You control 500 million rupiah in public funds. Option A: Visible project (new building facade) that looks good for photos and pleases donors. Option B: Invisible but critical infrastructure (plumbing, electrical) that truly helps people. You need donor support for future funding.",
      choices: [
        {
          id: "A",
          text: "Choose the visible project. You need to show results to keep funding.",
          impacts: {
            integrity: -15,
            trust: 10,
            sustainability: -20
          },
          consequence: "The new facade looks amazing in photos. Donors are happy. Behind the scenes, pipes still leak and electrical issues persist. People praise the appearance while infrastructure crumbles. You got short-term wins, long-term problems."
        },
        {
          id: "B",
          text: "Choose the infrastructure. Explain the decision transparently to donors.",
          impacts: {
            integrity: 25,
            trust: 5,
            sustainability: 30
          },
          consequence: "You fix the invisible problems. Some donors question why there are no 'impressive' photos. You explain patiently. Years later, the building functions beautifully. People don't see infrastructure, but they benefit daily. True service isn't always photogenic."
        },
        {
          id: "C",
          text: "Split funds trying to do both, ending up doing neither well.",
          impacts: {
            integrity: -10,
            trust: -15,
            sustainability: -20
          },
          consequence: "You compromise by splitting funds. The facade is incomplete. The infrastructure is partially fixed. Both projects fail. You tried to please everyone and satisfied no one. Sometimes choosing nothing is worse than choosing one."
        }
      ]
    },
    {
      id: 11,
      title: "The Shortcut Home",
      category: "traffic_ethics",
      difficulty: "easy",
      sdg_connection: "SDG 11",
      character_context: {
        student: "You're driving home after a long day",
        teacher: "You're rushing to get to school on time",
        entrepreneur: "You're driving to an important client meeting"
      },
      description: "Traffic is terrible. You're late. There's a motorcycle lane that's completely empty. No cameras, no police. Everyone else is stuck in the car lane. You could easily slip into the motorcycle lane and save 20 minutes.",
      choices: [
        {
          id: "A",
          text: "Stay in your lane. Rules exist for a reason.",
          impacts: {
            integrity: 10,
            trust: 5,
            sustainability: 10
          },
          consequence: "You sit in traffic. You're late, but you followed the rules. Other drivers stay in their lanes too. Small acts of compliance keep the system working. You arrive with a clear conscience."
        },
        {
          id: "B",
          text: "Use the motorcycle lane just this once. It's an emergency.",
          impacts: {
            integrity: -15,
            trust: -10,
            sustainability: -15
          },
          consequence: "You zip through the motorcycle lane. You save time but cut off several motorcycles. Other cars see you and start doing the same. Traffic rules only work when everyone follows them. You contributed to the problem."
        },
        {
          id: "C",
          text: "Use the shoulder instead, it's technically not the motorcycle lane.",
          impacts: {
            integrity: -20,
            trust: -15,
            sustainability: -10
          },
          consequence: "You convince yourself the shoulder is different. It's not. You're still breaking rules with mental gymnastics to feel better about it. Self-deception doesn't change what you did."
        }
      ]
    },
    {
      id: 12,
      title: "The Anonymous Tip",
      category: "whistleblowing",
      difficulty: "hard",
      sdg_connection: "SDG 16",
      character_context: {
        student: "You discovered someone is cheating the system in your organization",
        teacher: "You know a colleague is manipulating student grades for money",
        entrepreneur: "You discovered your business partner is doing something illegal"
      },
      description: "You have concrete evidence of serious wrongdoing. If you report it, the investigation could expose you as the source. The wrongdoer is well-connected and vindictive. But people are being harmed by their actions every day.",
      choices: [
        {
          id: "A",
          text: "Report it through official channels, using your real identity.",
          impacts: {
            integrity: 30,
            trust: 10,
            sustainability: 20
          },
          consequence: "You submit the report. The investigation begins. There's backlash. People question your motives. But the wrongdoing stops. Three months of discomfort prevent years of harm. You stood up when it mattered."
        },
        {
          id: "B",
          text: "Submit an anonymous tip with all the evidence.",
          impacts: {
            integrity: 20,
            trust: 5,
            sustainability: 15
          },
          consequence: "You send everything anonymously. The investigation proceeds but moves slower without a witness. Eventually, the truth comes out. You protected yourself while still doing the right thing. Sometimes strategic courage is enough."
        },
        {
          id: "C",
          text: "Stay silent. It's not worth the personal risk.",
          impacts: {
            integrity: -25,
            trust: -20,
            sustainability: -20
          },
          consequence: "You delete the evidence and try to forget. But you can't. The wrongdoing continues. More people are harmed. You had the power to stop it and chose safety over justice. That choice haunts you."
        }
      ]
    },
    {
      id: 13,
      title: "The Expired Product",
      category: "consumer_safety",
      difficulty: "medium",
      sdg_connection: "SDG 12",
      character_context: {
        student: "You're working part-time at a store",
        teacher: "You're organizing a school canteen",
        entrepreneur: "You're managing inventory in your business"
      },
      description: "You find products that expired yesterday. Your supervisor says to just change the date stickers - they're only one day past, perfectly safe, and throwing them away wastes money. No one will know. But policy says expired products must be discarded.",
      choices: [
        {
          id: "A",
          text: "Refuse and dispose of the expired products properly.",
          impacts: {
            integrity: 20,
            trust: 15,
            sustainability: 10
          },
          consequence: "You throw them away despite pressure. Your supervisor is annoyed. But you protected consumers from even a small risk. Later, another batch is found with serious contamination. Your strict adherence to policy becomes validated."
        },
        {
          id: "B",
          text: "Change the stickers. It's only one day and they seem fine.",
          impacts: {
            integrity: -20,
            trust: -15,
            sustainability: -5
          },
          consequence: "You relabel them. They sell quickly. Nothing bad happens this time. But you've normalized cutting corners on safety. Next time the expiration gap might be wider. Corruption starts with small compromises."
        },
        {
          id: "C",
          text: "Take the expired products home for yourself instead of selling them.",
          impacts: {
            integrity: -10,
            trust: 0,
            sustainability: 5
          },
          consequence: "You keep them for personal use. It reduces waste and doesn't harm customers. But it's still theft and policy violation. You're making exceptions for yourself that you wouldn't make for others."
        }
      ]
    },
    {
      id: 14,
      title: "The Fake Certification",
      category: "credential_fraud",
      difficulty: "hard",
      sdg_connection: "SDG 4",
      character_context: {
        student: "Someone offers to sell you a professional certification without taking the exam",
        teacher: "A service offers fake teaching credentials to help you get promoted",
        entrepreneur: "A vendor offers fake quality certifications for your products"
      },
      description: "You need a specific certification for advancement. The exam is expensive and time-consuming. Someone offers you a 'guaranteed pass' service - they have someone take the exam for you, or they sell certificates that look identical to real ones. Many people you know have done it.",
      choices: [
        {
          id: "A",
          text: "Take the legitimate exam yourself, however long it takes.",
          impacts: {
            integrity: 25,
            trust: 10,
            sustainability: 20
          },
          consequence: "You study hard and take the real exam. It's difficult but you pass. You actually learned the material. When you use those skills later, you're competent. Your certification actually means something."
        },
        {
          id: "B",
          text: "Buy the certificate. Everyone does it and you already know the material anyway.",
          impacts: {
            integrity: -30,
            trust: -20,
            sustainability: -15
          },
          consequence: "You buy the fake credential. You advance quickly. But when complex situations arise requiring that expertise, you struggle. Others who actually earned it notice. Your credibility suffers when it matters most."
        },
        {
          id: "C",
          text: "Use the 'guaranteed pass' service but actually take the exam yourself.",
          impacts: {
            integrity: -25,
            trust: -15,
            sustainability: -10
          },
          consequence: "You pay for inside information and favorable grading. You technically took it, but it wasn't legitimate. You tell yourself it's not as bad as a fake certificate, but you still cheated. The mental gymnastics don't change reality."
        }
      ]
    },
    {
      id: 15,
      title: "The Water Usage",
      category: "environmental",
      difficulty: "easy",
      sdg_connection: "SDG 6",
      character_context: {
        student: "Your campus has unlimited water for dorms",
        teacher: "Your school has water conservation issues",
        entrepreneur: "Your business uses significant water resources"
      },
      description: "There's a regional water shortage. Authorities ask everyone to reduce consumption voluntarily. There's no monitoring, no penalties. Your neighbors keep watering lawns and washing cars daily. You could save water, but will your small effort matter if others don't?",
      choices: [
        {
          id: "A",
          text: "Significantly reduce your water use despite what others do.",
          impacts: {
            integrity: 15,
            trust: 5,
            sustainability: 25
          },
          consequence: "You cut your usage by 40%. Your lawn turns brown while neighbors' stay green. Then a few neighbors ask how you're doing it. Three families start conserving too. Individual action can inspire collective change."
        },
        {
          id: "B",
          text: "Make token efforts but maintain your normal lifestyle.",
          impacts: {
            integrity: -5,
            trust: 0,
            sustainability: -10
          },
          consequence: "You take shorter showers but keep watering your lawn. You're doing the easy parts while avoiding real sacrifice. During the shortage crisis, you were part of the problem while feeling like part of the solution."
        },
        {
          id: "C",
          text: "Don't change anything. Your individual use won't solve a systemic problem.",
          impacts: {
            integrity: -15,
            trust: -10,
            sustainability: -20
          },
          consequence: "You continue normal usage. Systemic problems do need systemic solutions, but they're built from individual choices. When the shortage worsens, you can't blame others when you did nothing yourself."
        }
      ]
    },
    {
      id: 16,
      title: "The Group Credit",
      category: "academic_integrity",
      difficulty: "medium",
      sdg_connection: "SDG 4",
      character_context: {
        student: "Your group project had one person do all the work",
        teacher: "You're grading a group project with unequal contributions",
        entrepreneur: "A major client project was completed mostly by one team member"
      },
      description: "Your group project is done. One person did 80% of the work while three others barely contributed. Now everyone gets the same grade and credit. The hard worker says nothing, not wanting to cause drama. You could stay silent or speak up.",
      choices: [
        {
          id: "A",
          text: "Speak privately with the instructor about the unequal contribution.",
          impacts: {
            integrity: 20,
            trust: -10,
            sustainability: 15
          },
          consequence: "You tell the truth. The instructor investigates and adjusts grades fairly. Your group is upset with you. But the hard worker thanks you later. Fair recognition matters, even when it's uncomfortable to advocate for it."
        },
        {
          id: "B",
          text: "Stay silent. The hard worker didn't complain, so it's not your place.",
          impacts: {
            integrity: -15,
            trust: 5,
            sustainability: -10
          },
          consequence: "You accept the grade and say nothing. The slackers learn they can coast on others' work. The hard worker feels used but silent. You enabled an unfair system by not challenging it."
        },
        {
          id: "C",
          text: "Publicly thank the main contributor but don't tell the instructor.",
          impacts: {
            integrity: -5,
            trust: 0,
            sustainability: 0
          },
          consequence: "You acknowledge their work socially but not officially. It's a gesture without substance. The grade remains the same. You showed awareness without taking action. Performance over principle."
        }
      ]
    },
    {
      id: 17,
      title: "The Queue Jumper",
      category: "social_ethics",
      difficulty: "easy",
      sdg_connection: "SDG 16",
      character_context: {
        student: "You're waiting in a long line at the campus cafeteria",
        teacher: "You're in a queue at a government office",
        entrepreneur: "You're in line at a busy business center"
      },
      description: "You've been waiting in line for 45 minutes. Someone you know walks up and asks if they can 'quickly join' you because they're in a rush. Everyone's in a rush. The people behind you are watching to see what you do.",
      choices: [
        {
          id: "A",
          text: "Politely say no and suggest they wait like everyone else.",
          impacts: {
            integrity: 15,
            trust: 10,
            sustainability: 10
          },
          consequence: "They're annoyed but move to the back. People behind you nod appreciatively. You maintained fairness. Small moments of principle matter. Queue ethics reflect broader values about rules and fairness."
        },
        {
          id: "B",
          text: "Let them join you. It's just one person.",
          impacts: {
            integrity: -10,
            trust: -15,
            sustainability: -5
          },
          consequence: "They cut in. People behind you are visibly frustrated. Some mutter complaints. You just taught everyone that rules don't matter if you have connections. One person, multiplied by every similar decision, breaks systems."
        },
        {
          id: "C",
          text: "Let them go ahead of you, then you retake your original spot.",
          impacts: {
            integrity: -15,
            trust: -10,
            sustainability: -5
          },
          consequence: "You try to have it both ways. Neither you nor your friend actually gave up anything - the people behind you did. You found a way to be unfair while feeling generous. Cleverness doesn't equal integrity."
        }
      ]
    },
    {
      id: 18,
      title: "The Data Privacy",
      category: "digital_ethics",
      difficulty: "medium",
      sdg_connection: "SDG 16",
      character_context: {
        student: "You have access to personal data from a survey you conducted",
        teacher: "You have student information that could be valuable to researchers",
        entrepreneur: "Your app collects user data that advertisers will pay for"
      },
      description: "You have access to personal data from hundreds of people who agreed to one purpose. Now someone offers good money for that data for a different purpose. The data is anonymized. Users will never know. But they didn't consent to this use.",
      choices: [
        {
          id: "A",
          text: "Refuse and delete the data after completing the original purpose.",
          impacts: {
            integrity: 25,
            trust: 20,
            sustainability: 15
          },
          consequence: "You turn down the money and delete everything. It costs you, but you honored the original agreement. Later, a data breach scandal hits your field. Your reputation for ethics becomes an asset."
        },
        {
          id: "B",
          text: "Sell the anonymized data. They consented to collection, and it's anonymous.",
          impacts: {
            integrity: -20,
            trust: -25,
            sustainability: -10
          },
          consequence: "You sell it. The money is good. But 'anonymized' data can often be re-identified. Six months later, people discover their data was misused. Trust in your entire field drops. You were part of that erosion."
        },
        {
          id: "C",
          text: "Ask participants for retroactive consent to additional use.",
          impacts: {
            integrity: 10,
            trust: 10,
            sustainability: 10
          },
          consequence: "You contact everyone asking permission. It's tedious. Most say no, some say yes. You only use data from those who consented to the new purpose. It's less profitable but ethical. Consent actually means something when it's genuine."
        }
      ]
    },
    {
      id: 19,
      title: "The Charity Funds",
      category: "financial_ethics",
      difficulty: "hard",
      sdg_connection: "SDG 10",
      character_context: {
        student: "You're managing funds for a student charity drive",
        teacher: "You're handling donations for a school fundraiser",
        entrepreneur: "You're managing a corporate social responsibility budget"
      },
      description: "You raised 100 million rupiah for charity. 15 million is left over after the project ends. You could donate it all to the cause, but organizational costs were high and you weren't paid for hundreds of hours of work. Nobody's tracking the final accounting closely.",
      choices: [
        {
          id: "A",
          text: "Donate every rupiah to the cause as promised. Transparency is everything.",
          impacts: {
            integrity: 30,
            trust: 20,
            sustainability: 20
          },
          consequence: "You donate everything and publish complete financial records. It costs you personally, but donors see total accountability. Your next fundraiser receives twice the donations because people trust you completely."
        },
        {
          id: "B",
          text: "Take a reasonable amount for expenses and donate the rest.",
          impacts: {
            integrity: -20,
            trust: -25,
            sustainability: -15
          },
          consequence: "You keep 10 million for 'expenses.' You justify it as fair compensation. But donors gave money for charity, not for your unpaid work. When this comes out later, all your charity work is questioned retroactively."
        },
        {
          id: "C",
          text: "Use the leftover funds to start the next charity project.",
          impacts: {
            integrity: 5,
            trust: 5,
            sustainability: 15
          },
          consequence: "You roll it into a new project without asking donors. Your intention is good, but you made that decision unilaterally. Some donors are fine with it, others wanted their money going to the original cause. Transparency matters even with good intentions."
        }
      ]
    },
    {
      id: 20,
      title: "The Emergency Choice",
      category: "crisis_ethics",
      difficulty: "hard",
      sdg_connection: "SDG 11",
      character_context: {
        student: "There's an emergency evacuation at your campus",
        teacher: "Your school faces a sudden crisis situation",
        entrepreneur: "Your business faces a critical emergency"
      },
      description: "A crisis hits. Resources are limited. You can save 10 people immediately using official procedures, or risk bending rules to possibly save 15 people. The 'safe' choice guarantees 10 lives. The risky choice might save more or might fail completely, potentially costing lives.",
      choices: [
        {
          id: "A",
          text: "Follow the established emergency protocol. Save the guaranteed 10.",
          impacts: {
            integrity: 20,
            trust: 15,
            sustainability: 20
          },
          consequence: "You stick to proven procedures. Ten people are saved efficiently. You wonder about the other 5, but protocols exist because they work reliably. In emergencies, tested systems save more lives than improvisation."
        },
        {
          id: "B",
          text: "Break protocol to attempt saving all 15.",
          impacts: {
            integrity: 10,
            trust: -10,
            sustainability: 5
          },
          consequence: "You try the risky approach. You manage to save 13 people, but it was chaotic and could have failed badly. You helped more people, but you also created unpredictability in an emergency. Results justified the means this time, but barely."
        },
        {
          id: "C",
          text: "Follow protocol but prioritize people you know in the group of 10.",
          impacts: {
            integrity: -25,
            trust: -30,
            sustainability: -20
          },
          consequence: "You save 10 people following the rules, but you chose which 10 based on relationships. Some saved, some not. Those left behind learn you prioritized connections over need. Your bias in crisis becomes impossible to defend."
        }
      ]
    }
  ]
};
