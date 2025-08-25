# Contributing to Awesome AI

Thank you for your interest in contributing to Awesome AI! This document will guide you through the process of adding new AI tools and resources to our curated collection.

## How to Contribute

### 1. Add New Items to the Awesome AI List

The main data file is located at `src/data/awesome-ai-list.ts`. To add a new AI tool or resource:

#### 1.1 Required Fields

Add a new object to the `AwesomeAI` array with the following required fields:

- **`title`** - The name of the AI tool/resource
- **`description`** - A clear, concise description (use your own words or copy from the official website)
- **`website`** - The most reliable and official URL for the project
- **`tags`** - An array of relevant tags from the available `TagType` options

#### 1.2 Optional Fields

- **`preview`** - An image URL for the tool (set to `null` to use our serverless screenshot service)
- **`source`** - GitHub/GitLab URL if the project is open source (set to `null` if proprietary)

#### 1.3 Available Tags

Make sure to use only tags that exist in the `TagType` union:

- `favorite` - Our top recommendations
- `opensource` - Open source tools
- `proprietary` - Proprietary software
- `foundationModels` - Core AI models and APIs
- `developmentEnvironment` - IDEs, code assistants, testing, documentation
- `appDevelopment` - Full-stack generators, UI/UX tools, backend platforms
- `mediaGeneration` - Image, video, and audio generation tools
- `businessProductivity` - Business and productivity tools
- `infrastructureOperations` - Model serving, deployment, security
- `researchEducation` - Research tools and educational resources
- `versionControl` - Git clients, PR tools, code review
- `codeGeneration` - Code generators and shell tools
- `pluginsIntegrations` - Development agents and integrations
- `contentGeneration` - Content creation tools
- `projectManagement` - Project management and workflow tools

#### 1.4 Example Entry

```typescript
{
  title: "Example AI Tool",
  description: "A powerful AI tool that helps developers write better code",
  website: "https://example-ai-tool.com",
  preview: null, // Will use our screenshot service
  source: "https://github.com/example/ai-tool", // Open source
  tags: ["opensource", "developmentEnvironment", "codeGeneration"]
}
```

### 2. Generate Updated Documentation

After adding your new items, regenerate the project documentation:

```bash
npm run generate-md
```

This command will:
- Parse the updated `awesome-ai-list.ts` file
- Generate a new `README.md` with all current items
- Update the tags and tools sections

### 3. Submit Your Changes

1. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Add [Tool Name] to Awesome AI list"
   ```

2. **Create a pull request** with a descriptive title and description
3. **Wait for review** - we'll get back to you soon! 

## Guidelines for Contributions

### Quality Standards

- **Accuracy**: Ensure all information is correct and up-to-date
- **Relevance**: Only add tools that are genuinely useful for AI development/usage
- **Completeness**: Fill in all required fields with meaningful information
- **Uniqueness**: Avoid duplicate entries

### Description Guidelines

- Keep descriptions concise (1-2 sentences)
- Focus on what makes the tool unique or valuable
- Use clear, professional language
- Avoid marketing hype or subjective claims

### Tag Selection

- Choose the most relevant tags (2-4 tags per item is ideal)
- Use `favorite` sparingly - only for exceptional tools
- Ensure `opensource`/`proprietary` tags are accurate
- Select tags that help users discover the tool

## Development Setup

If you want to work on the project locally:

1. **Clone the repository:**
   ```bash
   git clone [repository-url]
   cd awesome-ai
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Generate documentation:**
   ```bash
   npm run generate-md
   ```

## Need Help?

- **Issues**: Create an issue for bugs or feature requests
- **Discussions**: Use GitHub Discussions for questions and ideas
- **Pull Requests**: We welcome all contributions, big and small!

## Thank You! 🎉

Your contribution will allow us to better hands-control robots and Skynet ;)

*You don't need to be afraid of animals, you just need to be able to get along with them.*

---
