function calculateDaysUntilNext18th() {
    const today = new Date();
    let next18th = new Date(today.getFullYear(), today.getMonth(), 18);

    if (today.getDate() > 18) {
        next18th = new Date(today.getFullYear(), today.getMonth() + 1, 18);
    }

    // Adjust if the 18th is a weekend
    const dayOfWeek = next18th.getDay();
    if (dayOfWeek === 6) { // Saturday
        next18th.setDate(next18th.getDate() - 1); // Move to Friday
    } else if (dayOfWeek === 0) { // Sunday
        next18th.setDate(next18th.getDate() - 2); // Move to Friday
    }
    const timeDifference = next18th - today;
    const daysUntilNext18th = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return daysUntilNext18th;
}

function updateCountdown() {
    const countdownElement = document.querySelector('h1');
    const days = calculateDaysUntilNext18th();
    const today = new Date();
    let next18th = new Date(today.getFullYear(), today.getMonth(), 18);

    if (today.getDate() > 18) {
        next18th = new Date(today.getFullYear(), today.getMonth() + 1, 18);
    }

    const dayOfWeek = next18th.toLocaleString('en-US', { weekday: 'long' });
    const dateString = next18th.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    const dayLabel = days === 1 ? 'day' : 'days';
    if (days > 0) {
        countdownElement.textContent = `${days} ${dayLabel} until payday on ${dayOfWeek}, ${dateString}! 💰`;
    } else {
        countdownElement.textContent = `Payday is today! 💰`;
    }
}

document.addEventListener('DOMContentLoaded', updateCountdown);
