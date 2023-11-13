# Saint Andrews Design System

## Introduction

Welcome to the Saint Andrews Design System. This system provides a comprehensive guide and toolkit for building user interfaces consistent with Saint Andrews' brand and design principles. It's built to work seamlessly with the latest versions of npm (10.2.3) and Node.js (18.17.0).

## Local Setup

### Installing Node.js and npm

#### For Windows:

1. Download the Windows installer from the [Node.js website](https://nodejs.org/).
2. Run the installer.
3. Follow the prompts in the installer (accept the license agreement, click the NEXT button a bunch of times, and finally install the software).
4. Restart your computer.
5. To check if the installation was successful, open the Command Prompt and type `node -v` and `npm -v`. This should display the installed versions of Node.js and npm.

#### For Mac:

1. You can install Node.js and npm using Homebrew. First, install Homebrew by opening the Terminal and running:

   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. Once Homebrew is installed, install Node.js (which includes npm) by running:

   ```bash
   brew install node
   ```

3. Verify the installation by typing `node -v` and `npm -v` in the Terminal. This will display the versions of Node.js and npm installed.

### Cloning the Repository

To clone the repository, open your terminal (Command Prompt for Windows, Terminal for Mac) and run:

```bash
git clone [https://gitlab-its.st-andrews.ac.uk/digital-communications/standards/standards-design-system.git]
```

### Setting Up the Project

After cloning the repository, navigate to the cloned directory:

```bash
cd saint-andrews-design-system
```

Install all the necessary Node.js dependencies:

```bash
npm install
```

### Running the Project Locally

To run the project locally on your machine, use:

```bash
npm run dev
```

This will start the local development server, typically accessible at `http://localhost:3000` but you will be prompted in the terminal at what address you will find the project running locally.

## Contributing to the Project

1. **Create a New Branch**: For every new feature or bug fix, create a new branch:

   ```bash
   git checkout -b <your-branch-name>
   ```

   Replace `<your-branch-name>` with a descriptive name for your branch.

2. **Make Your Changes**: Implement your features or fixes.

3. **Commit Your Changes**: Once your changes are complete, commit them:

   ```bash
   git commit -am "Add a descriptive commit message"
   ```

4. **Push to the Branch**: Push your changes to your branch:

   ```bash
   git push origin <your-branch-name>
   ```

5. **Open a Pull Request**: Go to the repository on GitHub and open a pull request for your branch.

6. **Wait for your Pull Request to be reviewed and approved, never merge to main without consulting with other team members**: Go to the repository on GitHub and open a pull request for your branch.

Please ensure your code adheres to the project's coding standards and guidelines.
