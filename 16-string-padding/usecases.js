const names = ['akash', 'radhika', 'seshu']
const marks = [2, 30, 190]
const passOrFail = ["Fail", "Pass", "Pass"]

console.log(
    "Names".padStart(10), '|',
    "Marks".padStart(10), '|',
    "Pass/Fail".padStart(10), '|',
);

console.log("".padEnd(38, "-"));

for (let i = 0; i < names.length; i++) {
    const paddedName = names[i].padEnd(10)
    const paddedMarks = marks[i].toString().padEnd(10)
    const paddedStatus = passOrFail[i].toString().padEnd(10)
    console.log(paddedName, '|', paddedMarks,
        '|', paddedStatus, '|')
}

