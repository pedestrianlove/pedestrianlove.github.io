import { publish } from 'gh-pages';

publish(
	'build', // path to public directory
	{
  		branch: 'gh-pages',
  		repo: 'https://github.com/pedestrianlove/pedestrianlove.github.io.git', // Update to point to your repository
  		user: {
   			name: 'JHIH-SIOU LI', // update to use your name
   			email: 'jsli@linux.com' // Update to use your email
  		},
  		dotfiles: true
  	},
  	() => {
   		console.log('Deploy Complete!');
  	}
);
