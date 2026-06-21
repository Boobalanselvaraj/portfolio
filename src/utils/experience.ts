/**
 * Calculates years of experience from a start date (defaults to May 2024).
 * Returns a formatted string like "2+" or "2.5+".
 */
export const calculateExperience = (startDateStr: string = '2024-05-06'): string => {
    const startDate = new Date(startDateStr);
    const today = new Date();
    
    // Calculate total months difference
    let totalMonths = (today.getFullYear() - startDate.getFullYear()) * 12 + (today.getMonth() - startDate.getMonth());
    
    // If the current day of the month is before the start day of the month, subtract one month
    if (today.getDate() < startDate.getDate()) {
        if (totalMonths > 0) {
            totalMonths--;
        }
    }
    
    const years = Math.floor(totalMonths / 12);
    const remainingMonths = totalMonths % 12;
    
    return `${years}.${remainingMonths}`;
};
