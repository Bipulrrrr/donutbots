const bedrock = require('bedrock-protocol');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('AFK Bot Status: Active');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const client = bedrock.createClient({
  host: 'donutsmp.net',
  port: 19132,
  profilesFolder: './controls',
  authTitle: '000000004412432F',
  flow: 'msa'
});

client.on('spawn', () => {
  console.log('✅ Bot successfully joined DonutSMP!');
});

client.on('error', (err) => console.log('Bot Error:', err));

client.on('end', (reason) => {
  console.log('Disconnected:', reason);
  setTimeout(() => process.exit(1), 5000);
});
