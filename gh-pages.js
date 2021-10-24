var ghpages = require('gh-pages');

ghpages.publish(
    'build/_app', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/mameli/primavera-sound-check.git',
        user: {
            name: 'mameli',
            email: 'filippomameli@outlook.com' 
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)