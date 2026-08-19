export function addDaysAndFormat(daysToIncrement: number, baseDate: Date = new Date()): Date {
  const targetDate = new Date(baseDate);
  targetDate.setDate(targetDate.getDate() + daysToIncrement);
  const year = targetDate.getFullYear();
  const month = String(targetDate.getMonth() + 1).padStart(2, '0'); 
  const day = String(targetDate.getDate()).padStart(2, '0');
  return targetDate;
}