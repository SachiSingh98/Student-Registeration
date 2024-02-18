export const Year = []
const currentYear = new Date().getFullYear()
    for (let i = 2000; i <= currentYear; i++) {
        Year.push(i)
    }

    console.log(Year)
