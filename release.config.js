/* eslint-disable no-useless-escape */
module.exports = {
  analyzeCommits: {
    preset: 'eslint',
    // releaseRules: './config/release-rules.js', // optional, only if you want to set up new/modified release rules inside another file
    parserOpts: { // optional, only you want to have emoji commit support
      headerPattern: /^(?::([\w-]*):)?\s*(\w*):\s*(.*)$/,
      headerCorrespondence: [
        'emoji',
        'tag',
        'message',
      ],
    },
  },
  generateNotes: {
    preset: 'eslint',
    parserOpts: { // optional, only you want to have emoji commit support
      headerPattern: /^(?::([\w-]*):)?\s*(\w*):\s*(.*)$/,
      headerCorrespondence: [
        'emoji',
        'tag',
        'message',
      ],
    },
  },
};