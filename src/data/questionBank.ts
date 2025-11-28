export type Role = 'student' | 'teacher' | 'entrepreneur';

export interface Impacts {
  integrity: number;
  trust: number;
  sustainability: number;
}

export interface QuestionChoice {
  id: 'A' | 'B' | 'C' | 'D';
  text: string;
  impacts: Impacts;
}

export interface RoleQuestion {
  id: number;
  text: string;
  choices: QuestionChoice[];
}

export interface QuestionBank {
  roles: Record<Role, RoleQuestion[]>;
}

import qbRaw from '../../question bank?raw';

function parseImpacts(block: string): Impacts {
  const m = block.match(/Integrity:\s*([+-]?\d+)\s*,\s*Public\s+Trust:\s*([+-]?\d+)\s*,\s*Sustainability:\s*([+-]?\d+)/i);
  return {
    integrity: m ? parseInt(m[1], 10) : 0,
    trust: m ? parseInt(m[2], 10) : 0,
    sustainability: m ? parseInt(m[3], 10) : 0,
  };
}

function parseRoleSection(raw: string): RoleQuestion[] {
  const lines = raw.split(/\r?\n/);
  const questions: RoleQuestion[] = [];
  let currentId = 0;
  for (let i = 0; i < lines.length; i++) {
    const qMatch = lines[i].match(/^Question\s+(\d+):\s*(.+)$/i);
    if (qMatch) {
      currentId = parseInt(qMatch[1], 10);
      const text = qMatch[2].trim();
      const choices: QuestionChoice[] = [];
      for (let j = 1; j <= 8 && i + j < lines.length; j++) {
        const line = lines[i + j];
        const cMatch = line.match(/^([ABCD])\)\s*(.+?)\s*\(([^)]+)\)\s*$/);
        if (cMatch) {
          choices.push({
            id: cMatch[1] as 'A' | 'B' | 'C' | 'D',
            text: cMatch[2].trim(),
            impacts: parseImpacts(cMatch[3]),
          });
        }
      }
      if (choices.length === 4) {
        questions.push({ id: currentId, text, choices });
      }
    }
  }
  return questions.sort((a, b) => a.id - b.id);
}

function parseAll(raw: string): Record<Role, RoleQuestion[]> {
  const lines = raw.split(/\r?\n/);
  const roles: Record<Role, RoleQuestion[]> = {
    student: [],
    teacher: [],
    entrepreneur: [],
  };
  let currentRole: Role | null = null;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (/^STUDENT PROFILE/i.test(line)) currentRole = 'student';
    else if (/^TEACHER PROFILE/i.test(line)) currentRole = 'teacher';
    else if (/^ENTREPRENEUR PROFILE/i.test(line)) currentRole = 'entrepreneur';

    const qMatch = line.match(/^Question\s+(\d+):\s*(.+)$/i);
    if (qMatch && currentRole) {
      const id = parseInt(qMatch[1], 10);
      const text = qMatch[2].trim();
      const choices: QuestionChoice[] = [];
      let lookahead = 1;
      while (choices.length < 4 && i + lookahead < lines.length) {
        const ln = lines[i + lookahead];
        const cMatch = ln.match(/^([ABCD])\)\s*(.+?)\s*\(([^)]+)\)\s*$/);
        if (cMatch) {
          choices.push({
            id: cMatch[1] as 'A' | 'B' | 'C' | 'D',
            text: cMatch[2].trim(),
            impacts: parseImpacts(cMatch[3]),
          });
        }
        lookahead++;
      }
      if (choices.length === 4) {
        roles[currentRole].push({ id, text, choices });
      }
    }
  }
  // Sort and normalize ids per role
  (Object.keys(roles) as Role[]).forEach((r) => {
    roles[r] = roles[r]
      .sort((a, b) => a.id - b.id)
      .map((q, idx) => ({ ...q, id: idx + 1 }));
  });
  return roles;
}

export const questionBank: QuestionBank = (() => {
  const roles = parseAll(qbRaw);
  return { roles };
})();
