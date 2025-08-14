const fs = require('fs');
const path = require('path');

// Function to extract content from TypeScript file
function extractFromTSFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Extract Tags object
  const tagsMatch = content.match(/export const Tags: \{[\s\S]*?\};/);
  if (!tagsMatch) {
    throw new Error('Could not find Tags object in the file');
  }
  
  // Extract AwesomeAI array
  const awesomeAIMatch = content.match(/const AwesomeAI: AwesomeAI\[\] = \[([\s\S]*?)\];/);
  if (!awesomeAIMatch) {
    throw new Error('Could not find AwesomeAI array in the file');
  }
  
  return {
    tagsContent: tagsMatch[0],
    awesomeAIContent: awesomeAIMatch[1]
  };
}

// Function to parse Tags object
function parseTags(tagsContent) {
  const tags = {};
  
  // Extract each tag definition
  const tagMatches = tagsContent.matchAll(/(\w+):\s*\{\s*label:\s*"([^"]+)",\s*description:\s*"([^"]+)",\s*color:\s*"([^"]+)"/g);
  
  for (const match of tagMatches) {
    const [, tagType, label, description, color] = match;
    tags[tagType] = { label, description, color };
  }
  
  return tags;
}

// Function to parse AwesomeAI array
function parseAwesomeAI(awesomeAIContent) {
  const items = [];
  
  // Split by individual items (each item starts with {)
  const itemMatches = awesomeAIContent.match(/\{[^}]+\}/g);
  
  if (!itemMatches) return items;
  
  for (const itemMatch of itemMatches) {
    try {
      // Extract title, description, and website
      const titleMatch = itemMatch.match(/title:\s*"([^"]+)"/);
      const descriptionMatch = itemMatch.match(/description:\s*"([^"]+)"/);
      const websiteMatch = itemMatch.match(/website:\s*"([^"]+)"/);
      
      if (titleMatch && descriptionMatch && websiteMatch) {
        items.push({
          title: titleMatch[1],
          description: descriptionMatch[1],
          website: websiteMatch[1]
        });
      }
    } catch (error) {
      console.warn('Failed to parse item:', itemMatch);
    }
  }
  
  return items;
}

// Function to generate markdown
function generateMarkdown(tags, awesomeAIItems) {
  let markdown = `# Awesome AI

A curated list of AI tools, platforms, and resources for developers, creators, and businesses.

## Tags

`;

  // Generate tags section
  Object.entries(tags).forEach(([tagType, tag], index) => {
    const link = `https://artemshar.space/awesome-ai/?tags=${tagType}`;
    markdown += `${index + 1}. [${tag.label}](${link})\n`;
  });

  markdown += `\n## Tools & Resources\n\n`;

  // Generate items section
  awesomeAIItems.forEach(item => {
    markdown += `- [${item.title}](${item.website}) - ${item.description}\n`;
  });

  return markdown;
}

// Main function
function main() {
  try {
    const inputFile = path.join(__dirname, '..', 'src', 'data', 'awesome-ai-list.ts');
    const outputFile = path.join(__dirname, '..', 'README.md');
    
    console.log('Reading TypeScript file...');
    const { tagsContent, awesomeAIContent } = extractFromTSFile(inputFile);
    
    console.log('Parsing tags...');
    const tags = parseTags(tagsContent);
    
    console.log('Parsing AwesomeAI items...');
    const awesomeAIItems = parseAwesomeAI(awesomeAIContent);
    
    console.log(`Found ${Object.keys(tags).length} tags and ${awesomeAIItems.length} items`);
    
    console.log('Generating markdown...');
    const markdown = generateMarkdown(tags, awesomeAIItems);
    
    console.log('Writing markdown file...');
    fs.writeFileSync(outputFile, markdown, 'utf8');
    
    console.log(`✅ Markdown file generated successfully: ${outputFile}`);
  } catch (error) {
    console.error('❌ Error generating markdown:', error.message);
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { generateMarkdown, parseTags, parseAwesomeAI }; 