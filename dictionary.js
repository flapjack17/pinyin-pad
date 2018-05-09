"use strict"
const zidian = (function () {

    const grammerabbreviations = [
        {
            abbr: 'a',
            term: 'adverb'
        },
        {
            abbr: 'at',
            term: 'attributive'
        },
        {
            abbr: 'bf',
            term: 'bound form'
        },
        {
            abbr: 'c',
            term: 'conjunction'
        },
        {
            abbr: 'cl v',
            term: 'classifactory verb'
        },
        {
            abbr: 'cv',
            term: 'coverb'
        },
        {
            abbr: 'i',
            term: 'interjection'
        },
        {
            abbr: 'ie',
            term: 'idiomatic expression'
        },
        {
            abbr: 'k',
            term: 'marker'
        },
        {
            abbr: 'l',
            term: 'localizer'
        },
        {
            abbr: 'm',
            term: 'measure'
        },
        {
            abbr: 'ma',
            term: 'moveable adverb'
        },
        {
            abbr: 'mv',
            term: 'modal verb'
        },
        {
            abbr: 'n',
            term: 'nound'
        },
        {
            abbr: 'nu',
            term: 'number'
        },
        {
            abbr: 'o',
            term: 'object'
        },
        {
            abbr: 'p',
            term: 'particle'
        },
        {
            abbr: 'ph',
            term: 'phrase'
        },
        {
            abbr: 'pn',
            term: 'pronoun'
        },
        {
            abbr: 'pr',
            term: 'proper noun'
        },
        {
            abbr: 'pw',
            term: 'place word'
        },
        {
            abbr: 'qw',
            term: 'question word'
        },
        {
            abbr: 's',
            term: 'subject'
        },
        {
            abbr: 'sp',
            term: 'specifier'
        },
        {
            abbr: 'sv',
            term: 'stative verb'
        },
        {
            abbr: 'tw',
            term: 'time word'
        },
        {
            abbr: 'v',
            term: 'verb'
        },
        {
            abbr: 'v-o',
            term: 'verb-object construction'
        }
    ];

    const zidian = [
        {
            word: 'a',
            definitions: [
                {
                    grammer: 'p',
                    definition: 'modal particle'
                }
            ]
        },
        {
            word: 'ài',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'love'
                },
                {
                    grammer: 'mv',
                    definition: 'love to, be keen on'
                }
            ]
        },
        {
            word: 'àiren',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'spouse'
                }
            ]
        },
        {
            word: 'bā',
            definitions: [
                {
                    grammer: 'nu',
                    definition: 'eight'
                }
            ]
        },
        {
            word: 'bǎ',
            definitions: [
                {
                    grammer: 'cv',
                    definition: 'governing object disposed of before verb'
                },
                {
                    grammer: 'm',
                    definition: 'for chairs, knives, ect.'
                }
            ]
        },
        {
            word: 'bà',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'pa, dad'
                }
            ]
        },
        {
            word: 'ba',
            definitions: [
                {
                    grammer: 'p',
                    definition: 'particle of suggestion'
                }
            ]
        },
        {
            word: 'bái',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'white, fair'
                }
            ]
        },
        {
            word: 'báicài',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'cabbage'
                }
            ]
        },
        {
            word: 'báiqiējī',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'plain cut chicken'
                }
            ]
        },
        {
            word: 'bǎi',
            definitions: [
                {
                    grammer: 'nu',
                    definition: 'hundred'
                },
                {
                    grammer: 'v',
                    definition: 'place, lay out, display'
                }
            ]
        },
        {
            word: 'bān',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'shift, duty class'
                },
                {
                    grammer: 'm',
                    definition: 'for shifts, classes (of students) scheduled journeys by public transport'
                },
                {
                    grammer: 'v',
                    definition: 'move (to)'
                }
            ]
        },
        {
            word: 'bàn',
            definitions: [
                {
                    grammer: 'nu',
                    definition: 'half, half of'
                },
                {
                    grammer: 'v',
                    definition: 'do, manage, see to'
                }
            ]
        },
        {
            word: 'bànfǎ',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'way, means, method'
                }
            ]
        },
        {
            word: 'bàn gōng',
            definitions: [
                {
                    grammer: 'v-o',
                    definition: 'work (in office)'
                }
            ]
        },
        {
            word: 'bàngōngshì',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'office'
                }
            ]
        },
        {
            word: 'bàngōngzhuō',
            definitions: [
                {
                    grammer: 'n',
                    definition: '(office) desk'
                }
            ]
        },
        {
            word: 'bàn shì',
            definitions: [
                {
                    grammer: 'vo',
                    definition: 'see to matters'
                }
            ]
        },
        {
            word: 'bànshìchù',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'bureau'
                }
            ]
        },
        {
            word: 'bāng máng',
            definitions: [
                {
                    grammer: 'v-o',
                    definition: 'help'
                }
            ]
        },
        {
            word: 'bàng',
            definitions: [
                {
                    grammer: 'm',
                    definition: 'pound (sterling)'
                }
            ]
        },
        {
            word: 'bāo',
            definitions: [
                {
                    grammer: 'm',
                    definition: 'package of, packet of'
                }
            ]
        },
        {
            word: 'bǎo',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'be full, replete'
                }
            ]
        },
        {
            word: 'bào',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'newspaper'
                },
                {
                    grammer: 'v',
                    definition: 'to report'
                }
            ]
        },
        {
            word: 'bàogào',
            definitions: [
                {
                    grammer: 'v/n',
                    definition: 'to report'
                }
            ]
        },
        {
            word: 'bēi',
            definitions: [
                {
                    grammer: 'm',
                    definition: 'cup of, glass of'
                }
            ]
        },
        {
            word: 'bēizi',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'cup, glass'
                }
            ]
        },
        {
            word: 'běi',
            definitions: [
                {
                    grammer: 'l',
                    definition: 'north'
                }
            ]
        },
        {
            word: 'běibian',
            definitions: [
                {
                    grammer: 'l/pw',
                    definition: 'the north'
                }
            ]
        },
        {
            word: 'běifāng rén',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'northerner'
                }
            ]
        },
        {
            word: 'běihǎi gōngyuán',
            definitions: [
                {
                    grammer: 'pw',
                    definition: '(north lake) park in peking'
                }
            ]
        },
        {
            word: 'běijīng',
            definitions: [
                {
                    grammer: 'pw',
                    definition: 'peking'
                }
            ]
        },
        {
            word: 'běijīng yǔyán xuéyuàn',
            definitions: [
                {
                    grammer: 'pr',
                    definition: 'peking languages institute'
                }
            ]
        },
        {
            word: 'bèi',
            definitions: [
                {
                    grammer: 'cv',
                    definition: 'by (in passive construction)'
                }
            ]
        },
        {
            word: 'bēn',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'rush, speed'
                }
            ]
        },
        {
            word: 'běn',
            definitions: [
                {
                    grammer: 'm',
                    definition: 'for books'
                },
                {
                    grammer: 'sp',
                    definition: 'this, the present'
                }
            ]
        },
        {
            word: 'běnlái',
            definitions: [
                {
                    grammer: 'ma',
                    definition: 'originally'
                }
            ]
        },
        {
            word: 'bèn',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'stupid, obtuse, clumsy'
                }
            ]
        },
        {
            word: 'bǐ',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'pen'
                },
                {
                    grammer: 'v',
                    definition: 'compared'
                },
                {
                    grammer: 'cv',
                    definition: 'compared with'
                }
            ]
        },
        {
            word: 'bǐfang',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'examples'
                }
            ]
        },
        {
            word: 'bǐfang shuō',
            definitions: [
                {
                    grammer: 'ph',
                    definition: 'for example'
                }
            ]
        },
        {
            word: 'bǐjiào',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'compare'
                },
                {
                    grammer: 'a',
                    definition: 'comparatively, rather'
                }
            ]
        },
        {
            word: 'bì',
            definitions: [
                {
                    grammer: 'bf',
                    definition: 'currency'
                }
            ]
        },
        {
            word: 'bìděi',
            definitions: [
                {
                    grammer: 'mv',
                    definition: 'must, have to'
                }
            ]
        },
        {
            word: 'bì yè',
            definitions: [
                {
                    grammer: 'v-o',
                    definition: 'to graduate'
                }
            ]
        },
        {
            word: 'biān',
            definitions: [
                {
                    grammer: 'n/l-suffix',
                    definition: 'side, edge'
                }
            ]
        },
        {
            word: 'biǎo',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'watch'
                }
            ]
        },
        {
            word: 'bié',
            definitions: [
                {
                    grammer: 'a',
                    definition: `don't (imperative)`
                }
            ]
        },
        {
            word: 'biéde',
            definitions: [
                {
                    grammer: 'sp',
                    definition: 'other, alternative'
                }
            ]
        },
        {
            word: 'biéren',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'other people'
                }
            ]
        },
        {
            word: 'bìng',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'illness'
                }
            ]
        },
        {
            word: 'bìngle',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'be ill'
                }
            ]
        },
        {
            word: 'bú',
            definitions: [
                {
                    grammer: 'a',
                    definition: 'not'
                }
            ]
        },
        {
            word: 'bù',
            definitions: [
                {
                    grammer: 'a',
                    definition: 'not'
                },
                {
                    grammer: 'n/l-suffix',
                    definition: 'part, section'
                }
            ]
        },
        {
            word: 'búbi',
            definitions: [
                {
                    grammer: 'mv',
                    definition: 'no need to'
                }
            ]
        },
        {
            word: 'bú cuò',
            definitions: [
                {
                    grammer: 'ie',
                    definition: `not bad; that's right`
                }
            ]
        },
        {
            word: 'bú dàng yì huí shì',
            definitions: [
                {
                    grammer: 'ie',
                    definition: 'not regard as a matter (of any importance)'
                }
            ]
        },
        {
            word: 'búguò',
            definitions: [
                {
                    grammer: 'c',
                    definition: 'however, nevertheless'
                }
            ]
        },
        {
            word: 'búlùn',
            definitions: [
                {
                    grammer: 'ma',
                    definition: 'no matter how'
                }
            ]
        },
        {
            word: 'bùdéliǎo',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'terrible'
                },
                {
                    grammer: 'sv complement',
                    definition: 'awfully'
                }
            ]
        },
        {
            word: 'bùgǎndāng',
            definitions: [
                {
                    grammer: 'ie',
                    definition: 'unworthy of the honor, be flattered'
                }
            ]
        },
        {
            word: 'bù hǎoyìsi',
            definitions: [
                {
                    grammer: 'ie',
                    definition: 'embarrassed, ill at ease'
                }
            ]
        },
        {
            word: 'bù shūfu',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'uncomfortable'
                },
                {
                    grammer: 'ie',
                    definition: 'not feel well'
                }
            ]
        },
        {
            word: 'bùtíng',//(de)
            definitions: [
                {
                    grammer: 'a',
                    definition: 'unceasingly'
                }
            ]
        },
        {
            word: 'bù tóng',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'dissimilar'
                }
            ]
        },
        {
            word: 'bùshǒu',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'radical'
                }
            ]
        },
        {
            word: 'cāi',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'guess'
                }
            ]
        },
        {
            word: 'cái',
            definitions: [
                {
                    grammer: 'a',
                    definition: 'only then'
                }
            ]
        },
        {
            word: 'cài',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'vegetables; dish of food, cuisine'
                }
            ]
        },
        {
            word: 'càidān',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'menu'
                }
            ]
        },
        {
            word: 'cān',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'food, cuisine, meal'
                },
                {
                    grammer: 'm',
                    definition: 'for meals'
                }
            ]
        },
        {
            word: 'cèsuǒ',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'lavatory'
                }
            ]
        },
        {
            word: 'chá',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'tea'
                }
            ]
        },
        {
            word: 'chábēi',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'teacup'
                }
            ]
        },
        {
            word: 'chà',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'lack, differ by'
                },
                {
                    grammer: 'sv',
                    definition: 'not up to the mark'
                }
            ]
        },
        {
            word: 'chàbuduō',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'almost the same'
                },
                {
                    grammer: 'a',
                    definition: 'almost, about'
                },
                {
                    grammer: 'ie',
                    definition: 'not bad'
                }
            ]
        },
        {
            word: 'cháng',//(chángcháng)
            definitions: [
                {
                    grammer: 'a',
                    definition: 'often, habitually'
                },
                {
                    grammer: 'sv',
                    definition: 'long'
                }
            ]
        },
        {
            word: 'chángchéng',
            definitions: [
                {
                    grammer: 'pr',
                    definition: 'the great wall'
                }
            ]
        },
        {
            word: 'chángtú',
            definitions: [
                {
                    grammer: 'at',
                    definition: 'long-distance'
                }
            ]
        },
        {
            word: 'chǎng',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'factory'
                },
                {
                    grammer: 'm',
                    definition: 'for peromances, spell of'
                }
            ]
        },
        {
            word: 'chàng gēr',
            definitions: [
                {
                    grammer: 'v-o',
                    definition: 'sing (a song)'
                }
            ]
        },
        {
            word: 'chǎo',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'stir-fry'
                }
            ]
        },
        {
            word: 'chē',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'vehicle, wheeled machine'
                }
            ]
        },
        {
            word: 'chēchuāng',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'carriage window'
                }
            ]
        },
        {
            word: 'chēzhàn',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'station, bus stop'
                }
            ]
        },
        {
            word: 'chéng',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'city wall; city'
                },
                {
                    grammer: 'v complement',
                    definition: 'so as to be, become'
                }
            ]
        },
        {
            word: 'chéng li',
            definitions: [
                {
                    grammer: 'pw',
                    definition: 'in town, urban'
                }
            ]
        },
        {
            word: 'chī',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'eat'
                }
            ]
        },
        {
            word: 'chībulái',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'unable to take to (foods)'
                }
            ]
        },
        {
            word: 'chī fàn',
            definitions: [
                {
                    grammer: 'v-o',
                    definition: 'eat'
                }
            ]
        },
        {
            word: 'chōu',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'smoke (cigarettes)'
                }
            ]
        },
        {
            word: 'chōu yān',
            definitions: [
                {
                    grammer: 'v-o',
                    definition: 'smoke'
                }
            ]
        },
        {
            word: 'chū',
            definitions: [
                {
                    grammer: 'bf',
                    definition: '(go or come) out'
                }
            ]
        },
        {
            word: 'chūfā',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'set out'
                }
            ]
        },
        {
            word: 'chū fēngtou',
            definitions: [
                {
                    grammer: 'vo',
                    definition: 'create a stir, enjoy the limelight'
                }
            ]
        },
        {
            word: 'chū máobing',
            definitions: [
                {
                    grammer: 'vo',
                    definition: 'develop a fault'
                }
            ]
        },
        {
            word: 'chūqu',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'go out'
                }
            ]
        },
        {
            word: 'chúfáng',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'kitchen'
                }
            ]
        },
        {
            word: 'chúle', // (yǐwàu)
            definitions: [
                {
                    grammer: 'ma',
                    definition: 'apart from'
                }
            ]
        },
        {
            word: 'chuān',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'wear, put on ( of garments)'
                }
            ]
        },
        {
            word: 'chuán',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'boat, ship'
                }
            ]
        },
        {
            word: 'chuānghu',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'window'
                }
            ]
        },
        {
            word: 'chuānglián',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'window curtains'
                }
            ]
        },
        {
            word: 'chuī',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'blow'
                }
            ]
        },
        {
            word: 'chuībudé',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'may not be blown by'
                }
            ]
        },
        {
            word: 'cì',
            definitions: [
                {
                    grammer: 'm',
                    definition: 'time, occasion'
                }
            ]
        },
        {
            word: 'cōngming',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'intelligent, clever'
                }
            ]
        },
        {
            word: 'cóng',
            definitions: [
                {
                    grammer: 'cv',
                    definition: 'from'
                }
            ]
        },
        {
            word: 'cù',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'vinegar'
                }
            ]
        },
        {
            word: 'cuò',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'mistake'
                },
                {
                    grammer: 'sv',
                    definition: 'wrong, in error'
                }
            ]
        },
        {
            word: 'dá',
            definitions: [
                {
                    grammer: 'm',
                    definition: 'dozen'
                }
            ]
        },
        {
            word: 'dǎ',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'hit, fight, play (some ball games)'
                }
            ]
        },
        {
            word: 'dǎjìn',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'breach, invade'
                }
            ]
        },
        {
            word: 'dǎkāi',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'open'
                }
            ]
        },
        {
            word: 'dǎ pái',
            definitions: [
                {
                    grammer: 'vo',
                    definition: 'play mah-jong or cards'
                }
            ]
        },
        {
            word: 'dǎsuàn',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'reckon on, plan to'
                }
            ]
        },
        {
            word: 'dǎzìjī',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'typewriter'
                }
            ]
        },
        {
            word: 'dà',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'big; grown up; eldest'
                }
            ]
        },
        {
            word: 'dà bàntiān',
            definitions: [
                {
                    grammer: 'tw',
                    definition: `greater half of a day; 'ages'`
                }
            ]
        },
        {
            word: 'dàduì',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'brigade'
                }
            ]
        },
        {
            word: 'dàgài',
            definitions: [
                {
                    grammer: 'ma',
                    definition: 'probable; in general'
                }
            ]
        },
        {
            word: 'dàjiā',
            definitions: [
                {
                    grammer: 'pn',
                    definition: 'everyone'
                }
            ]
        },
        {
            word: 'dàren',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'adult, grown-up'
                }
            ]
        },
        {
            word: 'dàxué',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'university'
                }
            ]
        },
        {
            word: 'dàyī',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'overcoat'
                }
            ]
        },
        {
            word: 'dài',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'bring, take along; wear, put on (hat, gloves, trappings)'
                }
            ]
        },
        {
            word: 'dàibiǎo',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'represent'
                },
                {
                    grammer: 'n',
                    definition: 'representative'
                },
                {
                    grammer: 'cv',
                    definition: 'on behalf of'
                }
            ]
        },
        {
            word: 'dàfu',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'medical doctor'
                }
            ]
        },
        {
            word: 'dān',
            definitions: [
                {
                    grammer: 'bf',
                    definition: 'single, odd, singly'
                }
            ]
        },
        {
            word: 'dānqiāng pǐmǎ',
            definitions: [
                {
                    grammer: 'ph',
                    definition: `'single spear one horse': singlehanded`
                }
            ]
        },
        {
            word: 'dānshù',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'odd number'
                }
            ]
        },
        {
            word: 'dānwèi',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'unit, place of work'
                }
            ]
        },
        {
            word: 'dàn',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'bland, mild'
                }
            ]
        },
        {
            word: 'dànshi',
            definitions: [
                {
                    grammer: 'c',
                    definition: 'but'
                }
            ]
        },
        {
            word: 'dāng',
            definitions: [
                {
                    grammer: 'clv',
                    definition: 'be (in position of), serve as'
                }
            ]
        },
        {
            word: 'dāngrán',
            definitions: [
                {
                    grammer: 'ma',
                    definition: 'of course'
                }
            ]
        },
        {
            word: 'dāngshí',
            definitions: [
                {
                    grammer: 'tw',
                    definition: 'then, at that time'
                }
            ]
        },
        {
            word: 'dāngzhōng',
            definitions: [
                {
                    grammer: 'pw',
                    definition: 'amoung, in the middle'
                }
            ]
        },
        {
            word: 'dàngzuò',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'treat as, regard as'
                }
            ]
        },
        {
            word: 'dāo chā',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'knife and form' // == dāozi + chāzi
                }
            ]
        },
        {
            word: 'dào',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'arrive, reach'
                },
                {
                    grammer: 'cv',
                    definition: 'to'
                }
            ]
        },
        {
            word: 'dào shíhou',
            definitions: [
                {
                    grammer: 'ph',
                    definition: 'when the time comes'
                }
            ]
        },
        {
            word: 'dàoshi',
            definitions: [
                {
                    grammer: 'ma',
                    definition: 'indeed, actually, as it happens'
                }
            ]
        },
        {
            word: 'dàolǐ',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'reason, sense'
                }
            ]
        },
        {
            word: 'déguó',
            definitions: [
                {
                    grammer: 'pw',
                    definition: 'germany'
                }
            ]
        },
        {
            word: 'déle',
            definitions: [
                {
                    grammer: 'ie',
                    definition: `that's enough, pack it in`
                }
            ]
        },
        {
            word: 'déwén',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'german language'
                }
            ]
        },
        {
            word: 'de',// check back in the book about this
            definitions: [
                {
                    grammer: 'k',
                    definition: 'marker of subordination; comlement marker; adverbial marker'
                }
            ]
        },
        {
            word: 'děi',
            definitions: [
                {
                    grammer: 'mv',
                    definition: 'must; need to'
                }
            ]
        },
        {
            word: 'dēng',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'lamp, light'
                }
            ]
        },
        {
            word: 'děng',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'wait (for)'
                },
                {
                    grammer: 'm',
                    definition: 'grade, class'
                }
            ]
        },
        {
            word: 'děngdào',
            definitions: [
                {
                    grammer: 'tw',
                    definition: 'by the time'
                }
            ]
        },
        {
            word: 'dī',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'low'
                },
                {
                    grammer: 'v',
                    definition: 'droop'
                }
            ]
        },
        {
            word: 'dǐxia',
            definitions: [
                {
                    grammer: 'l/pw',
                    definition: 'under; below, benteath'
                }
            ]
        },
        {
            word: 'dì',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'land; ground; fields'
                }
            ]
        },
        {
            word: 'dìfang',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'place'
                }
            ]
        },
        {
            word: 'dìlǐ',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'geography'
                }
            ]
        },
        {
            word: 'dì li',
            definitions: [
                {
                    grammer: 'pw',
                    definition: 'in the fields'
                }
            ]
        },
        {
            word: 'dìmíng',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'place name'
                }
            ]
        },
        {
            word: 'dìtiě',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'underground train'
                }
            ]
        },
        {
            word: 'dìtú',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'map, atlas'
                }
            ]
        },
        {
            word: 'dì',
            definitions: [
                {
                    grammer: 'prefix',
                    definition: 'ordinal prefix'
                }
            ]
        },
        {
            word: 'dìyī',
            definitions: [
                {
                    grammer: 'prefix-nu',
                    definition: 'first'
                }
            ]
        },
        {
            word: 'dìdi',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'younger brother'
                }
            ]
        },
        {
            word: 'diǎn cài',
            definitions: [
                {
                    grammer: 'vo',
                    definition: 'choose/order dishes'
                }
            ]
        },
        {
            word: 'diǎnxian',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'various pastries'
                }
            ]
        },
        {
            word: 'diǎn zhōng',
            definitions: [
                {
                    grammer: 'm-n',
                    definition: `o'clock`
                }
            ]
        },
        {
            word: 'diàn',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'electricity'
                }
            ]
        },
        {
            word: 'diànbào',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'telegram'
                }
            ]
        },
        {
            word: 'diànchē',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'tram'
                }
            ]
        },
        {
            word: 'diànhuà',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'telephone'
                }
            ]
        },
        {
            word: 'diànnǎo',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'computer'
                }
            ]
        },
        {
            word: 'diànshi',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'television'
                }
            ]
        },
        {
            word: 'diànyǐng', // diànyǐng(r)
            definitions: [
                {
                    grammer: 'n',
                    definition: 'motion picture'
                }
            ]
        },
        {
            word: 'diànyǐngyuàn',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'cinema'
                }
            ]
        },
        {
            word: 'diànzǐ',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'electron'
                }
            ]
        },
        {
            word: 'dōng',
            definitions: [
                {
                    grammer: 'l',
                    definition: 'east'
                }
            ]
        },
        {
            word: 'dōngfāng',
            definitions: [
                {
                    grammer: 'pw',
                    definition: 'orient'
                }
            ]
        },
        {
            word: 'dōngxi',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'thing (object)'
                }
            ]
        },
        {
            word: 'dōngtiān',
            definitions: [
                {
                    grammer: 'tw',
                    definition: 'winter'
                }
            ]
        },
        {
            word: 'dǒng',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'understand'
                }
            ]
        },
        {
            word: 'dòng',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'move, touch'
                }
            ]
        },
        {
            word: 'dōu',
            definitions: [
                {
                    grammer: 'a',
                    definition: 'all, both'
                }
            ]
        },
        {
            word: 'dòufu',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'beancurd'
                }
            ]
        },
        {
            word: 'dù',
            definitions: [
                {
                    grammer: 'm',
                    definition: 'degree'
                }
            ]
        },
        {
            word: 'duì',
            definitions: [
                {
                    grammer: 'sv',
                    definition: `correct, that's right`
                },
                {
                    grammer: 'cv',
                    definition: `to`
                }
            ]
        },
        {
            word: 'duìbuqǐ',
            definitions: [
                {
                    grammer: 'ie',
                    definition: 'sorry, parden me, excuse me'
                }
            ]
        },
        {
            word: 'duìmiàn',
            definitions: [
                {
                    grammer: 'pw',
                    definition: 'opposite'
                }
            ]
        },
        {
            word: 'duìxiàng',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'object (of an action); boy or girlfriend'
                }
            ]
        },
        {
            word: 'duō',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'many, much'
                }
            ]
        },
        {
            word: 'duōshao',
            definitions: [
                {
                    grammer: 'qw',
                    definition: 'how many'
                }
            ]
        },
        {
            word: 'dùn',
            definitions: [
                {
                    grammer: 'm',
                    definition: 'for meals; bout of'
                }
            ]
        },
        {
            word: 'ēi',
            definitions: [
                {
                    grammer: 'i',
                    definition: 'hey'
                }
            ]
        },
        {
            word: 'è',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'hungry'
                }
            ]
        },
        {
            word: 'èr',
            definitions: [
                {
                    grammer: 'nu',
                    definition: 'two'
                }
            ]
        },
        {
            word: 'ézi',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'son'
                }
            ]
        },
        {
            word: 'fāxiàn',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'discover'
                }
            ]
        },
        {
            word: 'fázi',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'way, means, method'
                }
            ]
        },
        {
            word: 'fǎzi',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'way, means, method'
                }
            ]
        },
        {
            word: 'fǎguo',
            definitions: [
                {
                    grammer: 'pw',
                    definition: 'france'
                }
            ]
        },
        {
            word: 'fǎwén',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'french language'
                }
            ]
        },
        {
            word: 'fàn',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'cooked rice; meal'
                }
            ]
        },
        {
            word: 'fànguǎnr',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'restaurant'
                }
            ]
        },
        {
            word: 'fāngbiàn',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'convenient'
                }
            ]
        },
        {
            word: 'fāngmiàn',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'aspect, respect'
                }
            ]
        },
        {
            word: 'fāngxiàng',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'direction'
                }
            ]
        },
        {
            word: 'fángzi',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'house'
                }
            ]
        },
        {
            word: 'fángwū',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'houses, building'
                }
            ]
        },
        {
            word: 'fàng',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'put, put in; let go'
                }
            ]
        },
        {
            word: 'fēi',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'fly'
                }
            ]
        },
        {
            word: 'fēijī',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'aeroplane'
                }
            ]
        },
        {
            word: 'fēicháng',
            definitions: [
                {
                    grammer: 'a',
                    definition: 'exceptionally'
                }
            ]
        },
        {
            word: 'fēn',
            definitions: [
                {
                    grammer: 'm',
                    definition: '1/100 of yuán, cent; minute (clock time)'
                }
            ]
        },
        {
            word: 'fēn zhōng',
            definitions: [
                {
                    grammer: 'm-n',
                    definition: 'minute (length of time)'
                }
            ]
        },
        {
            word: 'fēnkāi',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'separate'
                }
            ]
        },
        {
            word: 'fèn',
            definitions: [
                {
                    grammer: 'm',
                    definition: 'copy (of newspaper), portion of'
                }
            ]
        },
        {
            word: 'fēng',
            definitions: [
                {
                    grammer: 'm',
                    definition: 'for letters'
                },
                {
                    grammer: 'n',
                    definition: 'wind'
                }
            ]
        },
        {
            word: 'fēngjǐng',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'scenery'
                }
            ]
        },
        {
            word: 'fēngtǔ rénqíng',
            definitions: [
                {
                    grammer: 'set ph',
                    definition: 'local conditions and customs'
                }
            ]
        },
        {
            word: 'fūfù',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'husband and wife'
                }
            ]
        },
        {
            word: 'fūren',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'madam; mrs.'
                }
            ]
        },
        {
            word: 'fú',
            definitions: [
                {
                    grammer: 'm',
                    definition: 'for paintings'
                }
            ]
        },
        {
            word: 'fúwù',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'serve'
                },
                {
                    grammer: 'n',
                    definition: 'service'
                }
            ]
        },
        {
            word: 'fúwùyuán',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'attendant'
                }
            ]
        },
        {
            word: 'fùjìn',
            definitions: [
                {
                    grammer: 'tw',
                    definition: 'vicinity'
                }
            ]
        },
        {
            word: 'fùqin',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'father'
                }
            ]
        },
        {
            word: 'fùmǔ',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'father and mother'
                }
            ]
        },
        {
            word: 'fùxí',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'revise'
                },
                {
                    grammer: 'n',
                    definition: 'revision'
                }
            ]
        },
        {
            word: 'gānbēi',
            definitions: [
                {
                    grammer: 'ie',
                    definition: 'drain glass, cheers'
                }
            ]
        },
        {
            word: 'gǎnjǐn',
            definitions: [
                {
                    grammer: 'a',
                    definition: 'hurriedly'
                }
            ]
        },
        {
            word: 'gǎn',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'do, work, get on with'
                }
            ]
        },
        {
            word: 'gànbù',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'cadre'
                }
            ]
        },
        {
            word: 'gànmá',
            definitions: [
                {
                    grammer: 'ie',
                    definition: 'do what; what for, why on earth'
                }
            ]
        },
        {
            word: 'gāng',
            definitions: [
                {
                    grammer: 'a',
                    definition: 'just'
                }
            ]
        },
        {
            word: 'gāngcái',
            definitions: [
                {
                    grammer: 'tw',
                    definition: 'just now, a moment ago'
                }
            ]
        },
        {
            word: 'gāo',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'high, tall'
                }
            ]
        },
        {
            word: 'gāoxìng',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'pleased, exhilarated'
                }
            ]
        },
        {
            word: 'gǎo',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'do, go in for, make, get up to'
                }
            ]
        },
        {
            word: 'gàosu',
            definitions: [
                {
                    grammer: '',
                    definition: ''
                }
            ]
        },
        {
            word: 'gē', //(r)
            definitions: [
                {
                    grammer: 'n',
                    definition: 'song'
                }
            ]
        },
        {
            word: 'gēge',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'elder brother'
                }
            ]
        },
        {
            word: 'gé',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'isolate, seperate'
                }
            ]
        },
        {
            word: 'gékāi',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'separate'
                }
            ]
        },
        {
            word: 'gè',
            definitions: [
                {
                    grammer: 'at',
                    definition: 'each, various different'
                }
            ]
        },
        {
            word: 'gè zhǒng gè yàng',
            definitions: [
                {
                    grammer: 'set ph',
                    definition: 'all sorts of'
                }
            ]
        },
        {
            word: 'ge',
            definitions: [
                {
                    grammer: 'm',
                    definition: 'general classifier'
                }
            ]
        },
        {
            word: 'gěi',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'give'
                },
                {
                    grammer: 'cv',
                    definition: 'for, in the interest of; by (in passive construction)'
                }
            ]
        },
        {
            word: 'gěi rén jièshào',
            definitions: [
                {
                    grammer: 'ph',
                    definition: 'effect an introduction for somebody'
                }
            ]
        },
        {
            word: 'gēn',
            definitions: [
                {
                    grammer: 'c/cv',
                    definition: 'along with, and'
                }
            ]
        },
        {
            word: 'gèng',
            definitions: [
                {
                    grammer: 'a',
                    definition: 'still more, even more'
                }
            ]
        },
        {
            word: 'gèngshi',
            definitions: [
                {
                    grammer: 'a',
                    definition: 'further, on top of that'
                }
            ]
        },
        {
            word: 'gōng',
            definitions: [
                {
                    grammer: 'prefix',
                    definition: 'for metric units; public, official'
                },
                {
                    grammer: 'n',
                    definition: 'work, labor'
                }
            ]
        },
        {
            word: `gōng'ānjú`,
            definitions: [
                {
                    grammer: 'n',
                    definition: 'public security bureau'
                }
            ]
        },
        {
            word: 'gōnggòng qìchē',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'bus'
                }
            ]
        },
        {
            word: 'gōngjīn',
            definitions: [
                {
                    grammer: 'm',
                    definition: 'kilo'
                }
            ]
        },
        {
            word: 'gōngshè',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'commune'
                }
            ]
        },
        {
            word: 'gōngshì',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'office business, paperwork'
                }
            ]
        },
        {
            word: 'gōngsī',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'company'
                }
            ]
        },
        {
            word: 'gōngyúan',//(r)
            definitions: [
                {
                    grammer: 'n',
                    definition: 'park'
                }
            ]
        },
        {
            word: 'gōngchǎng',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'factory'
                }
            ]
        },
        {
            word: 'gōngfu',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'tim, leisure time; kung fu'
                }
            ]
        },
        {
            word: 'gōngren',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'worker'
                }
            ]
        },
        {
            word: 'gōngzuò',
            definitions: [
                {
                    grammer: 'n/v',
                    definition: 'work'
                }
            ]
        },
        {
            word: 'gòu',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'enough'
                }
            ]
        },
        {
            word: 'gǔ',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'ancient, old'
                }
            ]
        },
        {
            word: 'gùgōng',
            definitions: [
                {
                    grammer: 'pw',
                    definition: '(former palace) the palace museum'
                }
            ]
        },
        {
            word: 'guà',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'hang'
                }
            ]
        },
        {
            word: 'guàirén',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'strange person, eccentric'
                }
            ]
        },
        {
            word: 'guān',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'close, shut up/in'
                }
            ]
        },
        {
            word: 'guānshang',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'close to'
                }
            ]
        },
        {
            word: 'guānxi',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'relation(ship)'
                },
                {
                    grammer: 'v',
                    definition: 'concern, affect'
                }
            ]
        },
        {
            word: 'guǎnzi',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'restaurant'
                }
            ]
        },
        {
            word: 'guǎngbō',
            definitions: [
                {
                    grammer: 'v/n',
                    definition: 'broadcast'
                }
            ]
        },
        {
            word: 'guǎngzhōu',
            definitions: [
                {
                    grammer: 'pw',
                    definition: 'canton city'
                }
            ]
        },
        {
            word: 'guì',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'expensive'
                }
            ]
        },
        {
            word: 'guì xìng',
            definitions: [
                {
                    grammer: 'ie',
                    definition: `what's your (sur)name`
                }
            ]
        },
        {
            word: 'guōtiēr',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'a kind of fried pastry'
                }
            ]
        },
        {
            word: 'guójiā',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'state, country'
                }
            ]
        },
        {
            word: 'guǒrán',
            definitions: [
                {
                    grammer: 'ma',
                    definition: 'sure enough, just as predicted'
                }
            ]
        },
        {
            word: 'guò',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'pass through, cross'
                },
                {
                    grammer: 'v-suffix',
                    definition: 'experiential suffix'
                },
                {
                    grammer: 'v complement',
                    definition: 'through'
                }
            ]
        },
        {
            word: 'hái',
            definitions: [
                {
                    grammer: 'a',
                    definition: 'still, yet; in addition'
                }
            ]
        },
        {
            word: 'háishi',
            definitions: [
                {
                    grammer: 'a',
                    definition: 'still, yet'
                }
            ]
        },
        {
            word: 'háizi',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'child'
                }
            ]
        },
        {
            word: 'hàn',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'majority people in china'
                }
            ]
        },
        {
            word: 'hànyǔ',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'chinese language'
                }
            ]
        },
        {
            word: 'hàn',
            definitions: [
                {
                    grammer: 'sweat',
                    definition: ''
                }
            ]
        },
        {
            word: 'hǎo',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'good, fine, alright, be on good terms'
                },
                {
                    grammer: 'a',
                    definition: 'good to, easy to'
                }
            ]
        },
        {
            word: 'hǎohāor', //(de)
            definitions: [
                {
                    grammer: 'a',
                    definition: 'properly'
                }
            ]
        },
        {
            word: 'hǎo jǐ',
            definitions: [
                {
                    grammer: 'a+nu',
                    definition: 'a good few'
                }
            ]
        },
        {
            word: 'hǎo jiǔ bú jiàn',
            definitions: [
                {
                    grammer: 'ie',
                    definition: 'long time no see'
                }
            ]
        },
        {
            word: 'hǎoxiàng',
            definitions: [
                {
                    grammer: 'ma',
                    definition: 'seemingly, as if'
                }
            ]
        },
        {
            word: 'hào',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'number; day of month'
                }
            ]
        },
        {
            word: 'hàoqí',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'curious, inquisitive'
                }
            ]
        },
        {
            word: 'hē',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'drink'
                }
            ]
        },
        {
            word: 'hé',
            definitions: [
                {
                    grammer: 'c/cv',
                    definition: 'and, with'
                }
            ]
        },
        {
            word: 'hēi',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'black, dark'
                }
            ]
        },
        {
            word: 'hěn',
            definitions: [
                {
                    grammer: 'a',
                    definition: 'very, quite'
                }
            ]
        },
        {
            word: 'hóngshāoròu',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'red-cooked pork'
                }
            ]
        },
        {
            word: 'hòu',
            definitions: [
                {
                    grammer: 'l',
                    definition: 'back, behind'
                }
            ]
        },
        {
            word: 'hòulái',
            definitions: [
                {
                    grammer: 'ma',
                    definition: 'afterwards, later on'
                }
            ]
        },
        {
            word: 'hòutou',
            definitions: [
                {
                    grammer: 'l/pw',
                    definition: 'behind'
                }
            ]
        },
        {
            word: 'hūrán',
            definitions: [
                {
                    grammer: 'ma',
                    definition: 'suddenly'
                }
            ]
        },
        {
            word: 'hú',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'lake'
                }
            ]
        },
        {
            word: 'hútu',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'muddled, silly'
                }
            ]
        },
        {
            word: 'hùzhào',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'passport'
                }
            ]
        },
        {
            word: 'huā',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'spend (money, time)'
                }
            ]
        },
        {
            word: 'huá',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'short for zhōnghuá (china)'
                }
            ]
        },
        {
            word: 'húběi píngyuán',
            definitions: [
                {
                    grammer: 'pw',
                    definition: 'north china plain'
                }
            ]
        },
        {
            word: 'huáqiáo',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'overseas chinese'
                }
            ]
        },
        {
            word: 'huà',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'speech, spoken words'
                },
                {
                    grammer: 'v',
                    definition: 'draw, paint'
                }
            ]
        },
        {
            word: 'huàr',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'painting, picture'
                }
            ]
        },
        {
            word: 'huà huàr',
            definitions: [
                {
                    grammer: 'v-o',
                    definition: 'draw paint'
                }
            ]
        },
        {
            word: 'huàjiā',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'painter'
                }
            ]
        },
        {
            word: 'huàxué',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'chemistry'
                }
            ]
        },
        {
            word: 'huài',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'bad, out of order'
                }
            ]
        },
        {
            word: 'huàn',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'change, exchange'
                }
            ]
        },
        {
            word: 'huànchē',
            definitions: [
                {
                    grammer: 'v-o',
                    definition: 'change (trains, busses)'
                }
            ]
        },
        {
            word: 'huáng',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'yellow'
                }
            ]
        },
        {
            word: 'huánghé',
            definitions: [
                {
                    grammer: 'pr',
                    definition: 'the yellow river'
                }
            ]
        },
        {
            word: 'huángyú',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'yellow croacker'
                }
            ]
        },
        {
            word: 'huībái',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'grey-white'
                }
            ]
        },
        {
            word: 'huí',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'return to'
                },
                {
                    grammer: 'm',
                    definition: 'for events, occasion'
                }
            ]
        },
        {
            word: 'huídá',
            definitions: [
                {
                    grammer: 'v/n',
                    definition: 'answer, reply'
                }
            ]
        },
        {
            word: 'huíguōròu',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'return to the pot meat (a pork dish)'
                }
            ]
        },
        {
            word: 'huílai',
            definitions: [
                {
                    grammer: 'c',
                    definition: 'come back'
                }
            ]
        },
        {
            word: 'huì',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'know (language)'
                },
                {
                    grammer: 'mv',
                    definition: 'know how to, can, have capactiy for; would, be sure to, be likely to'
                }
            ]
        },
        {
            word: 'huópo',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'lively'
                }
            ]
        },
        {
            word: 'huǒ',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'fire'
                }
            ]
        },
        {
            word: 'huǒchē',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'train'
                }
            ]
        },
        {
            word: 'jī',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'chicken'
                }
            ]
        },
        {
            word: 'jīhuì',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'opportunity'
                }
            ]
        },
        {
            word: 'jīqì',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'machine'
                }
            ]
        },
        {
            word: 'jīqìrén',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'robot'
                }
            ]
        },
        {
            word: 'jí',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'impatient, anzious, hasty, urgent'
                }
            ]
        },
        {
            word: 'jíle',
            definitions: [
                {
                    grammer: 'sv complement',
                    definition: 'extremely'
                }
            ]
        },
        {
            word: 'jǐ',
            definitions: [
                {
                    grammer: 'qw',
                    definition: 'how many (small number)'
                }
            ]
        },
        {
            word: 'jìsuànjī',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'calculating machine, computer'
                }
            ]
        },
        {
            word: 'jì',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'record, memorize; send by post'
                }
            ]
        },
        {
            word: 'jìde',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'remember, recall'
                }
            ]
        },
        {
            word: 'jiā',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'family, home'
                },
                {
                    grammer: 'm',
                    definition: 'for families and business establishments'
                }
            ]
        },
        {
            word: 'jiāxiāngjī',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'hometown chicken'
                }
            ]
        },
        {
            word: 'jiān',
            definitions: [
                {
                    grammer: 'm',
                    definition: 'for rooms'
                }
            ]
        },
        {
            word: 'jiǎndān',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'simple'
                }
            ]
        },
        {
            word: 'jiǎnzhí',
            definitions: [
                {
                    grammer: 'a',
                    definition: 'simply'
                }
            ]
        },
        {
            word: 'jiàn',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'see, meet with, call on'
                },
                {
                    grammer: 'm',
                    definition: 'piece, item'
                }
            ]
        },
        {
            word: 'jiànbudé',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'may not be seen by'
                }
            ]
        },
        {
            word: 'jiàn miàn',
            definitions: [
                {
                    grammer: 'v-o',
                    definition: 'meet, see one another'
                }
            ]
        },
        {
            word: 'jiànjiàn',//(de)
            definitions: [
                {
                    grammer: 'a',
                    definition: 'gradually'
                }
            ]
        },
        {
            word: 'jiānglái',
            definitions: [
                {
                    grammer: 'tw',
                    definition: 'in future'
                }
            ]
        },
        {
            word: 'jiàngyóu',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'soy sauce'
                }
            ]
        },
        {
            word: 'jiāo',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'teach'
                }
            ]
        },
        {
            word: 'jiāo shū',
            definitions: [
                {
                    grammer: 'v-o',
                    definition: 'teach'
                }
            ]
        },
        {
            word: 'jiǎo',
            definitions: [
                {
                    grammer: 'm',
                    definition: '1/10 yuán (written)'
                }
            ]
        },
        {
            word: 'jiào',
            definitions: [
                {
                    grammer: 'clv',
                    definition: 'be called'
                },
                {
                    grammer: 'v',
                    definition: 'call, tell, order'
                },
                {
                    grammer: 'cv',
                    definition: 'by (in passive construction)'
                }
            ]
        },
        {
            word: 'jiào mén',
            definitions: [
                {
                    grammer: 'vo',
                    definition: 'call at the door'
                }
            ]
        },
        {
            word: 'jiào hǎo',
            definitions: [
                {
                    grammer: 'v-o',
                    definition: 'shout well-done'
                }
            ]
        },
        {
            word: 'jiàxǐng',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'call awake'
                }
            ]
        },
        {
            word: 'jiē',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'street'
                },
                {
                    grammer: 'v',
                    definition: 'meet, welcome, connect'
                }
            ]
        },
        {
            word: 'jiēdào',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'receive'
                }
            ]
        },
        {
            word: 'jiētōng',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'connect, put through'
                }
            ]
        },
        {
            word: 'jiéguǒ',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'result, outcome'
                },
                {
                    grammer: 'ma',
                    definition: 'as a result'
                }
            ]
        },
        {
            word: 'jié hūn',
            definitions: [
                {
                    grammer: 'v-o',
                    definition: 'marry'
                }
            ]
        },
        {
            word: 'jiě',
            definitions: [
                {
                    grammer: 'bf',
                    definition: 'untie, undo'
                }
            ]
        },
        {
            word: 'jiěfàng',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'liberate'
                },
                {
                    grammer: 'n',
                    definition: 'liberation'
                }
            ]
        },
        {
            word: 'jiěfàngjūn',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'liberation army, member of same'
                }
            ]
        },
        {
            word: 'jiěshì',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'explain'
                },
                {
                    grammer: 'n',
                    definition: 'explanation'
                }
            ]
        },
        {
            word: 'jiěmèi',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'sisters'
                }
            ]
        },
        {
            word: 'jiè',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'borrow, lend'
                }
            ]
        },
        {
            word: 'jièshào',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'introduce'
                },
                {
                    grammer: 'n',
                    definition: 'introduction'
                }
            ]
        },
        {
            word: 'jīn',
            definitions: [
                {
                    grammer: 'm',
                    definition: 'catty (500 gr.)'
                }
            ]
        },
        {
            word: 'jīnnián',
            definitions: [
                {
                    grammer: 'tw',
                    definition: 'this year'
                }
            ]
        },
        {
            word: 'jīntiān',
            definitions: [
                {
                    grammer: 'tw',
                    definition: 'today'
                }
            ]
        },
        {
            word: 'jǐnzhāng',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'tense, tight, short of supply'
                }
            ]
        },
        {
            word: 'jìn',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'near, close'
                },
                {
                    grammer: 'v',
                    definition: 'enter'
                }
            ]
        },
        {
            word: 'jìnbù',
            definitions: [
                {
                    grammer: 'v/n',
                    definition: 'progress'
                }
            ]
        },
        {
            word: 'jìnlai',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'come in'
                }
            ]
        },
        {
            word: 'jìnrù',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'enter into'
                }
            ]
        },
        {
            word: 'jìnxíng',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'be in progress, carry on/out'
                }
            ]
        },
        {
            word: 'jīngguò',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'pass through'
                },
                {
                    grammer: 'n',
                    definition: 'process, course'
                },
                {
                    grammer: 'cv',
                    definition: 'by, by way of'
                }
            ]
        },
        {
            word: 'jīnshen',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'spirit, vitality'
                },
                {
                    grammer: 'sv',
                    definition: 'spruce, lively'
                }
            ]
        },
        {
            word: 'jǐngsè',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'landscape, scenery'
                }
            ]
        },
        {
            word: 'jìng',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'salute, toast'
                }
            ]
        },
        {
            word: 'jìngtóu',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'shot (photography)'
                }
            ]
        },
        {
            word: 'jiǔ',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'wine, spirit'
                },
                {
                    grammer: 'nu',
                    definition: 'nine'
                }
            ]
        },
        {
            word: 'jiǔguǎnr',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'pub'
                }
            ]
        },
        {
            word: 'jiù',//(shi)
            definitions: [
                {
                    grammer: 'a',
                    definition: '(be) precisely, indeed'
                },
                {
                    grammer: 'a',
                    definition: 'then'
                },
                {
                    grammer: 'sv',
                    definition: 'old, second handl former'
                }
            ]
        },
        {
            word: 'jú',
            definitions: [
                {
                    grammer: 'bf',
                    definition: 'office, bureau'
                }
            ]
        },
        {
            word: 'jù',
            definitions: [
                {
                    grammer: 'm',
                    definition: 'for sentences, phrases'
                }
            ]
        },
        {
            word: 'juéde',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'feel, sense'
                }
            ]
        },
        {
            word: 'juéding',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'decide'
                }
            ]
        },
        {
            word: 'kāfēi',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'coffee'
                }
            ]
        },
        {
            word: 'kāi',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'open, start, operate'
                }
            ]
        },
        {
            word: 'kāi chē',
            definitions: [
                {
                    grammer: 'v-o',
                    definition: 'drive'
                }
            ]
        },
        {
            word: 'kāikuò',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'open (of spaces)'
                }
            ]
        },
        {
            word: 'kāishǐ',
            definitions: [
                {
                    grammer: 'v/n',
                    definition: 'start'
                }
            ]
        },
        {
            word: 'kàn',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'look at; read'
                }
            ]
        },
        {
            word: 'kàndào',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'see, catch sight of'
                }
            ]
        },
        {
            word: 'kànfǎ',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'outlook, view'
                }
            ]
        },
        {
            word: 'kàn shū',
            definitions: [
                {
                    grammer: 'v-o',
                    definition: 'read (books)'
                }
            ]
        },
        {
            word: 'kǎo',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'give/take an examination'
                }
            ]
        },
        {
            word: 'kǎoshàng',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'pass exam for'
                }
            ]
        },
        {
            word: 'kǎoshì',
            definitions: [
                {
                    grammer: 'vo/n',
                    definition: '(have an) exam'
                }
            ]
        },
        {
            word: 'kǎoyā',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'roast duck'
                }
            ]
        },
        {
            word: `kě'ài`,
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'loveable, lovely'
                }
            ]
        },
        {
            word: 'kěshi',
            definitions: [
                {
                    grammer: 'ma',
                    definition: 'but'
                }
            ]
        },
        {
            word: 'kěyǐ',
            definitions: [
                {
                    grammer: 'mv',
                    definition: 'be permissible, can, may'
                }
            ]
        },
        {
            word: 'kèqi',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'polite, modest in manner'
                }
            ]
        },
        {
            word: 'kèren',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'guest'
                }
            ]
        },
        {
            word: 'kè',
            definitions: [
                {
                    grammer: 'm',
                    definition: 'quarter (of an hour)'
                },
                {
                    grammer: 'm',
                    definition: 'lesson'
                },
                {
                    grammer: 'n',
                    definition: 'course, class'
                }
            ]
        },
        {
            word: 'kěn',
            definitions: [
                {
                    grammer: 'mv',
                    definition: 'be willing to, agree to'
                }
            ]
        },
        {
            word: 'kǒng',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'opening, aperture'
                }
            ]
        },
        {
            word: 'kǒngpà',
            definitions: [
                {
                    grammer: 'ma',
                    definition: `i'm afraid; perhaps`
                }
            ]
        },
        {
            word: 'kǒu',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'mouth'
                },
                {
                    grammer: 'm',
                    definition: 'for members of family'
                }
            ]
        },
        {
            word: 'kǒuxiāngtáng',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'chewing gum'
                }
            ]
        },
        {
            word: 'kuài',
            definitions: [
                {
                    grammer: 'm',
                    definition: 'unit of currency; piece, lump'
                },
                {
                    grammer: 'sv',
                    definition: 'fast, quick'
                },
                {
                    grammer: 'a',
                    definition: 'quickly, very soon'
                }
            ]
        },
        {
            word: 'kuàizi',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'chopsticks'
                }
            ]
        },
        {
            word: 'lā',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'pull'
                }
            ]
        },
        {
            word: 'lāshang',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'pull to'
                }
            ]
        },
        {
            word: 'là',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'hot (spices)'
                }
            ]
        },
        {
            word: 'lái',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'come, cause to come'
                },
                {
                    grammer: 'v complement',
                    definition: 'able to, manage to'
                }
            ]
        },
        {
            word: 'láilì',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'origin, antecedents'
                }
            ]
        },
        {
            word: 'lái xìn',
            definitions: [
                {
                    grammer: 'vo',
                    definition: '(make come) a letter'
                }
            ]
        },
        {
            word: 'láihuí láiqù',//(de)
            definitions: [
                {
                    grammer: 'a',
                    definition: 'backwards and forwards'
                }
            ]
        },
        {
            word: 'lán',//(sè)
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'blue (colored)'
                }
            ]
        },
        {
            word: 'lánzhù',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'stop, bar the way'
                }
            ]
        },
        {
            word: 'láodòng',
            definitions: [
                {
                    grammer: 'v/n',
                    definition: 'labor'
                }
            ]
        },
        {
            word: 'lǎo',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'old'
                }
            ]
        },
        {
            word: 'lǎoshī',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'teacher'
                }
            ]
        },
        {
            word: 'lǎoxiōng',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'old chap'
                }
            ]
        },
        {
            word: 'le',
            definitions: [
                {
                    grammer: 'p',
                    definition: `modal particle indicating change of state and 'excessiveness' for 'accomplished fact'`
                },
                {
                    grammer: 'v suffix',
                    definition: `for completed action`
                }
            ]
        },
        {
            word: 'lèi',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'tired, weary'
                }
            ]
        },
        {
            word: 'lěng',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'cold'
                }
            ]
        },
        {
            word: 'lí',
            definitions: [
                {
                    grammer: 'cv',
                    definition: 'seperated from'
                }
            ]
        },
        {
            word: 'lǐ',
            definitions: [
                {
                    grammer: 'pr',
                    definition: 'common surname'
                },
                {
                    grammer: 'l',
                    definition: 'in'
                },
                {
                    grammer: 'm',
                    definition: '1/2 km'
                }
            ]
        },
        {
            word: 'lì',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'stand; setup'
                }
            ]
        },
        {
            word: 'lìkè',
            definitions: [
                {
                    grammer: 'a',
                    definition: 'at once'
                }
            ]
        },
        {
            word: 'lìshǐ',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'history'
                }
            ]
        },
        {
            word: 'liǎ',
            definitions: [
                {
                    grammer: 'nu+m',
                    definition: '= liǎng ge, two'
                }
            ]
        },
        {
            word: 'lián',//(yě/dōu)
            definitions: [
                {
                    grammer: 'cv',
                    definition: 'even'
                },
                {
                    grammer: 'v',
                    definition: 'join, connect'
                }
            ]
        },
        {
            word: 'liánxì',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'contact, connection'
                },
                {
                    grammer: 'v',
                    definition: 'get in contact with, link, integrate'
                }
            ]
        },
        {
            word: 'liǎn',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'face'
                }
            ]
        },
        {
            word: 'liàn',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'practice, train (in)'
                }
            ]
        },
        {
            word: 'liànxí',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'practice, drill'
                },
                {
                    grammer: 'n',
                    definition: 'practice, exercise'
                }
            ]
        },
        {
            word: 'liángkuai',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'pleasantly cool'
                }
            ]
        },
        {
            word: 'liángshuǎng',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'cool and refreshing'
                }
            ]
        },
        {
            word: 'liǎng',
            definitions: [
                {
                    grammer: 'nu',
                    definition: 'two (used with measures)'
                },
                {
                    grammer: 'm',
                    definition: 'ounce (50gr)'
                }
            ]
        },
        {
            word: 'liàng',
            definitions: [
                {
                    grammer: 'm',
                    definition: 'for vehicles'
                }
            ]
        },
        {
            word: 'liǎojiě',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'understand'
                }
            ]
        },
        {
            word: 'lièchē',
            definitions: [
                {
                    grammer: 'train (railway term)',
                    definition: ''
                }
            ]
        },
        {
            word: 'lín',
            definitions: [
                {
                    grammer: 'bf',
                    definition: 'forest, wood'
                }
            ]
        },
        {
            word: 'línjū',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'neighbor'
                }
            ]
        },
        {
            word: 'líng',
            definitions: [
                {
                    grammer: 'nu',
                    definition: 'zero'
                },
                {
                    grammer: 'n',
                    definition: 'small bell'
                }
            ]
        },
        {
            word: 'língqián',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'change, odd coins'
                }
            ]
        },
        {
            word: 'língxià',
            definitions: [
                {
                    grammer: 'pw',
                    definition: 'below zero'
                }
            ]
        },
        {
            word: 'lìngwài',
            definitions: [
                {
                    grammer: 'a',
                    definition: 'besides, separately'
                },
                {
                    grammer: 'at',
                    definition: 'another'
                }
            ]
        },
        {
            word: 'liú',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'remain'
                }
            ]
        },
        {
            word: 'liúxué',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'study abroad'
                }
            ]
        },
        {
            word: 'liúlì',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'fluent'
                }
            ]
        },
        {
            word: 'liù',
            definitions: [
                {
                    grammer: 'nu',
                    definition: 'six'
                }
            ]
        },
        {
            word: 'lóng fēi fēng wǔ',
            definitions: [
                {
                    grammer: 'set ph',
                    definition: `'dragon flies, phoenix dances': flamboyant`
                }
            ]
        },
        {
            word: 'lóu',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'storied building'
                },
                {
                    grammer: 'm',
                    definition: 'floor'
                }
            ]
        },
        {
            word: 'lù',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'road, path, way'
                },
                {
                    grammer: 'v',
                    definition: 'record'
                }
            ]
        },
        {
            word: 'lùkǒu',//(r)
            definitions: [
                {
                    grammer: 'n/pw',
                    definition: 'intersection'
                }
            ]
        },
        {
            word: 'lù yīn',
            definitions: [
                {
                    grammer: 'v-o',
                    definition: 'record sound'
                }
            ]
        },
        {
            word: 'lúndūn',
            definitions: [
                {
                    grammer: 'pw',
                    definition: 'london'
                }
            ]
        },
        {
            word: 'luó mǎ dàchē',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'mule and horse carts'
                }
            ]
        },
        {
            word: 'mā',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'mum, mother (familiar)'
                }
            ]
        },
        {
            word: 'máfan',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'trouble, bother'
                },
                {
                    grammer: 'sv',
                    definition: 'troublesome, annoying'
                },
                {
                    grammer: 'v',
                    definition: 'put someone to trouble'
                }
            ]
        },
        {
            word: 'mǎshàng',
            definitions: [
                {
                    grammer: 'a',
                    definition: 'at once'
                }
            ]
        },
        {
            word: 'ma',
            definitions: [
                {
                    grammer: 'p',
                    definition: 'question particle'
                }
            ]
        },
        {
            word: 'mǎi',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'buy'
                }
            ]
        },
        {
            word: 'mài',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'sell'
                }
            ]
        },
        {
            word: 'màn',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'slow'
                }
            ]
        },
        {
            word: 'máng',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'busy'
                }
            ]
        },
        {
            word: 'máo',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'fur, hair (of the body)'
                },
                {
                    grammer: 'm',
                    definition: '1/10 of yuan'
                }
            ]
        },
        {
            word: 'máobǐ',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'writing brush'
                }
            ]
        },
        {
            word: 'máobìng',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'fault, defect'
                }
            ]
        },
        {
            word: 'máomáoyǔ',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'drizzle'
                }
            ]
        },
        {
            word: 'máoyī',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'sweater, wooly'
                }
            ]
        },
        {
            word: 'méi',//(you)
            definitions: [
                {
                    grammer: 'a',
                    definition: 'negator for yǒu (have)'
                }
            ]
        },
        {
            word: 'méi fázi',
            definitions: [
                {
                    grammer: 'ie',
                    definition: `have no way of, can't be helped`
                }
            ]
        },
        {
            word: 'méi gaūnxi',
            definitions: [
                {
                    grammer: 'ie',
                    definition: `it doesn't matter, never mind`
                }
            ]
        },
        {
            word: 'méi xiǎngdào',
            definitions: [
                {
                    grammer: 'ie',
                    definition: 'unexpectedly'
                }
            ]
        },
        {
            word: 'měi',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'beautiful'
                },
                {
                    grammer: 'sp',
                    definition: 'each, every'
                }
            ]
        },
        {
            word: 'měiguó',
            definitions: [
                {
                    grammer: 'pw',
                    definition: 'america (usa)'
                }
            ]
        },
        {
            word: 'měigé',
            definitions: [
                {
                    grammer: 'cv',
                    definition: 'at intervals of; every (so often)'
                }
            ]
        },
        {
            word: 'mèimei',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'younger sister'
                }
            ]
        },
        {
            word: 'mēnrè',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'sultry'
                }
            ]
        },
        {
            word: 'mén',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'door, gate'
                }
            ]
        },
        {
            word: 'ménkǒur',
            definitions: [
                {
                    grammer: 'pw',
                    definition: 'entrance, doorway'
                }
            ]
        },
        {
            word: 'ménwàihàn',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'laymen'
                }
            ]
        },
        {
            word: 'mǐfàn',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'cooked rice'
                }
            ]
        },
        {
            word: 'miàn',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'face, side'
                },
                {
                    grammer: 'm',
                    definition: 'for walls'
                },
                {
                    grammer: 'n',
                    definition: 'noodles'
                }
            ]
        },
        {
            word: 'miànqián',
            definitions: [
                {
                    grammer: 'pw',
                    definition: 'in front of, in face of'
                }
            ]
        },
        {
            word: 'míngbai',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'clear, obvious'
                }
            ]
        },
        {
            word: 'míngjìng',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'bright and clean'
                }
            ]
        },
        {
            word: 'míngtiān',
            definitions: [
                {
                    grammer: 'tw',
                    definition: 'tomorrow'
                }
            ]
        },
        {
            word: 'míngzi',
            definitions: [
                {
                    grammer: 'n',
                    definition: '(full) name, given name'
                }
            ]
        },
        {
            word: 'mǔqin',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'mother'
                }
            ]
        },
        {
            word: 'mù',
            definitions: [
                {
                    grammer: 'bf',
                    definition: 'tree, wood'
                }
            ]
        },
        {
            word: 'mùtou',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'wood (the material)'
                }
            ]
        },
        {
            word: 'ná',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'take in the hand, hold'
                }
            ]
        },
        {
            word: 'náqilai',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'pick up'
                }
            ]
        },
        {
            word: 'náshǒu',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'expert in, good at'
                }
            ]
        },
        {
            word: 'náshǒucài',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'speciality (dishes)'
                }
            ]
        },
        {
            word: 'nǎ',
            definitions: [
                {
                    grammer: 'qw',
                    definition: 'which'
                }
            ]
        },
        {
            word: 'něi',
            definitions: [
                {
                    grammer: 'qw',
                    definition: 'which'
                }
            ]
        },
        {
            word: 'nǎli',
            definitions: [
                {
                    grammer: 'ie',
                    definition: 'not at all'
                }
            ]
        },
        {
            word: 'nǎr',
            definitions: [
                {
                    grammer: 'qw',
                    definition: 'where'
                }
            ]
        },
        {
            word: 'nà',
            definitions: [
                {
                    grammer: 'sp',
                    definition: 'that'
                },
                {
                    grammer: 'c',
                    definition: 'then in that case(=name)'
                }
            ]
        },
        {
            word: 'nàme',
            definitions: [
                {
                    grammer: 'a',
                    definition: 'so (that-wise)'
                },
                {
                    grammer: 'ie',
                    definition: 'in that case'
                }
            ]
        },
        {
            word: 'nème',
            definitions: [
                {
                    grammer: 'a',
                    definition: 'so (that-wise)'
                },
                {
                    grammer: 'ie',
                    definition: 'in that case'
                },
                {
                    grammer: 'n',
                    definition: 'name'
                }
            ]
        },
        {
            word: 'nǎiyóu',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'cream'
                }
            ]
        },
        {
            word: 'nǎiyóu càihuā',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'creamed cauliflower'
                }
            ]
        },
        {
            word: 'nàr',
            definitions: [
                {
                    grammer: 'l/pw',
                    definition: 'there'
                }
            ]
        },
        {
            word: 'nèr',
            definitions: [
                {
                    grammer: 'l/pw',
                    definition: 'there'
                }
            ]
        },
        {
            word: 'nán',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'difficult'
                },
                {
                    grammer: 'l',
                    definition: 'south'
                },
                {
                    grammer: 'at',
                    definition: 'male'
                }
            ]
        },
        {
            word: 'nán dé',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'hard to get, rare'
                }
            ]
        },
        {
            word: 'nán wàng',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'memorable'
                }
            ]
        },
        {
            word: 'nánbù',
            definitions: [
                {
                    grammer: 'pw',
                    definition: 'southern part, the south'
                }
            ]
        },
        {
            word: 'nánfāng',
            definitions: [
                {
                    grammer: 'pw',
                    definition: 'the south'
                }
            ]
        },
        {
            word: 'nǎozi',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'brain'
                }
            ]
        },
        {
            word: 'ne',
            definitions: [
                {
                    grammer: 'p',
                    definition: 'question particle, for continued state'
                }
            ]
        },
        {
            word: 'něibiān',//(r)
            definitions: [
                {
                    grammer: 'qw',
                    definition: 'where (which side)'
                },
                {
                    grammer: 'pw',
                    definition: 'there (that side)'
                }
            ]
        },
        {
            word: 'nèn',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'tender, soft'
                }
            ]
        },
        {
            word: 'néng',
            definitions: [
                {
                    grammer: 'mv',
                    definition: 'can, be capable of'
                }
            ]
        },
        {
            word: 'nénggàn',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'capable, competent'
                }
            ]
        },
        {
            word: 'nèr',
            definitions: [
                {
                    grammer: 'l/pw',
                    definition: 'there'
                }
            ]
        },
        {
            word: 'nǐ',
            definitions: [
                {
                    grammer: 'pn',
                    definition: 'you'
                }
            ]
        },
        {
            word: 'nǐ hǎo',
            definitions: [
                {
                    grammer: 'ie',
                    definition: 'how do you do? how are you?'
                }
            ]
        },
        {
            word: 'nǐmen',
            definitions: [
                {
                    grammer: 'pn',
                    definition: 'you (plural)'
                }
            ]
        },
        {
            word: 'nián',
            definitions: [
                {
                    grammer: 'm',
                    definition: 'year'
                }
            ]
        },
        {
            word: 'niánqīng rén',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'young person'
                }
            ]
        },
        {
            word: 'niàn',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'read (aloud), study'
                }
            ]
        },
        {
            word: 'niàn shū',
            definitions: [
                {
                    grammer: 'v-o',
                    definition: 'study'
                }
            ]
        },
        {
            word: 'niànwán',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'finish studying'
                }
            ]
        },
        {
            word: 'nín',
            definitions: [
                {
                    grammer: 'pn',
                    definition: 'you (polite form)'
                }
            ]
        },
        {
            word: 'niú',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'cattle, cow'
                }
            ]
        },
        {
            word: 'niúnǎi',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'milk'
                }
            ]
        },
        {
            word: 'niúròu',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'beef'
                }
            ]
        },
        {
            word: 'nóng',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'agriculture'
                }
            ]
        },
        {
            word: 'nóngzuòwù',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'farm crops'
                }
            ]
        },
        {
            word: 'nǚ',
            definitions: [
                {
                    grammer: 'at',
                    definition: 'female'
                }
            ]
        },
        {
            word: 'nǚ de',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'female'
                }
            ]
        },
        {
            word: `nǚ'ér`,
            definitions: [
                {
                    grammer: 'n',
                    definition: 'daughter'
                }
            ]
        },
        {
            word: 'ō',
            definitions: [
                {
                    grammer: 'i',
                    definition: 'oh (i see)'
                }
            ]
        },
        {
            word: 'ò',
            definitions: [
                {
                    grammer: 'i',
                    definition: 'oh (i see)'
                }
            ]
        },
        {
            word: 'pà',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'fear, dread, be afraid'
                }
            ]
        },
        {
            word: 'pái',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'form a row'
                },
                {
                    grammer: 'm',
                    definition: 'row of'
                }
            ]
        },
        {
            word: 'pái duì',
            definitions: [
                {
                    grammer: 'v-o',
                    definition: 'line up, queue up'
                }
            ]
        },
        {
            word: 'pánzi',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'plate, tray'
                }
            ]
        },
        {
            word: 'pángbiān',//(r)
            definitions: [
                {
                    grammer: 'l/pw',
                    definition: '(by) the side of'
                }
            ]
        },
        {
            word: 'pàng',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'fat (of person)'
                }
            ]
        },
        {
            word: 'pàngzi',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'fat person'
                }
            ]
        },
        {
            word: 'pǎo',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'run, hurry to'
                }
            ]
        },
        {
            word: 'péngyou',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'friend'
                }
            ]
        },
        {
            word: 'pèngjiàn',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'run into, meet'
                }
            ]
        },
        {
            word: 'piányi',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'cheap'
                }
            ]
        },
        {
            word: 'piàn',
            definitions: [
                {
                    grammer: 'm',
                    definition: 'stretch of, expanse of'
                }
            ]
        },
        {
            word: 'piào',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'ticket, coupon'
                }
            ]
        },
        {
            word: 'piàoliang',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'pretty, handsome'
                }
            ]
        },
        {
            word: 'pīnpán',//(r)
            definitions: [
                {
                    grammer: 'v',
                    definition: 'cold platter'
                }
            ]
        },
        {
            word: 'pīnqǐlai',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'put together'
                }
            ]
        },
        {
            word: 'píng',
            definitions: [
                {
                    grammer: 'm',
                    definition: 'bottle of, vase of'
                }
            ]
        },
        {
            word: 'píngcháng',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'ordinary, common'
                },
                {
                    grammer: 'a',
                    definition: 'usually'
                }
            ]
        },
        {
            word: 'píngguǒ',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'apple'
                }
            ]
        },
        {
            word: 'pǔtōng',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'common, ordinary'
                }
            ]
        },
        {
            word: 'pǔtōnghuà',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'common language, Mandarin'
                }
            ]
        },
        {
            word: 'qī',
            definitions: [
                {
                    grammer: 'nu',
                    definition: 'seven'
                }
            ]
        },
        {
            word: 'qí',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'ride'
                }
            ]
        },
        {
            word: 'qíguài',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'strange, odd'
                }
            ]
        },
        {
            word: 'qǐlai',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'get up'
                },
                {
                    grammer: 'v complement',
                    definition: 'begin, come to'
                }
            ]
        },
        {
            word: 'qìchē',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'motor car'
                }
            ]
        },
        {
            word: 'qìxiàng',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'meteorology'
                }
            ]
        },
        {
            word: 'qìxiàngyuán',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'weatherman'
                }
            ]
        },
        {
            word: 'qiān',
            definitions: [
                {
                    grammer: 'nu',
                    definition: 'thousand'
                }
            ]
        },
        {
            word: 'qián',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'money'
                },
                {
                    grammer: 'l/pw',
                    definition: 'before, ago, in front of'
                }
            ]
        },
        {
            word: 'qiánbāo',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'purse, wallet'
                }
            ]
        },
        {
            word: 'qiánnián',
            definitions: [
                {
                    grammer: 'tw',
                    definition: 'year before last'
                }
            ]
        },
        {
            word: 'qiántiān',
            definitions: [
                {
                    grammer: 'tw',
                    definition: 'day before yesterday'
                }
            ]
        },
        {
            word: 'qiántou',
            definitions: [
                {
                    grammer: 'l/pw',
                    definition: 'in front'
                }
            ]
        },
        {
            word: 'qiāng',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'spear, gun'
                }
            ]
        },
        {
            word: 'qiáng',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'wall'
                }
            ]
        },
        {
            word: 'qiáo',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'bridge'
                }
            ]
        },
        {
            word: 'qīng',
            definitions: [
                {
                    grammer: 'bf',
                    definition: 'blue or green'
                },
                {
                    grammer: 'sv',
                    definition: 'clear (water clear)'
                }
            ]
        },
        {
            word: 'qīngcài',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'green vegetables'
                }
            ]
        },
        {
            word: 'qīngshān lǜshuǐ',
            definitions: [
                {
                    grammer: 'set ph',
                    definition: 'verdant hills and green waters'
                }
            ]
        },
        {
            word: 'qīngchu',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'clear (understand)'
                }
            ]
        },
        {
            word: 'qīngzǎo',
            definitions: [
                {
                    grammer: 'tw',
                    definition: 'early morning'
                }
            ]
        },
        {
            word: 'qíngxing',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'situation, state of affairs'
                }
            ]
        },
        {
            word: 'qǐng',
            definitions: [
                {
                    grammer: 'ie',
                    definition: '(will you) please, please (go ahead)'
                },
                {
                    grammer: 'v',
                    definition: 'invite'
                }
            ]
        },
        {
            word: 'qǐng jìn',
            definitions: [
                {
                    grammer: 'ie',
                    definition: 'please enter'
                }
            ]
        },
        {
            word: 'qǐng kè',
            definitions: [
                {
                    grammer: 'v-o',
                    definition: 'invite guest; stand treat'
                }
            ]
        },
        {
            word: 'qǐng wèn',
            definitions: [
                {
                    grammer: 'ie',
                    definition: 'excuse me (followed by a question)'
                }
            ]
        },
        {
            word: 'qǐng zuò',
            definitions: [
                {
                    grammer: 'ie',
                    definition: 'please sit down'
                }
            ]
        },
        {
            word: 'qiū',
            definitions: [
                {
                    grammer: 'bf',
                    definition: 'autumn'
                }
            ]
        },
        {
            word: 'qiūfēng',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'autumn wind'
                }
            ]
        },
        {
            word: 'qiūgāo qìshuǎng',
            definitions: [
                {
                    grammer: 'set ph',
                    definition: 'autumn (sky) high and air bracing'
                }
            ]
        },
        {
            word: 'qù',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'go, go to'
                }
            ]
        },
        {
            word: 'qùnián',
            definitions: [
                {
                    grammer: 'tw',
                    definition: 'last year'
                }
            ]
        },
        {
            word: 'quán',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'complete, entire, whole'
                },
                {
                    grammer: 'a',
                    definition: 'entirely, completely'
                }
            ]
        },
        {
            word: 'ràng',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'yield, let, allow'
                },
                {
                    grammer: 'cv',
                    definition: 'by (in passive construction)'
                }
            ]
        },
        {
            word: 'rè',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'hot'
                }
            ]
        },
        {
            word: 'rén',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'person, people'
                }
            ]
        },
        {
            word: 'rénmín',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'the people'
                }
            ]
        },
        {
            word: 'rénmínbì',
            definitions: [
                {
                    grammer: 'n',
                    definition: `people's currency`
                }
            ]
        },
        {
            word: 'rénmín rìbào',
            definitions: [
                {
                    grammer: 'pr',
                    definition: `people's daily`
                }
            ]
        },
        {
            word: 'rènshi',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'recongnize, know'
                }
            ]
        },
        {
            word: 'rìběn',
            definitions: [
                {
                    grammer: 'pw',
                    definition: 'japan'
                }
            ]
        },
        {
            word: 'rìcháng',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'everday, routine'
                }
            ]
        },
        {
            word: 'rìzi',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'day, date, special day'
                }
            ]
        },
        {
            word: 'róngyì',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'easy'
                }
            ]
        },
        {
            word: 'ruguǒ',
            definitions: [
                {
                    grammer: 'mv',
                    definition: 'if'
                }
            ]
        },
        {
            word: 'sān',
            definitions: [
                {
                    grammer: 'nu',
                    definition: 'three'
                }
            ]
        },
        {
            word: 'sāndiǎnshuǐ',
            definitions: [
                {
                    grammer: 'n',
                    definition: '"water" radical'
                }
            ]
        },
        {
            word: 'sānmíngzhì',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'sandwich'
                }
            ]
        },
        {
            word: 'shāfā',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'sofa, easy chair'
                }
            ]
        },
        {
            word: 'shān',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'mountain, hill'
                }
            ]
        },
        {
            word: 'shānshuǐhuàr',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'landscape (painting)'
                }
            ]
        },
        {
            word: 'shāngdiàn',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'shop, store'
                }
            ]
        },
        {
            word: 'shàng',
            definitions: [
                {
                    grammer: 'l',
                    definition: 'top, on top of, above'
                },
                {
                    grammer: 'v',
                    definition: 'ascend, mount, go to'
                }
            ]
        },
        {
            word: 'shàng cèsuǒ',
            definitions: [
                {
                    grammer: 'vo',
                    definition: 'go to lavatory'
                }
            ]
        },
        {
            word: 'shàng kè',
            definitions: [
                {
                    grammer: 'vo',
                    definition: 'attend class, give a lesson'
                }
            ]
        },
        {
            word: 'shàngwǔ',
            definitions: [
                {
                    grammer: 'tw',
                    definition: 'morning, AM'
                }
            ]
        },
        {
            word: 'shàng xīngqīwǔ',
            definitions: [
                {
                    grammer: 'tw',
                    definition: 'last friday'
                }
            ]
        },
        {
            word: 'shàng xué',
            definitions: [
                {
                    grammer: 'vo',
                    definition: 'attend school'
                }
            ]
        },
        {
            word: 'shàng yuè',
            definitions: [
                {
                    grammer: 'tw',
                    definition: 'last month'
                }
            ]
        },
        {
            word: 'shànghǎi',
            definitions: [
                {
                    grammer: 'pw',
                    definition: 'shanghai'
                }
            ]
        },
        {
            word: 'shāo',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'burnl cook, stew'
                }
            ]
        },
        {
            word: 'shǎo',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'few, little'
                }
            ]
        },
        {
            word: 'shèlì',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'set up, establish'
                }
            ]
        },
        {
            word: 'shèyuán',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'memeber of a association'
                }
            ]
        },
        {
            word: 'shéi',
            definitions: [
                {
                    grammer: 'qw',
                    definition: 'who(m)'
                }
            ]
        },
        {
            word: 'shuí',
            definitions: [
                {
                    grammer: 'qw',
                    definition: 'who(m)'
                }
            ]
        },
        {
            word: 'shēntǐ',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'body; health'
                }
            ]
        },
        {
            word: 'shénme',
            definitions: [
                {
                    grammer: 'qw',
                    definition: 'what'
                }
            ]
        },
        {
            word: 'shēng',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'give birth to, be born'
                }
            ]
        },
        {
            word: 'shēngchǎn',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'produce'
                },
                {
                    grammer: 'n',
                    definition: 'production'
                }
            ]
        },
        {
            word: 'shēngchǎnduì',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'production team'
                }
            ]
        },
        {
            word: 'shēnghuó',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'live'
                },
                {
                    grammer: 'n',
                    definition: 'life'
                }
            ]
        },
        {
            word: 'shēngrì',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'birthday'
                }
            ]
        },
        {
            word: 'shīfu',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'master craftsman'
                }
            ]
        },
        {
            word: 'shí',
            definitions: [
                {
                    grammer: 'nu',
                    definition: 'ten'
                },
                {
                    grammer: 'bf',
                    definition: 'time, hour'
                },
                {
                    grammer: 'bf',
                    definition: 'to eat; food'
                },
                {
                    grammer: 'bf',
                    definition: 'solid; true; real'
                }
            ]
        },
        {
            word: 'shíhou',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'time'
                }
            ]
        },
        {
            word: 'shíqī kǒng qiáo',
            definitions: [
                {
                    grammer: '',
                    definition: ''
                }
            ]
        },
        {
            word: 'shíqī kǒng qiáo',
            definitions: [
                {
                    grammer: 'pr',
                    definition: 'seventeen-arch bridge'
                }
            ]
        },
        {
            word: 'shíjiān',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'time'
                }
            ]
        },
        {
            word: 'shítáng',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'refectory, canteen'
                }
            ]
        },
        {
            word: 'shípǔ',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'cookery book, recipe'
                }
            ]
        },
        {
            word: 'shíjì',
            definitions: [
                {
                    grammer: 'sv/a',
                    definition: 'real(ly), actual(ly)'
                }
            ]
        },
        {
            word: 'shízài',
            definitions: [
                {
                    grammer: 'a',
                    definition: 'in reality, honestly'
                }
            ]
        },
        {
            word: 'shì',
            definitions: [
                {
                    grammer: 'cl v',
                    definition: 'to be; to be so'
                },
                {
                    grammer: 'n',
                    definition: 'matter'
                }
            ]
        },
        {
            word: 'shìjiè',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'world'
                }
            ]
        },
        {
            word: 'shìjiè wénmíng',
            definitions: [
                {
                    grammer: 'set ph',
                    definition: 'world-famous'
                }
            ]
        },
        {
            word: 'shìqing',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'matter'
                }
            ]
        },
        {
            word: 'shōuyīnjī',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'radio receiver'
                }
            ]
        },
        {
            word: 'shǒu',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'hand'
                }
            ]
        },
        {
            word: 'shǒutíbāo',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'bag, hold-all'
                }
            ]
        },
        {
            word: 'shǒuxù',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'procedures, formalities'
                }
            ]
        },
        {
            word: 'shòu',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'thin, slim'
                }
            ]
        },
        {
            word: 'shòu huānyíng',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'be popular'
                }
            ]
        },
        {
            word: 'shòuhuòyuán',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'shop assistant'
                }
            ]
        },
        {
            word: 'shū',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'book'
                }
            ]
        },
        {
            word: 'shūdiàn',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'bookshop'
                }
            ]
        },
        {
            word: 'shūjià',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'bookshelf'
                }
            ]
        },
        {
            word: 'shūshu',
            definitions: [
                {
                    grammer: 'n',
                    definition: `uncle (father's younget brother)`
                }
            ]
        },
        {
            word: 'shūfu',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'confortable'
                }
            ]
        },
        {
            word: 'shù',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'tree'
                }
            ]
        },
        {
            word: 'shùlínzi',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'wood, copse'
                }
            ]
        },
        {
            word: 'shùmù',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'trees'
                }
            ]
        },
        {
            word: 'shùxué',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'mathematics'
                }
            ]
        },
        {
            word: 'shuāngshēng',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'twins'
                }
            ]
        },
        {
            word: 'shuāngshēng xiōngdì',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'twin brothers'
                }
            ]
        },
        {
            word: 'shuāngshù',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'even number'
                }
            ]
        },
        {
            word: 'shuǐ',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'water'
                }
            ]
        },
        {
            word: 'shuǐguǒ',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'fruit'
                }
            ]
        },
        {
            word: 'shuǐlì',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'water conservancy'
                }
            ]
        },
        {
            word: 'shuǐpíng',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'level, standard'
                }
            ]
        },
        {
            word: 'shuì jiào',
            definitions: [
                {
                    grammer: 'v-o',
                    definition: 'sleep'
                }
            ]
        },
        {
            word: 'shuìbuzháo',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'unable to get to sleep'
                }
            ]
        },
        {
            word: 'shuō',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'speak; reprove, criticize'
                }
            ]
        },
        {
            word: 'shuōbudìng',
            definitions: [
                {
                    grammer: 'v',
                    definition: `can't say for sure; maybe`
                }
            ]
        },
        {
            word: 'shuō huà',
            definitions: [
                {
                    grammer: 'v-o',
                    definition: 'speak'
                }
            ]
        },
        {
            word: 'sīxiǎng',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'thought, thinking'
                }
            ]
        },
        {
            word: 'sì',
            definitions: [
                {
                    grammer: 'nu',
                    definition: 'four'
                }
            ]
        },
        {
            word: 'sòng',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'give (as present); send'
                }
            ]
        },
        {
            word: 'sūlián',
            definitions: [
                {
                    grammer: 'pw',
                    definition: 'soviet union'
                }
            ]
        },
        {
            word: 'sùcài',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'vegetable dish'
                }
            ]
        },
        {
            word: 'suān',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'sour'
                }
            ]
        },
        {
            word: 'suàn',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'calculate, reckon'
                }
            ]
        },
        {
            word: 'suàn rìzi',
            definitions: [
                {
                    grammer: 'vo',
                    definition: 'reckon up the days'
                }
            ]
        },
        {
            word: 'suīrán',
            definitions: [
                {
                    grammer: 'ma',
                    definition: 'although'
                }
            ]
        },
        {
            word: 'suì',
            definitions: [
                {
                    grammer: 'm',
                    definition: 'year of age'
                }
            ]
        },
        {
            word: 'sūnzi',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'grandson'
                }
            ]
        },
        {
            word: 'suǒ',//(r)
            definitions: [
                {
                    grammer: 'm',
                    definition: 'for houses and some buildings'
                },
                {
                    grammer: 'a',
                    definition: 'actually, "that which"'
                }
            ]
        },
        {
            word: 'suǒyǐ',
            definitions: [
                {
                    grammer: 'ma',
                    definition: 'therefore'
                }
            ]
        },
        {
            word: 'tā',
            definitions: [
                {
                    grammer: 'pn',
                    definition: 'he, she; hom, her'
                }
            ]
        },
        {
            word: 'tāmen',
            definitions: [
                {
                    grammer: 'pn',
                    definition: 'they; them'
                }
            ]
        },
        {
            word: 'tài',
            definitions: [
                {
                    grammer: 'a',
                    definition: 'too, excessively'
                }
            ]
        },
        {
            word: 'tàijíquán',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'shadow-boxing'
                }
            ]
        },
        {
            word: 'tàiyáng',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'sun'
                }
            ]
        },
        {
            word: 'tàitai',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'lady; wife; mrs'
                }
            ]
        },
        {
            word: 'tán',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'talk'
                }
            ]
        },
        {
            word: 'tándelái',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'able to talk to/get on with'
                }
            ]
        },
        {
            word: 'tán tiānr',
            definitions: [
                {
                    grammer: 'v-o',
                    definition: 'chat, natter'
                }
            ]
        },
        {
            word: 'tán qín',
            definitions: [
                {
                    grammer: 'vo',
                    definition: 'play, strum lute'
                }
            ]
        },
        {
            word: 'tāng',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'sugar, sweets'
                }
            ]
        },
        {
            word: 'tángcù',
            definitions: [
                {
                    grammer: 'at',
                    definition: 'sweet and sour'
                }
            ]
        },
        {
            word: 'tào',
            definitions: [
                {
                    grammer: 'm',
                    definition: 'set of, suit, suite'
                }
            ]
        },
        {
            word: 'tèbié',
            definitions: [
                {
                    grammer: 'sv/a',
                    definition: 'special(ly)'
                }
            ]
        },
        {
            word: 'tígāo',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'raise, improve'
                }
            ]
        },
        {
            word: 'tǐyàn',
            definitions: [
                {
                    grammer: 'v/n',
                    definition: 'experince for oneself'
                }
            ]
        },
        {
            word: 'tì',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'to stan in for'
                },
                {
                    grammer: 'cv',
                    definition: 'on behalf of, for'
                }
            ]
        },
        {
            word: 'tiān',
            definitions: [
                {
                    grammer: 'm',
                    definition: 'day'
                },
                {
                    grammer: 'n',
                    definition: 'sky, heaven'
                }
            ]
        },
        {
            word: 'tiānkōng',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'sky'
                }
            ]
        },
        {
            word: 'tiānliàng',
            definitions: [
                {
                    grammer: 's-predicate',
                    definition: 'daybreak'
                }
            ]
        },
        {
            word: 'tiānqi',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'weather'
                }
            ]
        },
        {
            word: 'tián',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'sweet'
                }
            ]
        },
        {
            word: 'tiáo',
            definitions: [
                {
                    grammer: 'm',
                    definition: 'for fish and various long narrow things'
                }
            ]
        },
        {
            word: 'tiē',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'stick (on)'
                }
            ]
        },
        {
            word: 'tiě',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'iron'
                }
            ]
        },
        {
            word: 'tiělù',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'railway'
                }
            ]
        },
        {
            word: 'tīng',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'listen'
                }
            ]
        },
        {
            word: 'tīngshuō',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'hear (it said) that'
                },
                {
                    grammer: 'n',
                    definition: 'hearsay'
                }
            ]
        },
        {
            word: 'tíng',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'stop, halt; park, berth'
                }
            ]
        },
        {
            word: 'tóng',
            definitions: [
                {
                    grammer: 'bf',
                    definition: 'same, alike'
                }
            ]
        },
        {
            word: 'tóngchē',
            definitions: [
                {
                    grammer: 'n',
                    definition: `'same car' fellow (of travellers)`
                }
            ]
        },
        {
            word: 'tóngxué',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'fellow student'
                }
            ]
        },
        {
            word: 'tóngzhi',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'comrade'
                }
            ]
        },
        {
            word: 'tōu',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'steal'
                }
            ]
        },
        {
            word: 'tóu',
            definitions: [
                {
                    grammer: 'n/l suffix',
                    definition: 'head'
                }
            ]
        },
        {
            word: 'tóufa',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'hair (on a human head)'
                }
            ]
        },
        {
            word: 'túshūguǎn',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'library'
                }
            ]
        },
        {
            word: 'tuōyùn',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'check through (baggage)'
                }
            ]
        },
        {
            word: 'wài',
            definitions: [
                {
                    grammer: 'l',
                    definition: 'outside'
                }
            ]
        },
        {
            word: 'wàiguó',
            definitions: [
                {
                    grammer: 'pw',
                    definition: 'foreign parts, abroad'
                }
            ]
        },
        {
            word: 'wàiyǔ',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'foreign language'
                }
            ]
        },
        {
            word: 'wánquán',
            definitions: [
                {
                    grammer: 'sv/a',
                    definition: 'complete(ly)'
                }
            ]
        },
        {
            word: 'wánr',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'to play, amuse oneself'
                }
            ]
        },
        {
            word: 'wǎn',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'late'
                },
                {
                    grammer: 'n/m',
                    definition: 'bowl (of)'
                }
            ]
        },
        {
            word: 'wǎnshang',
            definitions: [
                {
                    grammer: 'tw',
                    definition: 'evening'
                }
            ]
        },
        {
            word: 'wàn',
            definitions: [
                {
                    grammer: 'nu',
                    definition: 'ten thousand'
                }
            ]
        },
        {
            word: 'wànlǐ chángchéng',
            definitions: [
                {
                    grammer: 'pr',
                    definition: 'the great wall'
                }
            ]
        },
        {
            word: 'wáng',
            definitions: [
                {
                    grammer: 'pr',
                    definition: 'a common surname (n) king'
                }
            ]
        },
        {
            word: 'wàng',
            definitions: [
                {
                    grammer: 'cv',
                    definition: 'towards'
                },
                {
                    grammer: 'v',
                    definition: 'look (across) at'
                }
            ]
        },
        {
            word: 'wǎng',
            definitions: [
                {
                    grammer: 'cv',
                    definition: 'towards'
                }
            ]
        },
        {
            word: 'wàngle',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'forget'
                }
            ]
        },
        {
            word: 'wěidà',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'great, imposing'
                }
            ]
        },
        {
            word: 'wèi',
            definitions: [
                {
                    grammer: 'm',
                    definition: 'for persons (polite)'
                },
                {
                    grammer: 'cv',
                    definition: 'because of, for te sake of'
                },
                {
                    grammer: 'i',
                    definition: 'hello, hey!'
                }
            ]
        },
        {
            word: 'wèile',
            definitions: [
                {
                    grammer: 'cv',
                    definition: 'for (the sake of), in order to'
                }
            ]
        },
        {
            word: 'wèishenme',
            definitions: [
                {
                    grammer: 'ma',
                    definition: 'why (because of what)'
                }
            ]
        },
        {
            word: 'wéi',
            definitions: [
                {
                    grammer: 'i',
                    definition: 'hello, hey!'
                }
            ]
        },
        {
            word: 'wèishēng',
            definitions: [
                {
                    grammer: 'n/sv',
                    definition: 'hygiene, hygienic'
                }
            ]
        },
        {
            word: 'wèishēngzhǐ',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'toilet paper'
                }
            ]
        },
        {
            word: 'wén',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'writing, written word; language'
                }
            ]
        },
        {
            word: 'wénhuà',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'culture; standards of education'
                }
            ]
        },
        {
            word: 'wénmíng',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'renowned'
                }
            ]
        },
        {
            word: 'wèn',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'ask, inquire (a question)'
                }
            ]
        },
        {
            word: 'wèntí',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'question, problem'
                }
            ]
        },
        {
            word: 'wǒ',
            definitions: [
                {
                    grammer: 'pn',
                    definition: 'I; me'
                }
            ]
        },
        {
            word: 'wǒmen',
            definitions: [
                {
                    grammer: 'pn',
                    definition: 'we; uss'
                }
            ]
        },
        {
            word: 'wūzi',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'room'
                }
            ]
        },
        {
            word: 'wúyǐng wúzōng',
            definitions: [
                {
                    grammer: 'set ph',
                    definition: `'without shadow without trace'`
                }
            ]
        },
        {
            word: 'wǔ',
            definitions: [
                {
                    grammer: 'nu',
                    definition: 'five'
                }
            ]
        },
        {
            word: 'wǔfan',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'lunch'
                }
            ]
        },
        {
            word: 'wù',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'miss (train, bus, etc.)'
                }
            ]
        },
        {
            word: 'xī',
            definitions: [
                {
                    grammer: 'l',
                    definition: 'west'
                }
            ]
        },
        {
            word: 'xīcān',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'western food'
                }
            ]
        },
        {
            word: 'xīfú',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'western clothes, suit'
                }
            ]
        },
        {
            word: 'xīhuà',
            definitions: [
                {
                    grammer: 'v/sv',
                    definition: 'westernize(d)'
                }
            ]
        },
        {
            word: 'xīwàng',
            definitions: [
                {
                    grammer: 'v/n',
                    definition: 'hope'
                }
            ]
        },
        {
            word: 'xīyǐn',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'attract, draw'
                }
            ]
        },
        {
            word: 'xǐ',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'wash'
                }
            ]
        },
        {
            word: 'xǐhuan',
            definitions: [
                {
                    grammer: 'v/mv',
                    definition: 'like (to)'
                }
            ]
        },
        {
            word: 'xì',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'frama, play, show'
                }
            ]
        },
        {
            word: 'xià',
            definitions: [
                {
                    grammer: 'l',
                    definition: 'below; down; under'
                },
                {
                    grammer: 'v',
                    definition: 'descend; alight, get off'
                },
                {
                    grammer: 'm',
                    definition: `verbal measure: a 'go'`
                },
                {
                    grammer: 'at',
                    definition: `next`
                }
            ]
        },
        {
            word: 'xià bān',
            definitions: [
                {
                    grammer: 'vo',
                    definition: 'come off duty'
                }
            ]
        },
        {
            word: 'xià guǎnzi',
            definitions: [
                {
                    grammer: 'vo',
                    definition: 'go to a restaurant'
                }
            ]
        },
        {
            word: 'xiàwǔ',
            definitions: [
                {
                    grammer: 'tw',
                    definition: 'afternoon, PM'
                }
            ]
        },
        {
            word: 'xià xuě',
            definitions: [
                {
                    grammer: 'v-o',
                    definition: 'to snow'
                }
            ]
        },
        {
            word: 'xià yǔ',
            definitions: [
                {
                    grammer: 'v-o',
                    definition: 'to rain'
                }
            ]
        },
        {
            word: 'xiān',
            definitions: [
                {
                    grammer: 'a',
                    definition: 'first, before, in advance'
                }
            ]
        },
        {
            word: 'xiānsheng',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'gentleman; husband; mr'
                }
            ]
        },
        {
            word: 'xián',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'salty, savoury'
                }
            ]
        },
        {
            word: 'xiàn',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'line, wire, thread'
                }
            ]
        },
        {
            word: 'xiànzài',
            definitions: [
                {
                    grammer: 'tw',
                    definition: 'now'
                }
            ]
        },
        {
            word: 'xiāng',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'fragrant'
                }
            ]
        },
        {
            word: 'xiānggǎng',
            definitions: [
                {
                    grammer: 'pw',
                    definition: 'hong kong'
                }
            ]
        },
        {
            word: 'xiāngdāng',
            definitions: [
                {
                    grammer: 'a',
                    definition: 'quite, pretty'
                }
            ]
        },
        {
            word: 'xiāngxia',
            definitions: [
                {
                    grammer: 'pw',
                    definition: 'countryside'
                }
            ]
        },
        {
            word: 'xiāngzi',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'suitcase, trunk, box'
                }
            ]
        },
        {
            word: 'xiǎng',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'think'
                },
                {
                    grammer: 'v',
                    definition: 'sound'
                },
                {
                    grammer: 'sv',
                    definition: 'loud'
                },
                {
                    grammer: 'mv',
                    definition: 'want to, plan to, fell like'
                }
            ]
        },
        {
            word: 'xiǎngyào',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'desire'
                }
            ]
        },
        {
            word: 'xiàng',
            definitions: [
                {
                    grammer: 'cv',
                    definition: 'towards'
                },
                {
                    grammer: 'v',
                    definition: 'to resemble'
                },
                {
                    grammer: 'sv',
                    definition: 'alike'
                }
            ]
        },
        {
            word: 'xiǎo',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'small, young'
                }
            ]
        },
        {
            word: 'xiǎoháir',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'child'
                }
            ]
        },
        {
            word: 'xiǎojie',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'young lady, miss'
                }
            ]
        },
        {
            word: 'xiǎoshí',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'hour'
                }
            ]
        },
        {
            word: 'xiǎoshuō',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'fiction, novel'
                }
            ]
        },
        {
            word: 'xiǎoxué',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'junior school'
                }
            ]
        },
        {
            word: 'xiē',
            definitions: [
                {
                    grammer: 'nu',
                    definition: 'some, several'
                }
            ]
        },
        {
            word: 'xiě',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'write'
                }
            ]
        },
        {
            word: 'xiěchéng',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'compile (fashion through writing)'
                }
            ]
        },
        {
            word: 'xièxie',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'thank'
                },
                {
                    grammer: 'ie',
                    definition: 'thank you'
                }
            ]
        },
        {
            word: 'xīn',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'new'
                },
                {
                    grammer: 'n',
                    definition: 'heart, mind'
                }
            ]
        },
        {
            word: 'xīnqí',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'novel'
                }
            ]
        },
        {
            word: 'xīnshǒu',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'new hand, novice'
                }
            ]
        },
        {
            word: 'xīnwén',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'news'
                }
            ]
        },
        {
            word: 'xīndé',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'knowledge gained'
                }
            ]
        },
        {
            word: 'xìn',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'letter'
                },
                {
                    grammer: 'v',
                    definition: 'believe'
                }
            ]
        },
        {
            word: 'xìnfēng',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'envelope'
                }
            ]
        },
        {
            word: 'xīngqī',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'week'
                },
                {
                    grammer: 'tw',
                    definition: 'sunday'
                }
            ]
        },
        {
            word: 'xīngqī liù',
            definitions: [
                {
                    grammer: 'tw',
                    definition: 'saturday'
                }
            ]
        },
        {
            word: 'xīngqī rì',
            definitions: [
                {
                    grammer: 'tw',
                    definition: 'sunday'
                }
            ]
        },
        {
            word: 'xīngqī tiān',
            definitions: [
                {
                    grammer: 'tw',
                    definition: 'sunday'
                }
            ]
        },
        {
            word: 'xīngqī yī',
            definitions: [
                {
                    grammer: 'tw',
                    definition: 'monday'
                }
            ]
        },
        {
            word: 'xīngfèn',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'excited'
                }
            ]
        },
        {
            word: 'xíng',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'pass muster, be ok'
                }
            ]
        },
        {
            word: 'xíngli',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'luggage'
                }
            ]
        },
        {
            word: 'xíng yǐng bù lí',
            definitions: [
                {
                    grammer: 'set ph',
                    definition: 'inseparable'
                }
            ]
        },
        {
            word: 'xǐng',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'awake'
                }
            ]
        },
        {
            word: 'xìng',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'surname'
                },
                {
                    grammer: 'cl v',
                    definition: 'be surnamed'
                }
            ]
        },
        {
            word: 'xìngqing',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'nature, temperament'
                }
            ]
        },
        {
            word: 'xìngqù',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'interest'
                }
            ]
        },
        {
            word: 'xìngzi',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'temper'
                }
            ]
        },
        {
            word: 'xiōngdì',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'brothers; younger brother'
                }
            ]
        },
        {
            word: 'xiūxi',
            definitions: [
                {
                    grammer: 'v/n',
                    definition: 'rest, (take a) break'
                }
            ]
        },
        {
            word: 'xué',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'study, learn'
                }
            ]
        },
        {
            word: 'xuésheng',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'student, pupil'
                }
            ]
        },
        {
            word: 'xuéxí',
            definitions: [
                {
                    grammer: 'v/n',
                    definition: 'study'
                }
            ]
        },
        {
            word: 'xuéxiào',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'school, college'
                }
            ]
        },
        {
            word: 'xuéyuàn',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'college'
                }
            ]
        },
        {
            word: 'xuě',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'snow'
                }
            ]
        },
        {
            word: 'xúnzhǎo',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'seek, look for'
                }
            ]
        },
        {
            word: 'yān',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'smoke, cigarette'
                }
            ]
        },
        {
            word: 'yānhūhgāng',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'ashtray'
                }
            ]
        },
        {
            word: 'yán',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'salt'
                }
            ]
        },
        {
            word: 'yánjiū',
            definitions: [
                {
                    grammer: 'v/n',
                    definition: 'research, study'
                }
            ]
        },
        {
            word: 'yánsè',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'color'
                }
            ]
        },
        {
            word: 'yǎn',
            definitions: [
                {
                    grammer: 'bf',
                    definition: 'eye'
                }
            ]
        },
        {
            word: 'yǎnjing',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'eye'
                }
            ]
        },
        {
            word: 'yǎnjìngr',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'spectacles'
                }
            ]
        },
        {
            word: 'yǎnqián',
            definitions: [
                {
                    grammer: 'pw',
                    definition: 'before the eyes'
                }
            ]
        },
        {
            word: 'yào',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'want; ask for'
                },
                {
                    grammer: 'mv',
                    definition: 'want to; be about to, will'
                }
            ]
        },
        {
            word: 'yàoburán',
            definitions: [
                {
                    grammer: 'c',
                    definition: 'otherwise'
                }
            ]
        },
        {
            word: 'yàojǐn',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'important, urgent'
                }
            ]
        },
        {
            word: 'yàoshi',
            definitions: [
                {
                    grammer: 'ma',
                    definition: 'if'
                }
            ]
        },
        {
            word: 'yě',
            definitions: [
                {
                    grammer: 'a',
                    definition: 'also, too, either, as well'
                }
            ]
        },
        {
            word: 'yěxǔ',
            definitions: [
                {
                    grammer: 'ma',
                    definition: 'perhaps'
                }
            ]
        },
        {
            word: 'yè',
            definitions: [
                {
                    grammer: 'n/m',
                    definition: 'night'
                }
            ]
        },
        {
            word: 'yī',
            definitions: [
                {
                    grammer: 'nu',
                    definition: 'one'
                }
            ]
        },
        {
            word: 'yí',
            definitions: [
                {
                    grammer: 'nu',
                    definition: 'one'
                }
            ]
        },
        {
            word: 'yì',
            definitions: [
                {
                    grammer: 'nu',
                    definition: 'one'
                }
            ]
        },
        {
            word: 'yídìng',
            definitions: [
                {
                    grammer: 'a',
                    definition: 'defninitely, certainly'
                }
            ]
        },
        {
            word: 'yígòng',
            definitions: [
                {
                    grammer: 'ma',
                    definition: 'together'
                }
            ]
        },
        {
            word: 'yíkuàir',
            definitions: [
                {
                    grammer: 'a',
                    definition: 'together'
                }
            ]
        },
        {
            word: 'yíqiè',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'everything; all'
                }
            ]
        },
        {
            word: 'yíwàng wújì',
            definitions: [
                {
                    grammer: 'set ph',
                    definition: `'look afar no bound', limitless`
                }
            ]
        },
        {
            word: 'yíyàng',
            definitions: [
                {
                    grammer: 'sv/a',
                    definition: 'the same, equal(ly)'
                }
            ]
        },
        {
            word: 'yíyuè',
            definitions: [
                {
                    grammer: 'tw',
                    definition: 'january'
                }
            ]
        },
        {
            word: 'yìbān',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'general, ordinary'
                },
                {
                    grammer: 'a',
                    definition: 'generally, equally'
                }
            ]
        },
        {
            word: 'yìdiǎn',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'a little, some'
                }
            ]
        },
        {
            word: 'yìhuǐr',
            definitions: [
                {
                    grammer: 'tw',
                    definition: 'a short while'
                }
            ]
        },
        {
            word: 'yíhuìr',
            definitions: [
                {
                    grammer: 'tw',
                    definition: 'a short while'
                }
            ]
        },
        {
            word: 'yìqǐ',
            definitions: [
                {
                    grammer: 'a/pw',
                    definition: 'together'
                }
            ]
        },
        {
            word: 'yì shēn hàn',
            definitions: [
                {
                    grammer: 'nu-m-n',
                    definition: 'sweating all over'
                }
            ]
        },
        {
            word: 'yìzhí',
            definitions: [
                {
                    grammer: 'a',
                    definition: 'straight through, all along'
                }
            ]
        },
        {
            word: 'yīfu',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'clothing, clothes'
                }
            ]
        },
        {
            word: 'yīyuàn',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'hospital'
                }
            ]
        },
        {
            word: 'yíhéyuán',
            definitions: [
                {
                    grammer: '',
                    definition: ''
                }
            ]
        },
        {
            word: 'yǐhòu',
            definitions: [
                {
                    grammer: 'tw',
                    definition: 'after; afterwards; later; from now on'
                }
            ]
        },
        {
            word: 'yǐjing',
            definitions: [
                {
                    grammer: 'a',
                    definition: 'already'
                }
            ]
        },
        {
            word: 'yǐqián',
            definitions: [
                {
                    grammer: 'tw',
                    definition: 'before; previously'
                }
            ]
        },
        {
            word: 'yǐwéi',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'think that, assume'
                }
            ]
        },
        {
            word: 'yǐzi',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'chair'
                }
            ]
        },
        {
            word: 'yì',
            definitions: [
                {
                    grammer: 'nu',
                    definition: 'hundred million'
                }
            ]
        },
        {
            word: 'yìsi',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'meaning; idea'
                }
            ]
        },
        {
            word: 'yìshù',
            definitions: [
                {
                    grammer: 'n/sv',
                    definition: 'art(istic)'
                }
            ]
        },
        {
            word: 'yìwàide',
            definitions: [
                {
                    grammer: 'a',
                    definition: 'in a unforeseen manner'
                }
            ]
        },
        {
            word: 'yīnwei',
            definitions: [
                {
                    grammer: 'ma',
                    definition: 'because'
                }
            ]
        },
        {
            word: 'yīnyuè',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'music'
                }
            ]
        },
        {
            word: 'yīnggāi',
            definitions: [
                {
                    grammer: 'mv',
                    definition: 'should, ought to'
                }
            ]
        },
        {
            word: 'yīngguó',
            definitions: [
                {
                    grammer: 'pw',
                    definition: 'england, uk'
                }
            ]
        },
        {
            word: 'yīngwén',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'english language'
                }
            ]
        },
        {
            word: 'yòng',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'use'
                },
                {
                    grammer: 'cv',
                    definition: 'using, by means of, with'
                }
            ]
        },
        {
            word: 'yònggōng',
            definitions: [
                {
                    grammer: 'sv',
                    definition: `diligent (in ones's studies)`
                }
            ]
        },
        {
            word: 'yǒu',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'have; exist; there is/are'
                }
            ]
        },
        {
            word: 'yǒu dàolǐ',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'reasonable, justified'
                }
            ]
        },
        {
            word: 'yǒude',
            definitions: [
                {
                    grammer: 'at',
                    definition: 'some'
                }
            ]
        },
        {
            word: 'yǒu guān',
            definitions: [
                {
                    grammer: 'relevant, (the one) concerned',
                    definition: ''
                }
            ]
        },
        {
            word: 'yǒu lí',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'forceful'
                }
            ]
        },
        {
            word: 'yǒu míng',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'famous'
                }
            ]
        },
        {
            word: 'yǒu tiáo yǒu lǐ',
            definitions: [
                {
                    grammer: 'sv/a',
                    definition: 'methodical(ly)'
                }
            ]
        },
        {
            word: 'yǒu diǎn',
            definitions: [
                {
                    grammer: 'a',
                    definition: 'somewhat'
                }
            ]
        },
        {
            word: 'yǒu yìsi',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'interesting'
                }
            ]
        },
        {
            word: 'yǒu yòng',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'useful'
                }
            ]
        },
        {
            word: 'yòu',
            definitions: [
                {
                    grammer: 'l',
                    definition: 'right, to/on the right'
                },
                {
                    grammer: 'a',
                    definition: 'again, then again (do something) further'
                }
            ]
        },
        {
            word: 'yú',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'fish'
                }
            ]
        },
        {
            word: 'yǔ',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'rain'
                }
            ]
        },
        {
            word: 'yùbèi',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'prepare, make ready'
                }
            ]
        },
        {
            word: 'yuán',
            definitions: [
                {
                    grammer: 'm',
                    definition: 'basic unit of currency'
                },
                {
                    grammer: 'n',
                    definition: 'member of group, trade, profession'
                }
            ]
        },
        {
            word: 'yuánlái',
            definitions: [
                {
                    grammer: 'ma',
                    definition: 'originally; as a matter of fact'
                }
            ]
        },
        {
            word: 'yuǎn',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'far, distant'
                }
            ]
        },
        {
            word: 'yuè',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'month'
                }
            ]
        },
        {
            word: 'yuèlì',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'monthly calendar'
                }
            ]
        },
        {
            word: 'yuè lai yuè',
            definitions: [
                {
                    grammer: 'a',
                    definition: 'more and more'
                }
            ]
        },
        {
            word: 'yùnqi',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'luck'
                }
            ]
        },
        {
            word: 'zài',
            definitions: [
                {
                    grammer: 'a',
                    definition: 'again, further, for action deferred'
                },
                {
                    grammer: 'v',
                    definition: 'be located in/at'
                },
                {
                    grammer: 'cv',
                    definition: 'in, at'
                },
                {
                    grammer: 'a',
                    definition: 'engaged in, in the process of'
                }
            ]
        },
        {
            word: 'zàijiàn',
            definitions: [
                {
                    grammer: 'ie',
                    definition: 'goodbye'
                }
            ]
        },
        {
            word: 'zǎo',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'early'
                },
                {
                    grammer: 'ie',
                    definition: 'good morning'
                }
            ]
        },
        {
            word: 'zǎochen',
            definitions: [
                {
                    grammer: 'tw',
                    definition: 'morning'
                }
            ]
        },
        {
            word: 'zǎofàn',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'breakfast'
                }
            ]
        },
        {
            word: 'zǎojiù',
            definitions: [
                {
                    grammer: 'a',
                    definition: 'long since'
                }
            ]
        },
        {
            word: 'zème',
            definitions: [
                {
                    grammer: 'so (this-wise)',
                    definition: ''
                }
            ]
        },
        {
            word: 'zhème',
            definitions: [
                {
                    grammer: 'so (this-wise)',
                    definition: ''
                }
            ]
        },
        {
            word: 'zènme',
            definitions: [
                {
                    grammer: 'qw',
                    definition: 'how, what'
                }
            ]
        },
        {
            word: 'zěnmeyàng',
            definitions: [
                {
                    grammer: 'ie',
                    definition: `what's it like? how's thing? what do you think? well then`
                }
            ]
        },
        {
            word: 'zěnme yì huí shì',
            definitions: [
                {
                    grammer: 'ie',
                    definition: `what it's all about`
                }
            ]
        },
        {
            word: 'zhàn',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'to stand'
                },
                {
                    grammer: 'n',
                    definition: 'station, bus stop'
                }
            ]
        },
        {
            word: 'zhàntái',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'railway platform'
                }
            ]
        },
        {
            word: 'zhāng',
            definitions: [
                {
                    grammer: 'pr',
                    definition: 'a surname'
                },
                {
                    grammer: 'm',
                    definition: 'sheet of'
                }
            ]
        },
        {
            word: 'zhǎng',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'grow'
                }
            ]
        },
        {
            word: 'zhǎngde',
            definitions: [
                {
                    grammer: '(grow to) be',
                    definition: ''
                }
            ]
        },
        {
            word: 'zháo',
            definitions: [
                {
                    grammer: 'v complement',
                    definition: 'get to (inicates attainment of objective)'
                }
            ]
        },
        {
            word: 'zháojí',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'anxious, worried'
                }
            ]
        },
        {
            word: 'zhǎo',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'look for; give as change'
                }
            ]
        },
        {
            word: 'zhào',
            definitions: [
                {
                    grammer: 'cv',
                    definition: 'accoerding to'
                },
                {
                    grammer: 'v',
                    definition: 'take (photograph)'
                }
            ]
        },
        {
            word: 'zhàopiàn',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'photograph'
                }
            ]
        },
        {
            word: 'zhàoxiàlai',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'get on film'
                }
            ]
        },
        {
            word: 'zhào xiàng',
            definitions: [
                {
                    grammer: 'vo',
                    definition: 'take photograph'
                }
            ]
        },
        {
            word: 'zhàoxiàngjī',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'camera'
                }
            ]
        },
        {
            word: 'zhè',
            definitions: [
                {
                    grammer: 'sp',
                    definition: 'this'
                }
            ]
        },
        {
            word: 'zhe',
            definitions: [
                {
                    grammer: 'v suffix',
                    definition: 'durative suffix'
                }
            ]
        },
        {
            word: 'zhèi',
            definitions: [
                {
                    grammer: 'sp',
                    definition: 'this'
                }
            ]
        },
        {
            word: 'zhēn',
            definitions: [
                {
                    grammer: 'a',
                    definition: 'truly, really'
                }
            ]
        },
        {
            word: 'zhēn de',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'be true'
                }
            ]
        },
        {
            word: 'zhēnshi',
            definitions: [
                {
                    grammer: 'well really! the idea! bad show',
                    definition: ''
                }
            ]
        },
        {
            word: 'zhèn',
            definitions: [
                {
                    grammer: 'm',
                    definition: 'spell of'
                }
            ]
        },
        {
            word: 'zhěng',
            definitions: [
                {
                    grammer: ' at/a',
                    definition: 'full(y), complete(ly)'
                }
            ]
        },
        {
            word: 'zhěngtiān',
            definitions: [
                {
                    grammer: 'tw',
                    definition: 'all day long'
                }
            ]
        },
        {
            word: 'zhèng',
            definitions: [
                {
                    grammer: 'a',
                    definition: 'just, just then, just at that point'
                }
            ]
        },
        {
            word: 'zhèngyào',
            definitions: [
                {
                    grammer: 'a',
                    definition: 'just about to'
                }
            ]
        },
        {
            word: 'zhèngzài',
            definitions: [
                {
                    grammer: 'a',
                    definition: ' just -- ing'
                }
            ]
        },
        {
            word: 'zhèr',
            definitions: [
                {
                    grammer: 'l/pw',
                    definition: 'here'
                }
            ]
        },
        {
            word: 'zhī',
            definitions: [
                {
                    grammer: 'm',
                    definition: 'for birds and some animals (amoung other things)'
                },
                {
                    grammer: 'm',
                    definition: 'for pens, cigarettes, ect'
                }
            ]
        },
        {
            word: 'zhīdao',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'know'
                }
            ]
        },
        {
            word: 'zhǐ',
            definitions: [
                {
                    grammer: 'a',
                    definition: 'only'
                },
                {
                    grammer: 'n',
                    definition: 'paper'
                }
            ]
        },
        {
            word: 'zhǐhǎo',
            definitions: [
                {
                    grammer: 'a',
                    definition: 'be forced to, could only'
                }
            ]
        },
        {
            word: 'zhǐyào',
            definitions: [
                {
                    grammer: 'ma',
                    definition: 'if only needs; as long as'
                }
            ]
        },
        {
            word: 'zhōng',
            definitions: [
                {
                    grammer: 'bf/l',
                    definition: 'middle, center, short for china'
                },
                {
                    grammer: 'n',
                    definition: 'clock'
                }
            ]
        },
        {
            word: 'zhōngguó',
            definitions: [
                {
                    grammer: 'pw',
                    definition: 'china'
                }
            ]
        },
        {
            word: 'zhōngjiān',
            definitions: [
                {
                    grammer: 'l/pw',
                    definition: 'between, amoung, in the middle'
                }
            ]
        },
        {
            word: 'zhōngnián rén',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'middle aged person'
                }
            ]
        },
        {
            word: 'zhōngwén',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'chinese language'
                }
            ]
        },
        {
            word: 'zhōngwǔ',
            definitions: [
                {
                    grammer: 'tw',
                    definition: 'noon'
                }
            ]
        },
        {
            word: 'zhōngxué',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'middle school'
                }
            ]
        },
        {
            word: 'zhōngtou',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'hour'
                }
            ]
        },
        {
            word: 'zhōngyú',
            definitions: [
                {
                    grammer: 'ma',
                    definition: 'finally, at last'
                }
            ]
        },
        {
            word: 'zhǒng',
            definitions: [
                {
                    grammer: 'm',
                    definition: 'kind, sort, type'
                }
            ]
        },
        {
            word: 'zhúzi',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'bamboo'
                }
            ]
        },
        {
            word: 'zhù',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'live, stay, reside'
                }
            ]
        },
        {
            word: 'zhuān',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'concentrated, specialized'
                }
            ]
        },
        {
            word: 'zhuānjiā',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'expert'
                }
            ]
        },
        {
            word: 'zhuānmén',
            definitions: [
                {
                    grammer: 'sv/a',
                    definition: 'special(ly)'
                }
            ]
        },
        {
            word: 'zhuāxīn',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'single minded'
                }
            ]
        },
        {
            word: 'zhuǎn',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'turn'
                }
            ]
        },
        {
            word: 'zhǔn',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'allow, be allowed'
                }
            ]
        },
        {
            word: 'zhuōzi',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'table'
                }
            ]
        },
        {
            word: 'zì',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'written character'
                }
            ]
        },
        {
            word: 'zìdiǎn',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'dictionary'
                }
            ]
        },
        {
            word: 'zìcóng',
            definitions: [
                {
                    grammer: 'cv',
                    definition: 'ever since'
                }
            ]
        },
        {
            word: 'zìjǐ',
            definitions: [
                {
                    grammer: 'pn',
                    definition: 'self'
                }
            ]
        },
        {
            word: 'zìxíngchē',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'bicycle'
                }
            ]
        },
        {
            word: 'zǒng',
            definitions: [
                {
                    grammer: 'a',
                    definition: 'always'
                }
            ]
        },
        {
            word: 'zǒngshi',
            definitions: [
                {
                    grammer: 'a',
                    definition: 'always'
                }
            ]
        },
        {
            word: 'zǒu',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'walk, leave, go'
                }
            ]
        },
        {
            word: 'zǒu lù',
            definitions: [
                {
                    grammer: 'v-o',
                    definition: 'to walk'
                }
            ]
        },
        {
            word: 'zuǐ',
            definitions: [
                {
                    grammer: 'n',
                    definition: 'mouth'
                }
            ]
        },
        {
            word: 'zuì',
            definitions: [
                {
                    grammer: 'a',
                    definition: 'most, exceedingly'
                }
            ]
        },
        {
            word: 'zuìhòu',
            definitions: [
                {
                    grammer: 'ma',
                    definition: 'finally, eventually'
                }
            ]
        },
        {
            word: 'zuìjìn',
            definitions: [
                {
                    grammer: 'tw',
                    definition: 'recently, lately   '
                }
            ]
        },
        {
            word: 'zuótiān',
            definitions: [
                {
                    grammer: 'tw',
                    definition: 'yesterday'
                }
            ]
        },
        {
            word: 'zuǒ',
            definitions: [
                {
                    grammer: 'l',
                    definition: 'left, to/on the left'
                }
            ]
        },
        {
            word: 'zuò',
            definitions: [
                {
                    grammer: 'v',
                    definition: 'do, make'
                },
                {
                    grammer: 'v',
                    definition: 'sit'
                },
                {
                    grammer: 'cv',
                    definition: 'travel by'
                },
                {
                    grammer: 'clv',
                    definition: 'be, act as, serve as'
                },
                {
                    grammer: 'm',
                    definition: 'for buildings, bridges, ect'
                }
            ]
        },
        {
            word: 'zuò shì',
            definitions: [
                {
                    grammer: 'v-o',
                    definition: 'work'
                }
            ]
        }
    ];

    // need to add some words cong ... kaishi ????
    //cong ... qi ???

    const tones = ['\u0304', '\u0301', '\u030C', '\u0300', '\u0308'];

    function removeTones(word) {
        return word.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    }

    function getUpperCaseMap(word) {
        return word.split('').reduce((indexes, char, i) => {
            if (char === char.toUpperCase()) indexes.push(i);
            return indexes;
        }, []);
    }

    function restoreCase(word, map) {
        const chars = word.split('');
        map.forEach(x => chars[x] = chars[x].toUpperCase());
        return chars.join('');
    }

    const api = {
        startsWith(text) {
            if (text === '' || text === null) return;
            const toneless = removeTones(text);
            const word = toneless.toLowerCase();
            const map = getUpperCaseMap(text);
            const list = zidian.reduce((result, x) => {
                const tonelessWord = removeTones(x.word);
                if (!tonelessWord.startsWith(word)) return result;
                const res = Object.assign({}, x);
                res.word = restoreCase(x.word, map);
                result.push(res);
                return result;
            }, []);
            list.sort();
            return list;
        },
        startsWith2(text) {
            if (text === '' || text === null) return;
            // const toneless = removeTones(text);
            const word = text.toLowerCase();
            const map = getUpperCaseMap(text);
            const list = zidian.reduce((result, x) => {
                if (!x.word.startsWith(word)) return result;
                const res = Object.assign({}, x);
                res.word = restoreCase(x.word, map);
                result.push(res);
                return result;
            }, []);
            list.sort();
            return list;
        },
        addTone(char, tone) {
            const toneTest = parseInt(tone);
            if (toneTest === NaN) return false;
            if (tone < 1 || tone > 9) return false;
            const toneless = removeTones(char);
            const lowered = toneless.toLowerCase();
            if (!['a', 'e', 'i', 'o', 'u'].includes(lowered)) return false;
            if (tone > 5 && lowered === 'u') {
                const diaeresis = (tones[4] + tones[tone - 6]).normalize('NFC');
                return (toneless + diaeresis).normalize('NFC');
            }
            return (toneless + tones[tone - 1]).normalize('NFC');
        },
        containsTones(text) {
            const test = text.normalize('NFD').match(/[\u0300-\u036f]/g);
            if (test === null) return false;
            return true;
        },
        removeTones,
        zidian() { return zidian },
        sortLengthFirst(a, b) {
            return a.word.length - b.word.length || a.word.localeCompare(b)
        },
        findByDef(text) {
            const res = zidian.filter(x => {
                const defs = x.definitions.find(d => d.definition.includes(text));
                if (defs) return true;
                return false;
            });
            return res;
        }
    };

    return api;
})();