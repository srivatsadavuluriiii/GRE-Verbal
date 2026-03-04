// Parse cluster.txt data and create cluster objects
const clusterData = [];

// Raw cluster text data (parsed from cluster.txt)
const rawClusterText = `
CLUSTER: Abundant/Plentiful/Copious
abound, copious, inundate, profuse, rampant, surfeit

CLUSTER: Abusive
exploitative

CLUSTER: Academic/Scholarly
cerebral, pedantic

CLUSTER: Adaptable
resilient

CLUSTER: Advanced
precocious

CLUSTER: Agreement
consensus

CLUSTER: All-knowing
omniscient

CLUSTER: Alternative/Option
recourse

CLUSTER: Amateur
dilettante

CLUSTER: Amusing
droll

CLUSTER: Ancient/Old/Archaic
anachronistic, archaic, erstwhile, obsolete

CLUSTER: Angry/Hostile/Wrathful
acrimonious, antagonize, indignant, irascible, ire, petulant

CLUSTER: Annoying
irksome, nettlesome, vexation

CLUSTER: Anxiety/Fear
apprehension

CLUSTER: Appease
appease, pacify, placate, propitiate, stanch

CLUSTER: Appropriate
felicitous

CLUSTER: Approval/Agreement
acquiesce

CLUSTER: Arrogant/Proud/Haughty
bombastic, bravado, cavalier, haughty, imperious, ostentatious, pomposity, pretentious, sanctimonious

CLUSTER: Art_Of_Speaking
rhetoric

CLUSTER: Artistic/Aesthetic
aesthetic

CLUSTER: Assert/Declare
aver

CLUSTER: Attack/Assault/Assail
aspersion, assail, barrage, defame, denigrate, impugn, malign, slander, vanquish

CLUSTER: Attacking_Tradition
iconoclastic

CLUSTER: Attraction/Affinity
affinity, penchant, predilection, proclivity, propensity, relish

CLUSTER: Attribute/Ascribe
ascribe

CLUSTER: Audacity
effrontery

CLUSTER: Authoritative
magisterial

CLUSTER: Available/Accessible
accessible

CLUSTER: Avoid
elusive, equivocate, eschew, evade, evasive, prevaricate, skirt

CLUSTER: Bad-tempered
curmudgeon

CLUSTER: Beg
entreat

CLUSTER: Beginning/Start/Origin
commence, fledgling, nascent, stem from

CLUSTER: Behavior
deportment

CLUSTER: Belief
conviction

CLUSTER: Beneficial/Helpful/Advantageous
auspicious, boon, conducive, efficacious, fruitful, lucrative, propitious, salubrious, salutary

CLUSTER: Betray/Violate_Trust
betray, perfidy

CLUSTER: Biased
chauvinistic, elitist, tendentious, xenophobic

CLUSTER: Biting
mordant

CLUSTER: Bitter_Attack
diatribe, harangue, tirade

CLUSTER: Blame/Accuse/Condemn
censure, denounce, impugn, indictment

CLUSTER: Blunder
gaffe

CLUSTER: Boast
gloat

CLUSTER: Boredom
ennui

CLUSTER: Boring/Dull/Monotonous
banal, bromide, hackneyed, humdrum, insipid, monotonous, mundane, pedestrian, platitude, prosaic, soporific, tedious, vapid

CLUSTER: Break_Promise
renege

CLUSTER: Brief/Concise/Terse
brevity, laconic, pithy, terse

CLUSTER: Burdensome
cumbersome

CLUSTER: Calm/Peaceful/Tranquil
equanimity, imperturbable, nonchalant, phlegmatic, placid, serene, sober, stolid, tranquil

CLUSTER: Cancel
nullify

CLUSTER: Careful/Cautious/Prudent
chary, circumspect, discreet, fastidious, judicious, meticulous, painstaking, prudent, punctilious, scrupulous, sedulous, vigilant, wary

CLUSTER: Clarify/Explain/Elucidate
articulate, delineate, edify, elucidate

CLUSTER: Collection
repertoire

CLUSTER: Combine/Merge/Unite
amalgamate, coalesce, intertwined

CLUSTER: Command
dictate, prescribe

CLUSTER: Commit
perpetrate

CLUSTER: Complaint
grievance

CLUSTER: Complementary
complementary

CLUSTER: Completely/Totally
utterly

CLUSTER: Complex/Intricate/Convoluted
abstruse, arcane, byzantine, convoluted, enigmatic, esoteric, inscrutable, obscure, recondite

CLUSTER: Complicated_Situation
imbroglio, predicament, quandary

CLUSTER: Comprehensive
encyclopedic, exhaustive

CLUSTER: Compromise
compromise, reconcile

CLUSTER: Condescend
patronize

CLUSTER: Confident/Assertive
assertive

CLUSTER: Confirm/Verify
ascertain

CLUSTER: Conflict/Discord/Strife
animosity, contentious, enmity, factious, strife

CLUSTER: Confuse/Perplex/Puzzle
befuddled, confound, flustered, nonplussed, obfuscate, obscure

CLUSTER: Confused
flummoxed

CLUSTER: Connect
correlate

CLUSTER: Consequence
ramification, repercussion

CLUSTER: Conspire
collude, conspire

CLUSTER: Constant
incessant

CLUSTER: Contaminate/Corrupt
adulterate

CLUSTER: Continue
perpetuate

CLUSTER: Contradict
belie

CLUSTER: Controversial/Combative
polemical

CLUSTER: Convenient
expedient

CLUSTER: Cooperate
collaborate

CLUSTER: Correct/Modify
amend

CLUSTER: Corrective/Remedial
remedial

CLUSTER: Corrupt/Venal
mercenary, sordid, venal

CLUSTER: Counteract/Nullify
neutralize

CLUSTER: Courage
fortitude, valor

CLUSTER: Courageous
mettlesome, plucky

CLUSTER: Create/Generate
coin, engender, render

CLUSTER: Critical
captious

CLUSTER: Criticize/Scold/Rebuke
admonish, berate, castigate, censure, chastise, decry, denigrate, denounce, deprecate, excoriate, lambaste, reproach, upbraid

CLUSTER: Cruel
sadistic

CLUSTER: Cunning
devious

CLUSTER: Cure-all
panacea

CLUSTER: Curious
inquisitive

CLUSTER: Dangerous
perilous, precarious

CLUSTER: Decency
propriety

CLUSTER: Deceptive
illusory

CLUSTER: Deceptive/Dishonest/Fraudulent
artful, bogus, clandestine, counterfeit, covert, cunning, disingenuous, duplicitous, fallacious, furtive, sham, specious, spurious, surreptitious, wily

CLUSTER: Decisive
conclusive

CLUSTER: Decline
languish

CLUSTER: Declining
decadent

CLUSTER: Decode
decipher, unravel

CLUSTER: Decrease/Reduce/Diminish
abate, alleviate, assuage, attenuate, curtail, mitigate, mollify, subside, temper, wane

CLUSTER: Decreasing
dwindling

CLUSTER: Deep-rooted
inveterate

CLUSTER: Defend/Protect/Shield
buttress, exculpate, exonerate

CLUSTER: Defender/Advocate
apologist

CLUSTER: Defensible
tenable

CLUSTER: Delay/Postpone/Defer
dawdle, dilatory

CLUSTER: Delicate
subtle

CLUSTER: Delight
enchant, enthrall

CLUSTER: Depth/Wisdom
profound, profundity

CLUSTER: Destroy
ravage

CLUSTER: Deviate/Abnormal
aberrant, anomalous, deviate, eccentric, idiosyncratic, incongruous, outlandish, peculiar, quirky

CLUSTER: Deviation
digression

CLUSTER: Difference
discrepancy

CLUSTER: Different/Diverse
disparate, eclectic, heterogeneous, multifaceted

CLUSTER: Difficult/Arduous
arduous, daunting, onerous

CLUSTER: Dignified/Majestic
august

CLUSTER: Diminish
curb, detract

CLUSTER: Diplomacy
tact

CLUSTER: Disappointment/Embarrassment
chagrin

CLUSTER: Disastrous
cataclysmic, catastrophic

CLUSTER: Disgrace
opprobrium

CLUSTER: Dislike/Aversion
aversion

CLUSTER: Dismiss
discount

CLUSTER: Disregard
flout

CLUSTER: Disrespectful
impertinent, impudent, insolent, irreverent

CLUSTER: Dissuade/Discourage/Deter
forestall, hamper, hinder, impede, inhibit, obviate, preclude

CLUSTER: Distant/Aloof
aloof, remote

CLUSTER: Distressing
harrowing

CLUSTER: Distribute
dispense, disperse, disseminate, omnipresent, pervasive, ubiquitous

CLUSTER: Diverse/Mixed
heterogeneous, hodgepodge

CLUSTER: Divert
deflect

CLUSTER: Domineering/Tyrannical
despotic

CLUSTER: Doubt
qualm

CLUSTER: Doubtful
dubious, suspect

CLUSTER: Draw_Out
elicit

CLUSTER: Drive_Out
exorcise

CLUSTER: Dry_Up
desiccate

CLUSTER: Easing
detente

CLUSTER: Easy_Job
sinecure

CLUSTER: Ecstatic_Expression
rhapsody

CLUSTER: Eliminate
eradicate

CLUSTER: Embarrass
discomfit

CLUSTER: Emotional/Sentimental
cathartic, mawkish, poignant, sentimental

CLUSTER: Emphasize/Stress
accentuate, underscore

CLUSTER: Empirical/Observational
empirical

CLUSTER: Empty
vacuous

CLUSTER: End/Conclusion/Termination
cease

CLUSTER: Endanger
jeopardize

CLUSTER: Endless
interminable

CLUSTER: Energetic/Vigorous/Active
ebullient, frenetic, verve, vitality, vivacious

CLUSTER: Enthusiastic
ardent, fervent, zealous

CLUSTER: Entitled/Presumptuous
entitled, presumptuous

CLUSTER: Equal
egalitarian, equitable

CLUSTER: Essential
indispensable

CLUSTER: Established
entrenched, ingrained

CLUSTER: Everywhere/Universal
omnipresent, pervasive, ubiquitous, universal

CLUSTER: Evil
malevolent

CLUSTER: Exaggerate/Inflate
aggrandize, embellish

CLUSTER: Exaggeration
hyperbole

CLUSTER: Exceptional
prodigious, remarkable

CLUSTER: Excessive/Extravagant
exorbitant

CLUSTER: Excessively_Sweet
cloying

CLUSTER: Exclude/Isolate
marginalize, relegate

CLUSTER: Expert/Specialist
connoisseur

CLUSTER: Explainable
explicable

CLUSTER: Expose/Refute
debunk

CLUSTER: Expression
countenance

CLUSTER: Extract
distill

CLUSTER: Extreme
radical

CLUSTER: Extremely_Emotional
hysterical

CLUSTER: Factual
documentary

CLUSTER: False_Belief
delusion

CLUSTER: False_Reasoning
sophistry

CLUSTER: Fashionable
modish

CLUSTER: Fearful/Cowardly
craven, timorous

CLUSTER: Fearless
intrepid

CLUSTER: Fertile
fecund

CLUSTER: Fight_Back
retaliate

CLUSTER: Filled_With/Full_Of
fraught

CLUSTER: First
prime

CLUSTER: Flexible/Adaptable/Malleable
amenable, malleable, plastic, pliant, supple, tractable, versatile

CLUSTER: Follower/Disciple
acolyte, disciple, neophyte

CLUSTER: Force/Coercion
coercion, duress

CLUSTER: Foreign
exotic

CLUSTER: Forgive/Pardon/Absolve
condone, exculpate, exonerate

CLUSTER: Formal_Treatise
treatise

CLUSTER: Formidable
redoubtable

CLUSTER: Freedom
latitude

CLUSTER: Friendly/Amiable/Cordial
amicable, benevolent, benign, congenial, convivial, cordial, gregarious

CLUSTER: Frustrated
exasperated

CLUSTER: Funeral_Song
dirge

CLUSTER: Generous/Liberal/Munificent
altruistic, beneficent, largesse, lavish, magnanimous, munificent, profuse

CLUSTER: Give
endow

CLUSTER: Give_Up
yield

CLUSTER: Go_Beyond
transcend

CLUSTER: Gradual_Increase
crescendo

CLUSTER: Greedy/Covetous
acquisitive, covet, rapacious

CLUSTER: Gruesome
macabre

CLUSTER: Happy/Joyful/Cheerful
blithe, buoyant, elated, euphoric, jocund

CLUSTER: Harden
ossify

CLUSTER: Hardworking
industrious

CLUSTER: Harmful/Damaging/Detrimental
adverse, debilitating, deleterious, detrimental, inimical, malign, noxious, pernicious, virulent

CLUSTER: Harsh
scathing

CLUSTER: Harsh/Rough
abrasive, astringent, caustic

CLUSTER: Hasten/Hurry/Expedite
expedite, galvanize, precipitate

CLUSTER: Hasty/Rash
precipitous

CLUSTER: Hate/Detest
abhor, loathe

CLUSTER: Hateful
odious, repugnant

CLUSTER: Hating_People
misanthropic

CLUSTER: Healthy
robust

CLUSTER: Hermit
recluse

CLUSTER: Hidden
ulterior

CLUSTER: Hide/Conceal/Obscure
cloak, obfuscate, obscure, occlude

CLUSTER: Highest/Peak/Summit
apogee, zenith

CLUSTER: Hint/Suggest
allude, allusive, evoke, implicit, intimate

CLUSTER: Honest/Truthful/Sincere
artless, candid, credible, ingenuous, probity

CLUSTER: Horrified/Shocked
aghast

CLUSTER: Hostile/Antagonistic
animosity, antipathy, belligerent, contempt, contentious, disdain, enmity, pugnacious, scorn, truculent

CLUSTER: Hostility/Malice
animus

CLUSTER: Humble/Modest/Unassuming
coy, diffident, modest, retiring

CLUSTER: Humor
levity

CLUSTER: Imaginative/Whimsical
fanciful, quixotic, visionary

CLUSTER: Imitate/Copy
caricature, emulate, mimic, pastiche

CLUSTER: Immoral
unscrupulous

CLUSTER: Immoral/Depraved
base, depravity, turpitude

CLUSTER: Immoral_Person
libertine

CLUSTER: Impartial
disinterested

CLUSTER: Impending
imminent

CLUSTER: Imperfect
fallible

CLUSTER: Imprison
immure

CLUSTER: Improve/Enhance/Ameliorate
ameliorate, amplify, augment, bolster, burnish, invigorate, refine

CLUSTER: Improvise
extemporize, improvise

CLUSTER: Inappropriate
impertinent, indecorous, unseemly

CLUSTER: Include
subsume

CLUSTER: Incompetent/Inept/Clumsy
feckless, gauche, gawky

CLUSTER: Increase/Grow/Expand
amplify, augment, burgeon, distend, escalate, proliferate, propagate

CLUSTER: Indecent/Lewd
bawdy

CLUSTER: Indifference
apathy

CLUSTER: Indirect
circumstantial

CLUSTER: Indirect_Expression
euphemism

CLUSTER: Inflammatory/Provocative
agitate, foment, goad, incendiary

CLUSTER: Informed/Updated
abreast, apprise, inform

CLUSTER: Innate
inborn, intrinsic

CLUSTER: Insensitive
callous

CLUSTER: Instinctive
intuitive

CLUSTER: Insult/Offense
affront, umbrage

CLUSTER: Integrity/Honesty
veracity

CLUSTER: Intentional
deliberate

CLUSTER: Interchangeable
fungible, interchangeable

CLUSTER: Interest
intrigue

CLUSTER: Interesting/Exciting/Fascinating
arresting, compelling, exhilarating, heady, provocative, scintillating, tantalizing

CLUSTER: Interpret
construe

CLUSTER: Intervene
mediate

CLUSTER: Intrusive/Invasive
encroach, invasive

CLUSTER: Irrelevant
extraneous, peripheral, superfluous

CLUSTER: Isolate
quarantine

CLUSTER: Isolate/Alienate
alienate, disparate, divergent, divorced

CLUSTER: Isolated
insular, parochial

CLUSTER: Joking
facetious

CLUSTER: Label/Stigmatize
stigmatize, tarnish

CLUSTER: Lack/Absence
abstain, fallow

CLUSTER: Large_Fire
conflagration

CLUSTER: Lazy/Idle/Indolent
feckless, indolent, languid, lassitude, lethargic, sluggish

CLUSTER: Lenient/Mild/Tolerant
innocuous, lax

CLUSTER: Level
echelon

CLUSTER: Limit/Restrict
circumscribe

CLUSTER: Logical
rational

CLUSTER: Loud/Noisy
boisterous, cacophonous, clamorous, clangor, obstreperous, shrill, vociferous

CLUSTER: Lowest/Bottom/Nadir
nadir

CLUSTER: Loyal
stalwart

CLUSTER: Lucky
fortuitous, providential, serendipitous

CLUSTER: Lukewarm
tepid

CLUSTER: Lustful
prurient

CLUSTER: Lying
mendacity

CLUSTER: Meddlesome
officious

CLUSTER: Minor_Dispute
contend, contretemps, quibble

CLUSTER: Minor_Sin
peccadillo

CLUSTER: Miserable/Wretched
abject

CLUSTER: Misrepresent
distort

CLUSTER: Mitigating
extenuating

CLUSTER: Mixed_Feelings
ambivalent

CLUSTER: Mock
deride

CLUSTER: Mocking
satirical

CLUSTER: Model/Example
archetype, paradigmatic, paragon

CLUSTER: Monologue
soliloquy

CLUSTER: Native
endemic

CLUSTER: Negative
pejorative

CLUSTER: New
unprecedented

CLUSTER: New/Modern/Contemporary
contemporary, fledgling, inchoate, nascent

CLUSTER: Noise/Sound
clangor

CLUSTER: Noticeable/Visible
conspicuous, discernible, palpable, tangible

CLUSTER: Obey
comply

CLUSTER: Object
demur

CLUSTER: Obstacle
impediment

CLUSTER: Occasional/Irregular
intermittent, sporadic

CLUSTER: Open
overt

CLUSTER: Oppose/Resist/Contradict
abjure, contravene, dissent, dissident, gainsay, recant, refute, renounce, repudiate

CLUSTER: Opposite/Contrast
antithesis

CLUSTER: Optimistic
sanguine

CLUSTER: Ornate/Elaborate
baroque, florid, ornate

CLUSTER: Outer_Edge
fringe

CLUSTER: Outrageous
egregious, flagrant, gratuitous

CLUSTER: Overcome
surmount

CLUSTER: Overshadow
eclipse, outstrip

CLUSTER: Overthrow/Subvert
subvert

CLUSTER: Pamper
coddle

CLUSTER: Passion
fervor

CLUSTER: Passionate/Fervent
ardent, avid, fervent, fervid, zealous

CLUSTER: Pay_Attention
heed

CLUSTER: Payment
remuneration

CLUSTER: Peaceful/Harmonious
amicable, comity, conciliatory, placid, serene, tranquil

CLUSTER: Perfect
immaculate, pristine

CLUSTER: Peripheral
tangential

CLUSTER: Permanent/Lasting/Enduring
immutable, inviolate, perennial, steadfast

CLUSTER: Persistence
perseverance

CLUSTER: Persistent/Determined
indefatigable

CLUSTER: Persuade/Convince/Coax
beguile, cajole, inveigle, prevail, wheedle

CLUSTER: Persuasive/Eloquent
cogent, eloquent, trenchant

CLUSTER: Physical
corporeal

CLUSTER: Picky
finicky

CLUSTER: Pivot
fulcrum

CLUSTER: Plan
premeditate

CLUSTER: Poor/Impoverished/Destitute
penurious

CLUSTER: Possible
feasible, tenable, viable

CLUSTER: Practical
utilitarian

CLUSTER: Praise/Approve/Commend
acclaim, approbation, canonize, chivalrous, deify, extol, lionize, noble, tout, venerate

CLUSTER: Praise_Actions
acclaim, extol

CLUSTER: Praiseworthy/Admirable
estimable, laudable, meritorious

CLUSTER: Precede
antedate

CLUSTER: Predictable
foreseeable

CLUSTER: Predictable/Stable/Consistent
immutable

CLUSTER: Predictive/Prophetic
forebode, harbinger, ominous, portend, prefigure, presage, prescient, prophetic

CLUSTER: Pretend
dissemble, fabricate, feign, feint

CLUSTER: Pretense/Artifice
affectation

CLUSTER: Prevent/Avert
avert

CLUSTER: Project
extrapolate

CLUSTER: Propriety
decorum, propriety

CLUSTER: Pure
unalloyed

CLUSTER: Puzzle
conundrum

CLUSTER: Quarrelsome
fractious

CLUSTER: Quick/Agile
nimble

CLUSTER: Quiet
subdued

CLUSTER: Random/Irregular
arbitrary, desultory, indiscriminate, intermittent, sporadic

CLUSTER: Rebellion
mutiny

CLUSTER: Reckless/Careless/Impulsive
audacious, brazen, cursory, foolhardy, haphazard, impetuous, impulsive, lax, negligent, precipitate, slovenly, temerity

CLUSTER: Recovering
convalescent

CLUSTER: Recurrence
recrudescent

CLUSTER: Refill
replenish

CLUSTER: Relevant/Fitting
apropos, apt, pertinent

CLUSTER: Reliable
sound

CLUSTER: Remorseful
contrite

CLUSTER: Repeat
reiterate

CLUSTER: Replace
supersede, supplant

CLUSTER: Representative
proxy

CLUSTER: Respectful/Submissive
deference, fawn, grovel, obeisance, obsequious, subservient, supplicate

CLUSTER: Responsibility
liability

CLUSTER: Restless/Uneasy
fret, restive, skittish

CLUSTER: Restrain/Control
bridle

CLUSTER: Restrained
understated

CLUSTER: Rigid/Inflexible/Stiff
doctrinaire, dogmatic, obdurate

CLUSTER: Routine
perfunctory

CLUSTER: Rude/Crude
boorish, churlish

CLUSTER: Rural/Countryside
bucolic, provincial

CLUSTER: Sad/Gloomy/Melancholy
crestfallen, glum, lament, lugubrious, morose, plaintive, woeful

CLUSTER: Satirize
lampoon

CLUSTER: Satisfy
gratify

CLUSTER: Save/Conserve/Preserve
economy, stint

CLUSTER: Scarce/Rare/Sparse
barren, bereft, dearth, paltry, scant, sparse

CLUSTER: Scoundrel
reprobate

CLUSTER: Secondary
subordinate

CLUSTER: Seize/Appropriate
appropriate

CLUSTER: Self-contradictory
paradoxical

CLUSTER: Self-evident
axiomatic, patent

CLUSTER: Self-satisfied
complacent

CLUSTER: Separate/Divide/Split
dichotomy, estranged, polarize, schism, sever

CLUSTER: Shackle
manacle

CLUSTER: Shallow
superficial

CLUSTER: Shapeless/Formless
amorphous

CLUSTER: Short-sighted
myopic

CLUSTER: Show/Display/Manifest
divulge, manifest

CLUSTER: Showy
flamboyant

CLUSTER: Shrewd/Clever
canny

CLUSTER: Shy/Timid
reticent, timorous

CLUSTER: Silent
taciturn

CLUSTER: Similar/Comparable
analogous, commensurate, tantamount

CLUSTER: Simple/Basic/Elementary
elementary, limpid, lucid, pellucid, rudimentary

CLUSTER: Sing_Softly
croon

CLUSTER: Skeptical
incredulous

CLUSTER: Skill/Expertise/Proficiency
adept, adroit, competent, deft, prowess

CLUSTER: Skilled
proficient

CLUSTER: Slander
calumny

CLUSTER: Sleepy
somnolent

CLUSTER: Slow/Laborious
plodding, ponderous

CLUSTER: Sluggishness
plodding, torpor

CLUSTER: Small/Tiny
diminutive, minute, nominal, slight, trifling

CLUSTER: Smart/Intelligent/Clever
acumen, adroit, astute, deft, erudite, ingenious, keen, perspicacious, polymath, sagacious

CLUSTER: Soften
relent

CLUSTER: Solve
unravel

CLUSTER: Spectacular
sensational

CLUSTER: Speculative
conjectural

CLUSTER: Speed/Eagerness
alacrity

CLUSTER: Spicy
piquant

CLUSTER: Spiritual
anoint, cherish, numinous, pious

CLUSTER: Stingy/Miserly/Cheap
avaricious, chary, miserly, parsimonious, penurious

CLUSTER: Stormy
tempestuous, turbulent

CLUSTER: Strengthen/Fortify/Reinforce
bolster, buttress, invigorate

CLUSTER: Strict/Severe/Harsh
ascetic, austere, draconian, exacting, rigor, spartan, stern, stringent

CLUSTER: Strict_Follower
ideologue

CLUSTER: Stubborn/Inflexible/Obstinate
dogged, headstrong, implacable, intransigent, obdurate, obstinate, pertinacious, resolute, steadfast

CLUSTER: Stupid/Foolish/Naive
callow, gullible, naive, puerile

CLUSTER: Style/Flair
panache, poise

CLUSTER: Subjective/Personal
partial, subjective

CLUSTER: Summarize
recapitulate

CLUSTER: Summary/Comprehensive
synoptic

CLUSTER: Support/Advocate/Endorse
abet, advocate, bolster, buttress, condone, corroborate, sanction, substantiate

CLUSTER: Supporting/Auxiliary
auxiliary

CLUSTER: Suppress
quash

CLUSTER: Surrender
capitulate, yield

CLUSTER: Suspension/Pause
abeyance, dormant, quiescent

CLUSTER: Swollen
turgid

CLUSTER: Symbolic
token

CLUSTER: Symbolic/Metaphorical
allegorical, figurative, metaphorical

CLUSTER: Sympathize
commiserate

CLUSTER: Talkative
glib

CLUSTER: Talkative/Verbose/Wordy
diffuse, expatiate, garrulous, loquacious, prolix, verbose, voluble

CLUSTER: Teaching/Educational
didactic, pedantic

CLUSTER: Temporary/Fleeting/Transient
ephemeral, evanescent, momentary, temporal, tentative, transient, transitory

CLUSTER: Temporary_Calm
lull

CLUSTER: Tending
inclined

CLUSTER: Theatrical
histrionic

CLUSTER: Theoretical
abstract

CLUSTER: Think/Ponder
cogitate, ruminate

CLUSTER: Thorough/Diligent
thorough

CLUSTER: Thoughtful
pensive

CLUSTER: Thwart
foil

CLUSTER: Tired/Exhausted
hapless, weary

CLUSTER: Tolerate/Endure
abide, brook, forbear, withstand

CLUSTER: Traditional/Conventional
conventional

CLUSTER: Traveling
itinerant

CLUSTER: Trick
dupe, ploy

CLUSTER: Trickery
chicanery, dissemble, dupe, feign, skullduggery, swindle

CLUSTER: Trivial/Insignificant
frivolous, incidental, trifling, trivial

CLUSTER: Troubled
distressed

CLUSTER: True
veritable

CLUSTER: Truthfulness
verisimilitude

CLUSTER: Unavoidable
ineluctable

CLUSTER: Unaware
oblivious

CLUSTER: Unbreakable
ironclad

CLUSTER: Uncertain/Indecisive
irresolute

CLUSTER: Uncultured
philistine

CLUSTER: Undeniable
incontrovertible

CLUSTER: Unemotional
stoic

CLUSTER: Unfair
invidious

CLUSTER: Unfashionable
dowdy

CLUSTER: Uniform
homogeneous

CLUSTER: Unnecessary
superfluous

CLUSTER: Unoriginal
derivative

CLUSTER: Unorthodox
heterodox

CLUSTER: Unpredictable/Erratic/Volatile
capricious, erratic, fickle, mercurial, volatile, wayward, whimsical

CLUSTER: Unspoken
tacit

CLUSTER: Untangle
disentangle

CLUSTER: Urge
exhort

CLUSTER: Urgent
exigent, imperative

CLUSTER: Useless
futile

CLUSTER: Vague
indefinite, opaque, turbid

CLUSTER: Violation
transgression

CLUSTER: Waste/Squander/Fritter
extravagant, lavish, prodigal, profligate, spendthrift, squander

CLUSTER: Waver/Hesitate
falter, irresolute, vacillate

CLUSTER: Weak
tenuous

CLUSTER: Weak/Fragile
feeble, frailty

CLUSTER: Weaken/Diminish/Undermine
attenuate, enervate, impair, undercut, undermine, vitiate

CLUSTER: Weaken/Sabotage
subvert

CLUSTER: Wealth/Rich/Affluent
affluent, lucrative

CLUSTER: Winding/Twisting
sinuous, tortuous

CLUSTER: Withdraw/Remove/Take_Away
abrogate, abscond, banish, depose, evade, forsake, jettison, omit, oust, relinquish, shirk, spurn

CLUSTER: Worldly
cosmopolitan, sophisticated, urbane

CLUSTER: Worsen/Deteriorate/Decline
exacerbate, fester, regress, wane

CLUSTER: Wrong_Name
misnomer

CLUSTER: Wrongdoer
miscreant

CLUSTER: Wrongdoing
malfeasance
`;

// Parse the cluster text into structured data
function parseClusterData() {
    const lines = rawClusterText.trim().split('\n');
    let currentCluster = null;
    
    for (let line of lines) {
        line = line.trim();
        if (!line) continue;
        
        if (line.startsWith('CLUSTER:')) {
            if (currentCluster) {
                clusterData.push(currentCluster);
            }
            const clusterName = line.replace('CLUSTER:', '').trim();
            currentCluster = {
                name: clusterName,
                words: []
            };
        } else if (currentCluster) {
            // Parse words (comma-separated)
            const words = line.split(',').map(w => w.trim()).filter(w => w);
            currentCluster.words.push(...words);
        }
    }
    
    // Push the last cluster
    if (currentCluster) {
        clusterData.push(currentCluster);
    }
}

// Initialize
parseClusterData();

// Export for use in viz script
window.clusterData = clusterData;
