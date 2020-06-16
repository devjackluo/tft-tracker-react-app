import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



var five_cost_dict = {
    "Sol": [[8], [13]],
    "Ekko": [[5], [5]],
    "Gangplank": [[9], [4,7]],
    "Janna": [[10], [9]],
    "Lulu": [[3], [8]],
    "Thresh": [[4], [6]],
    "Urgot": [[2], [10]],
    "Xerath": [[6], [12]]
}

var four_cost_dict = {
    "Fizz": [[7], [5]],
    "Gnar": [[1], [3]],
    "Irelia": [[5], [6]],
    "Jhin": [[6], [11]],
    "Jinx": [[8], [2]],
    "Riven": [[4], [1]],
    "Soraka": [[10], [8]],
    "Teemo": [[1], [11]],
    "Viktor": [[2], [12]],
    "Wukong": [[4], [14]]
}

var three_cost_dict = {
    "Ashe": [[3], [11]],
    "Bard": [[1], [8]],
    "Cass": [[2], [8]],
    "Ezreal": [[4], [2]],
    "Jayce": [[9], [14]],
    "Karma": [[6], [8]],
    "MasterYi": [[8], [1]],
    "Neeko": [[10], [10]],
    "Rumble": [[7], [4]],
    "Shaco": [[6], [5]],
    "Syndra": [[10], [12]],
    "Vayne": [[5], [11]],
    "Vi": [[5], [3]]
}

var two_cost_dict = {
    "Ahri": [[10], [12]],
    "Annie": [[7], [12]],
    "Blitzcrank": [[4], [3]],
    "Darius": [[9], [6]],
    "KogMaw": [[2], [2]],
    "Lucian": [[5], [2]],
    "Mordekaiser": [[6], [14]],
    "Nautilus": [[1], [14]],
    "Rakan": [[3], [10]],
    "Shen": [[4], [1]],
    "XinZhao": [[3], [10]],
    "Yasuo": [[8], [1]],
    "Zed": [[8], [5]]
}

var one_cost_dict = {
    "Caitlyn": [[4], [11]],
    "Fiora": [[5], [1]],
    "Graves": [[9], [2]],
    "Illaoi": [[2], [3]],
    "Jarvan": [[6], [10]],
    "Leona": [[5], [14]],
    "Malphite": [[8], [3]],
    "Nocturne": [[2], [5]],
    "Poppy": [[10], [14]],
    "TF": [[4], [12]],
    "Xayah": [[3], [1]],
    "Ziggs": [[8], [4]],
    "Zoe": [[10], [12]]
}


var tft_origin = {
    1: "Astro",
    2: "Battlecast",
    3: "Celestial",
    4: "Chrono",
    5: "Cybernetic",
    6: "Dark Star",
    7: "Mech Pilot",
    8: "Rebel",
    9: "Space Pirate",
    10: "Star Guardian"
}

var tft_class = {
    1: "Blademaster",
    2: "Blaster",
    3: "Brawler",
    4: "Demolitionist",
    5: "Infiltrator",
    6: "Mana-Reaver",
    7: "Mercenary",
    8: "Mystic",
    9: "Paragon",
    10: "Protector",
    11: "Sniper",
    12: "Sorcerer",
    13: "Starship",
    14: "Vanguard"
}

var tft_class_rules = {
    1: [3,6],
    2: [2,4,6,8],
    3: [2,4],
    4: [2,4,6],
    5: [3,6],
    6: [2,4,6,8],
    7: [3],
    8: [3,6,9],
    9: [2,4],
    10: [3,6]
}

var tft_origin_rules = {
    1: [3],
    2: [2,4,6,8],
    3: [2,4],
    4: [2,3,4],
    5: [2,4,6],
    6: [3,6,9],
    7: [3,6,9],
    8: [2],
    9: [2,4,6],
    10: [3],
    11: [2,4],
    12: [2,3,4],
    13: [1],
    14: [3]
}



class Tile extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        var sectionStyle = null

        if (this.props.championInfo[4]) {
            sectionStyle = {
                backgroundImage: "url(icons/" + this.props.championInfo[0] + ".png)",
                border: "rgba(120,120,120,1) calc(0.5vmin) solid",
                opacity: ".2"
            }
        } else if (this.props.championInfo[3] == 1) {
            sectionStyle = {
                backgroundImage: "url(icons/" + this.props.championInfo[0] + ".png)",
                border: "rgba(155,155,2,1) calc(0.5vmin) solid",
            }
        } else if (this.props.championInfo[3] == 2) {
            sectionStyle = {
                backgroundImage: "url(icons/" + this.props.championInfo[0] + ".png)",
                border: "rgba(175,95,0,1) calc(0.5vmin) solid",
            }
        } else if (this.props.championInfo[3] == 3) {
            sectionStyle = {
                backgroundImage: "url(icons/" + this.props.championInfo[0] + ".png)",
                border: "rgba(185,50,0,1) calc(0.5vmin) solid",
            }
        } else if (this.props.championInfo[3] >= 4) {
            sectionStyle = {
                backgroundImage: "url(icons/" + this.props.championInfo[0] + ".png)",
                border: "rgba(255,0,0,1) calc(0.5vmin) solid",
            }
        } 
        else {
            this.props.championInfo[3] = 0
            sectionStyle = {
                backgroundImage: "url(icons/" + this.props.championInfo[0] + ".png)",
                border: "black calc(0.5vmin) solid"
            }
        }

        return (
            <button onClick={() => this.props.onClick(this.props.championInfo)} className="Tile" style={sectionStyle}>
            </button>
        );

    }

}


