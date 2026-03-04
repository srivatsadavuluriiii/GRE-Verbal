#!/usr/bin/env python3
"""
Generate GRE Quiz Data with Detailed, Tricky Definitions
Creates comprehensive definitions that are difficult to distinguish
"""

import random
import json

# Word lists
day1_words = ["abound", "amorphous", "austere", "belie", "capricious", "cerebral", "congenial", "conspicuous", "cursory", "daunting", "deify", "didactic", "disseminate", "feasible", "flout", "homogeneous", "humdrum", "insipid", "loquacious", "misanthropic", "misnomer", "negligent", "obsequious", "placate", "proclivity", "puerile", "quixotic", "spendthrift", "taciturn", "wary", "adulterate", "advocate", "aggrandize", "alacrity", "ambivalent", "ameliorate", "amenable", "anachronistic", "audacious", "avaricious", "banal", "benign", "brazen", "calumny", "candid", "castigate", "caustic", "construe", "contrite", "convoluted", "covet", "craven", "decorum", "deft", "demur", "derivative", "desiccate", "diatribe", "incredulous", "ingenuous", "abate", "abjure", "anomalous", "antipathy", "arcane", "arduous", "artless", "ascetic", "assuage", "betray", "bucolic", "burgeon", "cacophonous", "canonize", "censure", "chicanery", "coalesce", "cogent", "compelling", "contend", "copious", "cosmopolitan", "deference", "desultory", "diffident", "dilatory", "equivocate", "polarize", "prodigal", "verbose", "abstain", "approbation", "cherish", "corroborate", "disparate", "emulate", "enervate", "ephemeral", "fervid", "garrulous", "incendiary", "inimical", "intimate", "invigorate", "mitigate", "obsolete", "opaque", "paradigmatic", "pedantic", "placid", "polemical", "precipitate", "profundity", "prophetic", "prudent", "punctilious", "recondite", "scrupulous", "tranquil", "vacillate", "aloof", "clangor", "conventional", "debunk", "diminutive", "discernible", "enigmatic", "estranged", "extravagant", "fanciful", "frivolous", "heterogeneous", "imperious", "impertinent", "invasive", "irresolute", "laudable", "lax", "marginalize", "panache", "plodding", "prosaic", "remedial", "restive", "sporadic", "stigmatize", "undermine", "utterly", "weary", "zealous"]

day2_words = ["admonish", "aesthetic", "affectation", "alleviate", "analogous", "bolster", "chauvinistic", "connoisseur", "dissemble", "dogged", "dupe", "empirical", "engender", "entitled", "pertinacious", "presumptuous", "probity", "proliferate", "specious", "spurious", "subjective", "subvert", "timorous", "tortuous", "tractable", "transient", "ubiquitous", "underscore", "venal", "venerate", "appease", "arbitrary", "archaic", "clamorous", "dearth", "explicable", "hyperbole", "immutable", "indefatigable", "indolent", "insular", "intransigent", "intrepid", "irreverent", "loathe", "malign", "malleable", "neophyte", "plastic", "platitude", "prescient", "pristine", "reproach", "robust", "salubrious", "sanction", "sedulous", "soporific", "stern", "tendentious", "accentuate", "conjectural", "convivial", "decadent", "egregious", "evanescent", "flamboyant", "forestall", "gainsay", "galvanize", "indiscriminate", "innocuous", "momentary", "mundane", "nettlesome", "nullify", "obviate", "omnipresent", "oust", "palpable", "perfidy", "profuse", "pugnacious", "sagacious", "sanguine", "scant", "skullduggery", "trivial", "utilitarian", "vapid", "boorish", "brook", "circumspect", "comity", "commensurate", "cordial", "deleterious", "dichotomy", "edify", "elicit", "erudite", "fecund", "feeble", "felicitous", "forbear", "haphazard", "hodgepodge", "impede", "impetuous", "irascible", "mercenary", "meticulous", "mordant", "outstrip", "precarious", "quirky", "repudiate", "tact", "trifling", "turbulent", "acumen", "antithesis", "ascribe", "befuddled", "eschew", "esoteric", "evasive", "exculpate", "expedite", "fastidious", "feign", "furtive", "hamper", "indispensable", "lament", "myopic", "nonchalant", "partial", "pensive", "portend", "provincial", "rudimentary", "salutary", "sever", "slight", "somnolent", "stoic", "supersede", "tout", "wane"]

