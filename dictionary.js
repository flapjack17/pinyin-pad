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
            word: 'bàn-gōng',
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
            word: 'bāng-máng',
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
            word: 'bì-yè',
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
            word: 'bú-cuò',
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
            word: 'bù-hǎoyìsi',
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
            word: 'bù-tóng',
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
            word: 'chàng-gēr',
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
            word: 'chéng-li',
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
            word: 'chī-fàn',
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
            word: 'chōu-yān',
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
            word: 'dāo-chā',
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
            word: 'dì-li',
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
            word: 'huà-huàr',
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
            word: 'huàn-chē',
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
            word: 'jiàn-miàn',
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
            word: 'jiāo-shū',
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
            word: 'jiào-hǎo',
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
            word: 'jié-hūn',
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
            word: 'kāi-chē',
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
            word: 'kàn-shū',
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
            word: 'lóng-fēi fēng-wǔ',
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
            word: 'lù-yīn',
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
            word: 'luó-mǎ dàchē',
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
            word: 'nán-dé',
            definitions: [
                {
                    grammer: 'sv',
                    definition: 'hard to get, rare'
                }
            ]
        },
        {
            word: 'nán-wàng',
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
            word: 'niàn-shū',
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
            word: 'nǚ-de',
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
            word: 'pái-duì',
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
            word: 'qǐng-kè',
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
            word: '',
            definitions: [
                {
                    grammer: '',
                    definition: ''
                }
            ]
        },
        {
            word: '',
            definitions: [
                {
                    grammer: '',
                    definition: ''
                }
            ]
        },
        {
            word: '',
            definitions: [
                {
                    grammer: '',
                    definition: ''
                }
            ]
        },
        {
            word: '',
            definitions: [
                {
                    grammer: '',
                    definition: ''
                }
            ]
        },
        {
            word: '',
            definitions: [
                {
                    grammer: '',
                    definition: ''
                }
            ]
        },
        {
            word: '',
            definitions: [
                {
                    grammer: '',
                    definition: ''
                }
            ]
        },
        {
            word: '',
            definitions: [
                {
                    grammer: '',
                    definition: ''
                }
            ]
        },
        {
            word: '',
            definitions: [
                {
                    grammer: '',
                    definition: ''
                }
            ]
        },
        {
            word: '',
            definitions: [
                {
                    grammer: '',
                    definition: ''
                }
            ]
        },
        {
            word: '',
            definitions: [
                {
                    grammer: '',
                    definition: ''
                }
            ]
        },
        {
            word: '',
            definitions: [
                {
                    grammer: '',
                    definition: ''
                }
            ]
        },
        {
            word: '',
            definitions: [
                {
                    grammer: '',
                    definition: ''
                }
            ]
        },
        {
            word: '',
            definitions: [
                {
                    grammer: '',
                    definition: ''
                }
            ]
        },
        {
            word: '',
            definitions: [
                {
                    grammer: '',
                    definition: ''
                }
            ]
        },
        {
            word: '',
            definitions: [
                {
                    grammer: '',
                    definition: ''
                }
            ]
        },
        {
            word: '',
            definitions: [
                {
                    grammer: '',
                    definition: ''
                }
            ]
        },
        {
            word: '',
            definitions: [
                {
                    grammer: '',
                    definition: ''
                }
            ]
        },
        {
            word: '',
            definitions: [
                {
                    grammer: '',
                    definition: ''
                }
            ]
        },
        {
            word: '',
            definitions: [
                {
                    grammer: '',
                    definition: ''
                }
            ]
        },
        {
            word: '',
            definitions: [
                {
                    grammer: '',
                    definition: ''
                }
            ]
        },
        {
            word: '',
            definitions: [
                {
                    grammer: '',
                    definition: ''
                }
            ]
        },
        {
            word: '',
            definitions: [
                {
                    grammer: '',
                    definition: ''
                }
            ]
        },
        {
            word: '',
            definitions: [
                {
                    grammer: '',
                    definition: ''
                }
            ]
        },
        {
            word: '',
            definitions: [
                {
                    grammer: '',
                    definition: ''
                }
            ]
        },
        {
            word: '',
            definitions: [
                {
                    grammer: '',
                    definition: ''
                }
            ]
        },
        {
            word: '',
            definitions: [
                {
                    grammer: '',
                    definition: ''
                }
            ]
        },
        {
            word: '',
            definitions: [
                {
                    grammer: '',
                    definition: ''
                }
            ]
        },
        {
            word: '',
            definitions: [
                {
                    grammer: '',
                    definition: ''
                }
            ]
        },
        {
            word: '',
            definitions: [
                {
                    grammer: '',
                    definition: ''
                }
            ]
        },
        {
            word: '',
            definitions: [
                {
                    grammer: '',
                    definition: ''
                }
            ]
        },
        {
            word: '',
            definitions: [
                {
                    grammer: '',
                    definition: ''
                }
            ]
        },
        {
            word: '',
            definitions: [
                {
                    grammer: '',
                    definition: ''
                }
            ]
        },
        {
            word: '',
            definitions: [
                {
                    grammer: '',
                    definition: ''
                }
            ]
        },
        {
            word: '',
            definitions: [
                {
                    grammer: '',
                    definition: ''
                }
            ]
        },
        {
            word: '',
            definitions: [
                {
                    grammer: '',
                    definition: ''
                }
            ]
        },
        {
            word: '',
            definitions: [
                {
                    grammer: '',
                    definition: ''
                }
            ]
        },

    ]

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
            return zidian.filter(x => {
                const toneless = removeTones(x.word);
                if (!toneless.startsWith(word)) return false;
                x.word = restoreCase(x.word, map);
                return true;
            });
        },
        // startsWith(text) {
        //     if (text === '' || text === null) return;
        //     const toneless = removeTones(text);
        //     const word = toneless.toLowerCase();
        //     const map = getUpperCaseMap(text);
        //     return dict.filter(x => {
        //         const toneless = removeTones(x);
        //         if (toneless.startsWith(word)) return true;
        //         return false;
        //     }).map(x => restoreCase(x, map));
        // },
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
        removeTones
    };

    return api;
})();

// TODO: seperate words in to alphabetic characters