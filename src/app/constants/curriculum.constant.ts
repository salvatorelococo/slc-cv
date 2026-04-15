import {
	CurriculumVitae,
	ItemA,
	ItemB,
	ItemType,
	Locale,
	LocalizedData,
} from '../models/curriculum.model';
import { RemixIcon } from '../models/icons.model';
import { SafeDatePipe } from '../pipes/safe-date.pipe';

export const privacyStatement: LocalizedData<string> = {
	[Locale.EN]:
		'I hereby authorize the processing of my personal data included in this CV in accordance with Article 13 of Legislative Decree 196/2003 and Article 13 of the EU Regulation 2016/679 (GDPR) concerning the protection of personal data.',
	[Locale.IT]:
		"Autorizzo il trattamento dei dati personali contenuti nel mio curriculum vitae in base all'art. 13 del D. Lgs. 196/2003 e all'art. 13 del Regolamento UE 2016/679 relativo alla protezione delle persone fisiche con riguardo al trattamento dei dati personali.",
};

export function getCv(safeDatePipe: SafeDatePipe) {
	const cv: CurriculumVitae = {
		imageUrl: '/salvatore-lococo.png',
		jobTitle: {
			[Locale.EN]: 'Senior IT Consultant',
			[Locale.IT]: 'Consulente IT Senior',
		},
		personalInfo: {
			birthDate: '1998-04-01',
			lastName: 'Lo Coco',
			mail: 'salvatore.lococo.slc@gmail.com',
			name: 'Salvatore',
			phoneNumber: '+39 388 359 0259',
		},
		sectionsList: [
			{
				title: {
					icon: RemixIcon.RiSuitcaseFill,
					text: {
						[Locale.EN]: 'Professional experience',
						[Locale.IT]: 'Esperienze professionali',
					},
				},
				itemsList: [
					{
						title: {
							text: {
								[Locale.EN]: 'Senior IT Consultant',
								[Locale.IT]: 'Consulente IT Senior',
							},
						},
						place: {
							href: 'https://www.reply.com/en/ai-powered-software-engineering/silicon-shoring',
							text: 'Silicon Shoring Reply x BPER Banca',
						},
						from: '2026-03',
						to: 'Present',
						descriptionsList: {
							[Locale.EN]: [
								"<span class='important'>Direct contact with the client</span> for planning activities, defining timelines, and technical discussions on proposed and future solutions..",
								"Technical supervision of a <span class='important'>team of 8-9 people</span>, adhering to the objectives and deadlines agreed upon with the client.",
								"<span class='important'>Responsible for the web channel</span> as a technical and decision-making point of reference for the client.",
							],
							[Locale.IT]: [
								"<span class='important'>Interfaccia diretta con il cliente</span> per pianificazione delle attività, definizione delle tempistiche e confronto tecnico su soluzioni proposte e in proposta.",
								"Supervisione tecnica di un <span class='important'>team di 8-9 persone</span> nel rispetto degli obiettivi e delle scadenze concordate con il cliente.",
								"<span class='important'>Responsabile del canale web</span> come riferimento tecnico e decisionale verso il cliente.",
							],
						},
						skillsList: [
							{
								text: {
									[Locale.EN]: 'Angular 16',
								},
								itemType: ItemType.E,
								starred: true,
							},
							{
								text: {
									[Locale.EN]: 'Microsoft PowerPoint',
								},
								itemType: ItemType.E,
							},
							{
								text: {
									[Locale.EN]: 'Jira',
								},
								itemType: ItemType.E,
							},
							{
								text: {
									[Locale.EN]: 'Gantt',
								},
								itemType: ItemType.E,
							},
							{
								starred: true,
								text: {
									[Locale.EN]: 'Git',
								},
								itemType: ItemType.E,
							},
							{
								starred: true,
								text: {
									[Locale.EN]: 'Angular custom libraries',
									[Locale.IT]: 'Librerie Angular custom',
								},
								itemType: ItemType.E,
							},
							{
								text: {
									[Locale.EN]: 'Jenkins (build & deploy)',
								},
								itemType: ItemType.E,
							},
							{
								text: {
									[Locale.EN]: 'Kibana (discover)',
								},
								itemType: ItemType.E,
							},
							{
								text: {
									[Locale.EN]: 'Microsoft Excel',
								},
								itemType: ItemType.E,
							},
						],
						itemType: ItemType.C,
					},
					{
						title: {
							text: {
								[Locale.EN]: 'IT Consultant - Team Leader',
								[Locale.IT]: 'Consulente IT - Team Leader',
							},
						},
						info: [
							{
								place: {
									href: 'https://www.reply.com/en/ai-powered-software-engineering/silicon-shoring',
									text: 'Silicon Shoring Reply x BPER Banca',
								},
								from: '2025-03',
								to: '2026-02',
							},
							{
								place: {
									href: 'https://www.reply.com/iriscube-reply/it',
									text: 'Iriscube Reply x BPER Banca',
								},
								from: '2024-03',
								to: '2025-02',
							},
						],
						descriptionsList: {
							[Locale.EN]: [
								'Technical lead and supervisor for the development of the Internet Banking application, built with <span class="important">Angular 16</span> and based on a <span class="important">micro-frontend architecture</span>, including <span class="important">custom libraries</span>.',
								'Management of <span class="important">branching/versioning strategies</span>, <span class="important">merge requests</span> from external vendors, and release processes via <span class="important">Jenkins</span>.',
								'<span class="important">Task analysis and planning</span>, <span class="important">resource management</span>, <span class="important">budget estimation</span> and main point of contact for the client regarding the web channel.',
							],
							[Locale.IT]: [
								"Supervisore e riferimento tecnico per lo sviluppo su applicativo dell'Internet Banking, realizzato in <span class='important'>Angular 16</span> con <span class='important'>architettura a micro-frontend</span>, e sulle principali <span class='important'>librerie custom</span>.",
								'Gestione delle <span class="important">strategie di branching e di versioning</span>, delle <span class="important">merge request</span> da fornitori esterni e dei rilasci tramite piattaforma <span class="important">Jenkins</span>.',
								'<span class="important">Analisi e pianificazione delle attività</span>, <span class="important">gestione delle risorse</span>, <span class="important">realizzazione di stime economiche</span> e riferimento per il cliente sul canale web.',
							],
						},
						skillsList: [
							{
								starred: true,
								text: {
									[Locale.EN]: 'Angular 14, 16',
								},
								itemType: ItemType.E,
							},
							{
								starred: true,
								text: {
									[Locale.EN]: 'Git',
								},
								itemType: ItemType.E,
							},
							{
								starred: true,
								text: {
									[Locale.EN]: 'Angular custom libraries',
									[Locale.IT]: 'Librerie Angular custom',
								},
								itemType: ItemType.E,
							},
							{
								text: {
									[Locale.EN]: 'Jenkins (build & deploy)',
								},
								itemType: ItemType.E,
							},
							{
								text: {
									[Locale.EN]: 'Kibana (discover)',
								},
								itemType: ItemType.E,
							},
							{
								text: {
									[Locale.EN]: 'Microsoft Excel',
								},
								itemType: ItemType.E,
							},
							{
								text: {
									[Locale.EN]: 'Gantt',
								},
								itemType: ItemType.E,
							},
						],
						itemType: ItemType.F,
					},
					{
						title: {
							text: {
								[Locale.EN]: 'IT Consultant - Web Developer',
								[Locale.IT]: 'Consulente IT - Sviluppatore Web',
							},
						},
						info: [
							{
								place: {
									href: 'https://www.reply.com/iriscube-reply/it',
									text: 'Iriscube Reply x BPER Banca',
								},
								from: '2022-01',
								to: '2024-02',
							},
						],
						descriptionsList: {
							[Locale.EN]: [
								'Technical lead and supervisor for the development of the Internet Banking application, built with <span class="important">Angular 16</span> and based on a <span class="important">micro-frontend architecture</span>, including <span class="important">custom libraries</span>.',
								'Management of <span class="important">branching/versioning strategies</span>, <span class="important">merge requests</span> from external vendors, and release processes via <span class="important">Jenkins</span>.',
								'<span class="important">Task analysis and planning</span>, <span class="important">resource management</span>, <span class="important">budget estimation</span> and main point of contact for the client regarding the web channel.',
							],
							[Locale.IT]: [
								"Supervisore e riferimento tecnico per lo sviluppo su applicativo dell'Internet Banking, realizzato in <span class='important'>Angular 16</span> con <span class='important'>architettura a micro-frontend</span>, e sulle principali <span class='important'>librerie custom</span>.",
								'Gestione delle <span class="important">strategie di branching e di versioning</span>, delle <span class="important">merge request</span> da fornitori esterni e dei rilasci tramite piattaforma <span class="important">Jenkins</span>.',
								'<span class="important">Analisi e pianificazione delle attività</span>, <span class="important">gestione delle risorse</span>, <span class="important">realizzazione di stime economiche</span> e riferimento per il cliente sul canale web.',
							],
						},
						skillsList: [
							{
								starred: true,
								text: {
									[Locale.EN]: 'Angular 11, 14',
								},
								itemType: ItemType.E,
							},
							{
								starred: true,
								text: {
									[Locale.EN]: 'Git',
								},
								itemType: ItemType.E,
							},
							{
								text: {
									[Locale.EN]: 'Jenkins (build & deploy)',
								},
								itemType: ItemType.E,
							},
						],
						itemType: ItemType.F,
					},
				],
			},
			{
				title: {
					icon: RemixIcon.RiGraduationCapFill,
					text: {
						[Locale.EN]: 'Education & training',
						[Locale.IT]: 'Corsi e formazione',
					},
				},
				itemsList: [
					{
						title: {
							text: {
								[Locale.EN]: 'Flutter & Dart - Academind (2023)',
							},
						},
						skillsList: [
							{
								text: {
									[Locale.EN]: 'Dart',
								},
								itemType: ItemType.E,
							},
							{
								text: {
									[Locale.EN]: 'Flutter',
								},
								itemType: ItemType.E,
							},
						],
						itemType: ItemType.C,
					},
					{
						title: {
							text: {
								[Locale.EN]: 'B.Sc. in Computer Engineering (109/110)',
								[Locale.IT]: 'Ingegneria Informatica (LT, Voto: 109/110)',
							},
						},
						from: '2017-09',
						to: '2022-06',
						place: {
							href: 'https://unipa.it',
							text: 'Università degli Studi di Palermo',
						},
						skillsList: [
							{
								text: {
									[Locale.EN]: 'C',
								},
								itemType: ItemType.E,
							},
							{
								text: {
									[Locale.EN]: 'React',
								},
								itemType: ItemType.E,
							},
							{
								text: {
									[Locale.EN]: 'Assembly',
								},
								itemType: ItemType.E,
							},
							{
								text: {
									[Locale.EN]: 'Java',
								},
								itemType: ItemType.E,
							},
							{
								text: {
									[Locale.EN]: 'JQuery',
								},
								itemType: ItemType.E,
							},
							{
								text: {
									[Locale.EN]: 'Bootstrap',
								},
								itemType: ItemType.E,
							},
							{
								text: {
									[Locale.EN]: 'MySQL',
								},
								itemType: ItemType.E,
							},
							{
								text: {
									[Locale.EN]: 'PostgreSQL',
								},
								itemType: ItemType.E,
							},
						],
						itemType: ItemType.C,
					},
					{
						title: {
							text: {
								[Locale.EN]: 'Cyberchallenge.it training course',
								[Locale.IT]: 'Corso di formazione Cyberchallenge.it',
							},
						},
						place: {
							href: 'https://www.consorzio-cini.it/index.php/it/',
							text: 'Cini',
						},
						descriptionsList: {
							[Locale.EN]: [
								'Hands-on training with <span class="important">Jeopardy-style Capture The Flag (CTF) challenges</span> covering various areas of cybersecurity.',
								'Selected for and participated in the <span class="important">national Attack-Defence competition</span> held in October 2020.',
							],
							[Locale.IT]: [
								'Svolgimento di <span class="important">sfide Capture The Flag (CTF) di tipo Jeopardy</span> riguardanti diverse categorie della sicurezza informatica.',
								"Sono stato selezionato per partecipare ed ho partecipato alla relativa <span class='important'>competizione nazionale, di tipo Attack-Defence</span>, svoltasi nell'Ottobre 2020.",
							],
						},
						from: '2020-03',
						to: '2020-06',
						skillsList: [
							{
								text: {
									[Locale.EN]: 'Cybersecurity',
								},
								itemType: ItemType.E,
							},
							{
								text: {
									[Locale.EN]: 'Python',
								},
								itemType: ItemType.E,
							},
							{
								text: {
									[Locale.EN]: 'Bash',
								},
								itemType: ItemType.E,
							},
							{
								text: {
									[Locale.EN]: 'Reverse engineering',
								},
								itemType: ItemType.E,
							},
						],
						itemType: ItemType.C,
					},
					{
						title: {
							text: {
								[Locale.EN]:
									'Full-stack web development course <span class="d-ib">with Angular & Spring</span>',
								[Locale.IT]:
									'Corso di formazione web <span class="d-ib">full-stack application</span> <span class="d-ib">con Angular e Spring</span>',
							},
						},
						from: '2019-09',
						place: {
							href: 'https://www.eng.it/en',
							text: 'Engineering Ingegneria Informatica S.p.a.',
						},
						skillsList: [
							{
								text: {
									[Locale.EN]: 'Angular 8',
								},
								itemType: ItemType.E,
							},
							{
								text: {
									[Locale.EN]: 'Spring',
								},
								itemType: ItemType.E,
							},
						],
						itemType: ItemType.C,
					},
				],
			},
			{
				title: {
					icon: RemixIcon.RiCodeSSlashFill,
					text: {
						[Locale.EN]: 'Technical Skills',
						[Locale.IT]: 'Competenze tecniche',
					},
				},
				itemsList: [
					{
						title: {
							text: {
								[Locale.EN]: 'Frontend',
							},
						},
						skillsList: [
							{
								text: { [Locale.EN]: 'Angular' },
								starred: true,
								itemType: ItemType.E,
							},
							{ text: { [Locale.EN]: 'Bootstrap' }, itemType: ItemType.E },
							{
								text: { [Locale.EN]: 'HTML5 / CSS3' },
								starred: true,
								itemType: ItemType.E,
							},
							{ text: { [Locale.EN]: 'Flutter' }, itemType: ItemType.E },
							{ text: { [Locale.EN]: 'jQuery' }, itemType: ItemType.E },
							{ text: { [Locale.EN]: 'React' }, itemType: ItemType.E },
							{
								text: { [Locale.EN]: 'Sass / SCSS' },
								starred: true,
								itemType: ItemType.E,
							},
						],
						itemType: ItemType.C,
					},
					{
						title: {
							text: {
								[Locale.EN]: 'Programming languages',
								[Locale.IT]: 'Linguaggi di programmazione',
							},
						},
						skillsList: [
							{
								text: { [Locale.EN]: 'JavaScript' },
								starred: true,
								itemType: ItemType.E,
							},
							{
								text: { [Locale.EN]: 'TypeScript' },
								starred: true,
								itemType: ItemType.E,
							},
							{ text: { [Locale.EN]: 'C' }, itemType: ItemType.E },
							{ text: { [Locale.EN]: 'Dart' }, itemType: ItemType.E },
							{ text: { [Locale.EN]: 'Java' }, itemType: ItemType.E },
							{ text: { [Locale.EN]: 'Python' }, itemType: ItemType.E },
						],
						itemType: ItemType.C,
					},
					{
						title: {
							text: {
								[Locale.EN]: 'Database',
							},
						},
						skillsList: [
							{ text: { [Locale.EN]: 'MongoDB' }, itemType: ItemType.E },
							{ text: { [Locale.EN]: 'MySQL' }, itemType: ItemType.E },
							{ text: { [Locale.EN]: 'PostgreSQL' }, itemType: ItemType.E },
						],
						itemType: ItemType.C,
					},
					{
						title: {
							text: {
								[Locale.EN]: 'Tools & DevOps',
								[Locale.IT]: 'Altri strumenti di sviluppo',
							},
						},
						skillsList: [
							{
								text: { [Locale.EN]: 'Git' },
								starred: true,
								itemType: ItemType.E,
							},
							{
								text: { [Locale.EN]: 'Jenkins (build & deploy)' },
								itemType: ItemType.E,
							},
							{
								text: { [Locale.EN]: 'Kibana (discover)' },
								itemType: ItemType.E,
							},
							{
								text: { [Locale.EN]: 'Node.js (scripting)' },
								itemType: ItemType.E,
							},
						],
						itemType: ItemType.C,
					},
					{
						title: {
							text: {
								[Locale.EN]: 'Project & Productivity',
								[Locale.IT]: 'Progettazione e produttività',
							},
						},
						skillsList: [
							{ text: { [Locale.EN]: 'Gantt' }, itemType: ItemType.E },
							{
								text: { [Locale.EN]: 'Jira' },
								itemType: ItemType.E,
							},
							{
								text: { [Locale.EN]: 'Microsoft Excel' },
								itemType: ItemType.E,
							},
							{
								text: { [Locale.EN]: 'Microsoft PowerPoint' },
								itemType: ItemType.E,
							},
							{ text: { [Locale.EN]: 'Notion' }, itemType: ItemType.E },
						],
						itemType: ItemType.C,
					},
					{
						title: {
							text: {
								[Locale.EN]: 'Design & Prototyping',
								[Locale.IT]: 'Design e prototipazione',
							},
						},
						skillsList: [
							{
								text: {
									[Locale.EN]: 'Adobe XD (UI reference)',
									[Locale.IT]: 'Adobe XD (Riferimento UI)',
								},
								itemType: ItemType.E,
							},
							{
								text: {
									[Locale.EN]: 'Figma (UI reference)',
									[Locale.IT]: 'Figma (Riferimento UI)',
								},
								itemType: ItemType.E,
							},
						],
						itemType: ItemType.C,
					},
				],
			},
			{
				title: {
					icon: RemixIcon.RiTranslate2,
					text: {
						[Locale.EN]: 'Language skills',
						[Locale.IT]: 'Competenze linguistiche',
					},
				},
				itemsList: [
					{
						columns: 6,
						title: {
							text: {
								[Locale.EN]: '<i>🇮🇹 </i>&nbsp;Italian',
								[Locale.IT]: '<i>🇮🇹 </i>&nbsp;Italiano',
							},
						},
						subtitle: {
							[Locale.EN]: 'Native speaker',
							[Locale.IT]: 'Madrelingua',
						},
						itemType: ItemType.D,
					},
					{
						columns: 6,
						title: {
							text: {
								[Locale.EN]: '<i>🇬🇧 </i>&nbsp;English',
								[Locale.IT]: '<i>🇬🇧 </i>&nbsp;Inglese',
							},
						},
						subtitle: {
							[Locale.EN]: 'Intermediate (B2)',
							[Locale.IT]: 'Intermedio (B2)',
						},
						itemType: ItemType.D,
					},
				],
			},
		],
		sideItemsList: [],
	};

	const getBirthDate = () => {
		return safeDatePipe.transform(cv.personalInfo.birthDate, 'shortDate');
	};

	const aboutMe: ItemA = {
		title: {
			text: {
				[Locale.EN]: 'About me',
				[Locale.IT]: 'Su di me',
			},
		},
		description: {
			[Locale.EN]:
				'IT Consultant with solid experience in front-end development and the technical and administrative management of projects.<br /><br />Passionate about technology from an early age, I have always aimed to fully master tools and methodologies. I am a determined and proactive individual, with a strong inclination to take on new challenges.',
			[Locale.IT]:
				'Consulente IT con consolidata esperienza nello sviluppo front-end e nella gestione tecnica e amministrativa di progetti.<br /><br />Appassionato di tecnologia fin dalla giovane età, ho sempre puntato a padroneggiare gli strumenti e le metodologie nel loro complesso. Sono una persona determinata e propensa ad affrontare nuove sfide con spirito proattivo.',
		},
		itemType: ItemType.A,
	};

	const softSkills: ItemB = {
		title: {
			text: {
				[Locale.EN]: 'Soft skills',
			},
		},
		sortList: true,
		valuesList: [
			{
				text: {
					[Locale.EN]: 'Learning agility',
					[Locale.IT]: 'Apprendimento rapido',
				},
			},
			{
				text: {
					[Locale.EN]: 'Stress resilience',
					[Locale.IT]: 'Gestione dello stress',
				},
			},
			{
				text: {
					[Locale.EN]: 'Problem-solving',
				},
			},
			{
				text: {
					[Locale.EN]: 'Teamwork',
				},
			},
		],
		itemType: ItemType.B,
	};

	const hobbies: ItemB = {
		title: {
			text: {
				[Locale.EN]: 'Hobbies',
				[Locale.IT]: 'Hobby',
			},
		},
		sortList: true,
		valuesList: [
			{
				columns: 6,
				icon: RemixIcon.RiFlightTakeoffFill,
				text: {
					[Locale.EN]: 'Travels',
					[Locale.IT]: 'Viaggi',
				},
			},
			{
				columns: 6,
				icon: RemixIcon.RiBookShelfFill,
				text: {
					[Locale.EN]: 'Books',
					[Locale.IT]: 'Libri',
				},
			},
			{
				columns: 6,
				icon: RemixIcon.RiFootballFill,
				text: {
					[Locale.EN]: 'Football',
					[Locale.IT]: 'Calcio',
				},
			},
			{
				columns: 6,
				icon: RemixIcon.RiRunFill,
				text: {
					[Locale.EN]: 'Running',
					[Locale.IT]: 'Corsa',
				},
			},
			{
				columns: 6,
				// href: 'https://www.chess.com/member/slcxx98',
				icon: RemixIcon.RiChessFill,
				text: {
					[Locale.EN]: 'Chess',
					[Locale.IT]: 'Scacchi',
				},
			},
			{
				columns: 6,
				icon: RemixIcon.RiGamepadFill,
				text: {
					[Locale.EN]: 'Videogames',
					[Locale.IT]: 'Videogiochi',
				},
			},
		],
		itemType: ItemType.B,
	};

	const contacts: ItemB = {
		title: {
			text: {
				[Locale.EN]: 'Info & contacts',
				[Locale.IT]: 'Info e contatti',
			},
		},
		valuesList: [
			{
				icon: RemixIcon.RiCake2Fill,
				get text() {
					return {
						[Locale.EN]: 'Birth date: ' + getBirthDate(),
						[Locale.IT]: 'Data di nascita: ' + getBirthDate(),
					};
				},
			},
			{
				text: {}, // Empty line
			},
			{
				href: 'https://github.com/salvatorelococo',
				icon: RemixIcon.RiGithubFill,
				text: {
					[Locale.EN]: '<span class="icon-alt">GitHub: </span>salvatorelococo',
				},
			},
			{
				href: 'https://www.linkedin.com/in/salvatorelococo/',
				icon: RemixIcon.RiLinkedinBoxFill,
				text: {
					[Locale.EN]:
						'<span class="icon-alt">LinkedIn: </span>salvatorelococo',
				},
			},
			{
				text: {}, // Empty line
			},
			{
				href: 'tel:' + cv.personalInfo.phoneNumber,
				icon: RemixIcon.RiPhoneFill,
				text: {
					[Locale.EN]: cv.personalInfo.phoneNumber,
				},
			},
			{
				href: 'mailto:' + cv.personalInfo.mail,
				icon: RemixIcon.RiMailFill,
				text: {
					[Locale.EN]: cv.personalInfo.mail,
				},
			},
		],
		itemType: ItemType.B,
	};

	cv.sideItemsList = [aboutMe, softSkills, hobbies, contacts];

	return cv;
}
