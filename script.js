const projects = [
	{
		name: 'four-card-feature-section-master',
		github:
			'https://github.com/t1gula00/Frontend-Mentor/tree/master/four-card-feature-section-master'
	},
	{
		name: 'intro-component-with-signup-form-master',
		github:
			'https://github.com/t1gula00/Frontend-Mentor/tree/master/intro-component-with-signup-form-master'
	},
	{
		name: 'fylo-landing-page',
		github:
			'https://github.com/t1gula00/Frontend-Mentor/tree/master/fylo-landing-page'
	},
	{
		name: 'huddle-landing-page',
		github:
			'https://github.com/t1gula00/Frontend-Mentor/tree/master/huddle-landing-page'
	},
	{
		name: 'insure-landing-page',
		github:
			'https://github.com/t1gula00/Frontend-Mentor/tree/master/insure-landing-page'
	}
];

const list = document.getElementById('list');

projects.forEach(({ name, github }, i) => {
	const listItem = document.createElement('li');

	listItem.innerHTML = `
		<a href="/${name}/index.html">
			<img src="/${name}/design/desktop-design.jpg" alt="${name}" />
			<p>${i + 1}. ${formatProjectName(name)}</p>
		</a>
		<div class="links-container">
			<a href="/${name}/index.html" class="blue">
				<i class="fas fa-eye"></i>
			</a>
			<a href="${github}" class="youtube">
				<i class="fab fa-github"></i>
			</a>
		</div>
	`;

	list.appendChild(listItem);
});

function formatProjectName(name) {
	return name
		.split('-')
		.map(word => word[0].toUpperCase() + word.slice(1))
		.join(' ');
}