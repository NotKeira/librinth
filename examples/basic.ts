import { LibrinthClient } from '../src/index';

async function main() {
  console.log('librinth - Example Usage\n');

  // Create client with mock data
  const client = new LibrinthClient({ useMockData: true });

  // Search for projects
  console.log('1. Searching for "sodium"...');
  const searchResults = await client.searchProjects('sodium');
  console.log(`   Found ${searchResults.total_hits} results`);
  console.log(`   First result: ${searchResults.hits[0]?.title}\n`);

  // Get a specific project
  console.log('2. Getting project "sodium"...');
  const project = await client.getProject('sodium');
  if (project) {
    console.log(`   Title: ${project.title}`);
    console.log(`   Description: ${project.description}`);
    console.log(`   Downloads: ${project.downloads.toLocaleString()}\n`);
  }

  // Get project versions
  console.log('3. Getting versions for project...');
  const versions = await client.getProjectVersions('AANobbMI');
  console.log(`   Found ${versions.length} version(s)`);
  if (versions.length > 0) {
    console.log(`   Latest: ${versions[0].name}\n`);
  }

  // Get a user
  console.log('4. Getting user "jellysquid3"...');
  const user = await client.getUser('jellysquid3');
  if (user) {
    console.log(`   Username: ${user.username}`);
    console.log(`   Name: ${user.name}`);
    console.log(`   Bio: ${user.bio}\n`);
  }

  console.log('✅ All examples completed successfully!');
}

main().catch(console.error);
