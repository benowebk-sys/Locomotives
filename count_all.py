from pathlib import Path
import re

content = Path('main.js').read_text(encoding='utf8')

# Count questions in each original array before normalization
arrays = ['railwayQuiz','questionsTF_1','questionsTF_2','mcq_1','mcq_2','maintenanceQuestions','questions61_75','questions76_90','questions91_105','questions106_120','questions76to90','questions91to105']
total = 0
for name in arrays:
    pattern = re.compile(r'const ' + re.escape(name) + r' = \[([\s\S]*?)\];')
    m = pattern.search(content)
    if m:
        section = m.group(1)
        count = section.count('"question":')  # More precise count
        print(f'{name}: {count} questions')
        total += count
    else:
        print(f'{name}: NOT FOUND')

print(f'\nTotal before merge: {total}')

# Count in final normalized array
final_match = re.search(r'const allQuestions = \[([\s\S]*?)\]\.map\(normalizeQuestion\)', content)
if final_match:
    final_section = final_match.group(1)
    # Count spread operators
    spreads = final_section.count('...')
    print(f'Spread operators in allQuestions: {spreads}')
    print(f'Expected to combine {spreads} arrays')
