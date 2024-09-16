// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function () {
    const colorBox = document.getElementById('color-box'); // Select the color box
    const changeColorBtn = document.getElementById('change-color-btn'); // Select the button

    // Function to generate a random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Event listener for the button click
    changeColorBtn.addEventListener('click', function () {
        const randomColor = getRandomColor(); // Get a random color
        colorBox.style.backgroundColor = randomColor; // Apply it to the color box
    });
});
