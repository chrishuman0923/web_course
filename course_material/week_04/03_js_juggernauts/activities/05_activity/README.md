# Car Game

## Instructions

- Using the code from the previous activity as a starting point, create a complete application that meets the following specifications:

  - Users can enter keyboard input (letters).

  - Each of the car's methods are assigned to a key.

    - `driveToWork()` is assigned to the "d" key.
    - `driveAroundWorld()` is assigned to the "w" key.
    - `honk()` is assigned to the "h" key.
    - `getTuneUp()` is assigned to the "t" key.

  - When the user presses a key, it calls the appropriate function.

  - These letters also trigger a global function called `reWriteStats()` that logs the car's make, model, color, mileage, and `isWorking` status to the console.

- **HINT:\*** You WILL need to use the `document.onkeyup()` function to collect input from the user's keyboard.