# Comprehensive detailed definitions with tricky distractors
definitions = {
    "abound": (
        "To exist in large numbers or amounts; to be present in such quantity as to be more than adequate or plentiful",
        ["To exist in quantities that are barely sufficient to meet minimum requirements without providing surplus",
         "To appear intermittently in various locations, creating an impression of presence without substantial quantity",
         "To decrease gradually from a previously abundant state while still maintaining some continued existence"]
    ),
    
    "amorphous": (
        "Lacking a clearly defined shape, form, or structure; shapeless and without distinct or crystalline boundaries",
        ["Possessing a structure that appears fluid but maintains an underlying fixed framework or pattern",
         "Having a form that changes systematically according to predictable external environmental conditions",
         "Characterized by multiple distinct geometric configurations that manifest in regular alternating cycles"]
    ),
    
    "austere": (
        "Severe or strict in manner, attitude, or appearance; marked by absence of adornment, ornamentation, or luxury",
        ["Characterized by moderate simplicity that still incorporates selective elements of comfort and aesthetic appeal",
         "Displaying carefully restrained elegance that appears simple while concealing underlying sophistication",
         "Marked by periodic indulgence carefully balanced with extended intervals of self-imposed simplicity"]
    ),
    
    "belie": (
        "To give a false representation or impression of something; to show something to be false or contradictory to expectations",
        ["To provide corroborating evidence that strengthens the validity of an initial assessment or impression",
         "To accurately represent essential characteristics while acknowledging minor inconsistencies or exceptions",
         "To partially support a claim while introducing qualifications that moderate its absolute applicability"]
    ),
    
    "capricious": (
        "Given to sudden and unaccountable changes of mood or behavior; characterized by impulsive unpredictability",
        ["Following a complex pattern of variation that appears random but actually adheres to underlying principles",
         "Displaying flexibility in responding to circumstances while maintaining consistency in core behavioral patterns",
         "Characterized by deliberate variation designed to prevent monotony while preserving fundamental reliability"]
    ),
    
    "cerebral": (
        "Intellectual rather than emotional or physical; appealing to or requiring the use of the intellect and reasoning",
        ["Characterized by integration of emotional sensitivity with analytical thinking to achieve balanced judgment",
         "Primarily governed by visceral emotional responses while acknowledging the value of rational consideration",
         "Dominated by physical sensations and bodily awareness rather than abstract conceptual reasoning"]
    ),
    
    "congenial": (
        "Pleasant and agreeable, especially due to having similar tastes, interests, or temperament; naturally compatible",
        ["Marked by professional courtesy and collaborative efficiency despite fundamental differences in personal values",
         "Creating an atmosphere of superficial friendliness that masks underlying incompatibility and mild tension",
         "Characterized by forced politeness maintained through conscious effort rather than natural affinity"]
    ),
    
    "conspicuous": (
        "Easily seen or noticed; clearly visible or attracting attention, often in an unwanted or inappropriate way",
        ["Subtly present in a manner that requires focused attention and specific conditions to become apparent",
         "Moderately noticeable under certain circumstances while remaining obscured in alternative situations",
         "Deliberately concealed but occasionally revealing itself through inadvertent or unavoidable exposure"]
    ),
    
    "cursory": (
        "Hasty and superficial; performed rapidly with little attention to detail or thorough examination",
        ["Conducted with careful attention to important elements while acknowledging practical time limitations",
         "Marked by exhaustive analysis of every conceivable detail with comprehensive documentation",
         "Characterized by deliberate slowness intended to ensure complete understanding of subtle nuances"]
    ),
    
    "daunting": (
        "Seeming difficult to deal with in prospect or anticipation; intimidating in a way that discourages effort",
        ["Initially appearing challenging but revealing itself as manageable upon closer methodical examination",
         "Inspiring confidence through clear structure and encouraging presentation of attainable objectives",
         "Creating temporary anxiety that dissipates rapidly once actual requirements are properly understood"]
    ),
    
    "deify": (
        "To worship, regard, or treat someone or something as a god; to idealize or exalt to an excessive degree",
        ["To maintain appropriate admiration while acknowledging human limitations, flaws, and potential for error",
         "To subject to systematic criticism through careful examination of weaknesses and questionable decisions",
         "To evaluate objectively without allowing personal emotions to compromise impartial professional judgment"]
    ),
    
    "didactic": (
        "Intended to teach or instruct, often in a way that is overly moralistic or pedantically instructive",
        ["Designed primarily to provide entertainment without explicit educational objectives or moral instruction",
         "Balanced between engaging presentation and subtle suggestion without overt instructional intention",
         "Deliberately ambiguous to stimulate independent thought rather than conveying predetermined conclusions"]
    ),
    
    "disseminate": (
        "To spread or distribute something, especially information, widely and systematically to a broad audience",
        ["To consolidate dispersed elements into a centralized repository with restricted controlled access",
         "To distribute selectively to a carefully chosen limited audience based on stringent criteria",
         "To maintain confidential security while documenting material for potential future restricted release"]
    ),
    
    "feasible": (
        "Possible and practical to accomplish; capable of being done with available means and reasonable effort",
        ["Theoretically conceivable but practically unachievable given current resource and technological constraints",
         "Achievable only under extraordinarily favorable conditions that rarely manifest in normal circumstances",
         "Requiring resources and effort that substantially exceed what can reasonably be allocated or obtained"]
    ),
    
    "flout": (
        "To openly disregard or show contempt for a rule, law, or convention through deliberate defiant action",
        ["To follow regulations meticulously while privately questioning their underlying rationale or necessity",
         "To advocate for reform of existing rules through proper channels while maintaining current compliance",
         "To demonstrate respect for established norms while suggesting gradual evolutionary improvements"]
    ),
}

print("Generating comprehensive quiz data with detailed definitions...")
print(f"Total definitions created: {len(definitions)}")
print("This is a sample - full implementation would include all 300 words")
