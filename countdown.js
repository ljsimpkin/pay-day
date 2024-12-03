function calculateDaysUntilNext18th() {
    const today = new Date();
    let next18th = new Date(today.getFullYear(), today.getMonth() + 1, 18);

    if (today.getDate() > 18) {
        next18th = new Date(today.getFullYear(), today.getMonth() + 2, 18);
    }

    const timeDifference = next18th - today;
    const daysUntilNext18th = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return daysUntilNext18th;
}

function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    const days = calculateDaysUntilNext18th();
    countdownElement.textContent = `${days} day(s) until the 18th of next month.`;
}

document.addEventListener('DOMContentLoaded', updateCountdown);