class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            championsArrayGlobal: this.initializeChampionArray()
        };
    }

    initializeChampionArray() {

        var championArray = []
        for (var champion in one_cost_dict) {
            if (one_cost_dict.hasOwnProperty(champion)) {
                championArray = championArray.concat([[champion, 1, one_cost_dict[champion], 0, false]])
            }
        }

        for (var champion in two_cost_dict) {
            if (two_cost_dict.hasOwnProperty(champion)) {
                championArray = championArray.concat([[champion, 2, two_cost_dict[champion], 0, false]])
            }
        }

        for (var champion in three_cost_dict) {
            if (three_cost_dict.hasOwnProperty(champion)) {
                championArray = championArray.concat([[champion, 3, three_cost_dict[champion], 0, false]])
            }
        }

        for (var champion in four_cost_dict) {
            if (four_cost_dict.hasOwnProperty(champion)) {
                championArray = championArray.concat([[champion, 4, four_cost_dict[champion], 0, false]])
            }
        }

        for (var champion in five_cost_dict) {
            if (five_cost_dict.hasOwnProperty(champion)) {
                championArray = championArray.concat([[champion, 5, five_cost_dict[champion], 0, false]])
            }
        }

        return championArray;

    }

    handleChampionCalculations(clickedChampInfo) {


        var clonedChampionArray = this.state.championsArrayGlobal.slice()


        if (clickedChampInfo[4]) {
            clickedChampInfo[4] = false
        } else {
            clickedChampInfo[4] = true
        }


        var classMatchCompletionArray = []
        var originMatchCompletionArray = []
        
        for (var champion in clonedChampionArray) {

            var currentChampionInfo = this.state.championsArrayGlobal[champion]

            if (clickedChampInfo[0] != currentChampionInfo[0]) {


                for (var clickedChampionClass in clickedChampInfo[2][0]){
                    
                    for(var currentChampionClass in currentChampionInfo[2][0]){

                        if (clickedChampInfo[2][0][clickedChampionClass] == currentChampionInfo[2][0][currentChampionClass]){
                            

                            if(currentChampionInfo[4]){
                                classMatchCompletionArray.push(clickedChampInfo[2][0][clickedChampionClass])
                            }

                            if(clickedChampInfo[4]){
                                currentChampionInfo[3] += 1
                            }else{
                                currentChampionInfo[3] -= 1
                            }

                        }
                    }

                }


                for (var clickedChampionOrigin in clickedChampInfo[2][1]){
                    
                    for(var currentChampionOrigin in currentChampionInfo[2][1]){

                        if (clickedChampInfo[2][1][clickedChampionOrigin] == currentChampionInfo[2][1][currentChampionOrigin]){
                            

                            if(currentChampionInfo[4]){
                                originMatchCompletionArray.push(clickedChampInfo[2][1][clickedChampionOrigin])
                            }

                            if(clickedChampInfo[4]){
                                currentChampionInfo[3] += 1
                            }else{
                                currentChampionInfo[3] -= 1
                            }
                            
                        }

                    }

                }

            }
        }


        this.setState({
            championsArrayGlobal: clonedChampionArray
        })

    }

    clearBoard() {
        this.setState({
            championsArrayGlobal: this.initializeChampionArray()
        })
    }

    render() {


        var displayIconsOneCost = []
        var displayIconsTwoCost = []
        var displayIconsThreeCost = []
        var displayIconsFourCost = []
        var displayIconsFiveCost = []

        for (var champion in this.state.championsArrayGlobal) {

            var currentChampionInfo = this.state.championsArrayGlobal[champion]

            if (one_cost_dict.hasOwnProperty(currentChampionInfo[0])) {
                displayIconsOneCost.push(
                    <Tile
                        key={currentChampionInfo[0]}
                        championInfo={currentChampionInfo}
                        onClick={(ci) => this.handleChampionCalculations(ci)} />
                )
            }

            else if (two_cost_dict.hasOwnProperty(currentChampionInfo[0])) {
                displayIconsTwoCost.push(
                    <Tile
                        key={currentChampionInfo[0]}
                        championInfo={currentChampionInfo}
                        onClick={(ci) => this.handleChampionCalculations(ci)} />
                )
            }

            else if (three_cost_dict.hasOwnProperty(currentChampionInfo[0])) {
                displayIconsThreeCost.push(
                    <Tile
                        key={currentChampionInfo[0]}
                        championInfo={currentChampionInfo}
                        onClick={(ci) => this.handleChampionCalculations(ci)} />
                )
            }

            else if (four_cost_dict.hasOwnProperty(currentChampionInfo[0])) {
                displayIconsFourCost.push(
                    <Tile
                        key={currentChampionInfo[0]}
                        championInfo={currentChampionInfo}
                        onClick={(ci) => this.handleChampionCalculations(ci)} />
                )
            }

            else if (five_cost_dict.hasOwnProperty(currentChampionInfo[0])) {
                displayIconsFiveCost.push(
                    <Tile
                        key={currentChampionInfo[0]}
                        championInfo={currentChampionInfo}
                        onClick={(ci) => this.handleChampionCalculations(ci)} />
                )
            }

        }

        return (
            <div>
                <div className="tierRow">
                    {displayIconsOneCost}
                </div>
                <div className="tierRow">
                    {displayIconsTwoCost}
                </div>
                <div className="tierRow">
                    {displayIconsThreeCost}
                </div>
                <div className="tierRow">
                    {displayIconsFourCost}
                </div>
                <div className="tierRow">
                    {displayIconsFiveCost}
                </div>

                <div className="tierRow clearBtn">
                    <button onClick={() => this.clearBoard()}>CLEAR</button>
                </div>
            </div>
        );

    }
}

// ========================================

ReactDOM.render(
    <Board />,
    document.getElementById('root')
);


