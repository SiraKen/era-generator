var globalText;
function generate() {
	var eraNames = {
		1:"永",
    2:"元",
    3:"天",
    4:"治",
    5:"応",
    6:"正",
    7:"長",
    8:"文",
    9:"和",
    10:"安",
    11:"延",
    12:"暦",
    13:"寛",
    14:"徳",
    15:"保",
    16:"承",
    17:"仁",
    18:"嘉",
    19:"平",
    20:"康",
    21:"宝",
    22:"久",
    23:"慶",
    24:"建",
    25:"享",
    26:"弘",
    27:"貞",
    28:"明",
    29:"禄",
    30:"大",
    31:"亀",
    32:"寿",
    33:"万",
    34:"化",
    35:"観",
    36:"喜",
    37:"神",
    38:"政",
    39:"中",
    40:"養",
    41:"雲",
    42:"護",
    43:"乾",
    44:"感",
    45:"吉",
    46:"亨",
    47:"興",
    48:"景",
    49:"衡",
    50:"国",
    51:"斎",
    52:"至",
    53:"字",
    54:"朱",
    55:"授",
    56:"勝",
    57:"昌",
    58:"昭",
    59:"祥",
    60:"成",
    61:"泰",
    62:"鳥",
    63:"禎",
    64:"同",
    65:"銅",
    66:"白",
    67:"武",
    68:"福",
    69:"霊",
    70:"老",
    71:"祚",
    72:"雉",
    73:"令"
	};

	var x = Math.floor(Math.random()*(73-1)+1);
	var y = Math.floor(Math.random()*(73-1)+1);
	var z = (eraNames[x] + eraNames[y]);
	globalText = ("あなたが創り出した元号は「" + z + "」です");

	insertName.innerHTML=("「" + z + "」");
}

// Tweetボタン
function tweet(){
	if (globalText == null){
		alert("生成してください！何度でも生成できます。");
	} else {
		var tweetLink = ("https://twitter.com/intent/tweet?text=" + globalText + "&url=https://siraken.github.io/era_generator&hashtags=私の創り出した元号,元号ジェネレーター,新元号考えてみた&via=Sira_Kento");
		window.open(tweetLink);
	}

}
