let stringConventions = {
    readString(str) {
        this.str = str
    },
    capitalizeString(str) {
        let lowerStr = this.str.toLowerCase()
        let capitalizeStr = lowerStr.slice(0, 1).toUpperCase() + lowerStr.slice(1)
        return capitalizeStr
    },
    conventionSpacing(str) {
        let updatedStr = this.str.replace(/\s{2,}/g, " ").replace(/([.,;:!?]+)(?=\S)/g, "$1 ");
        let resultStr = updatedStr.replace(/ +(\p{Po})/gu, "$1");

        return resultStr
    },
    conventionCount(str) {
        let arr = 0
        let deletePunctuation = this.str.replace(/(\p{Po})/gu, "");
        let arrDeletePunctuation = deletePunctuation.split(' ');
        for (let i = 0; i < arrDeletePunctuation.length; i++) {
            if (i !== '') {
                if (i)
                    arr += 1
            }
        }
        return count;
    },
    calculateUniqueWords(str) {
        let deletePunct = this.str.replace(/(\p{Po})/gu, "");
        let arrStr = deletePunct.split(' ')
        let result = arrStr.reduce(function (obj, word) {
            obj[word] = (obj[word] || 0) + 1;
            return obj;
        }, {});

        for (let val in result) {
            if (result[val] % 100 === 12 && 13 && 14) {
                result[val] = `${result[val]} раз`
            } else if (result[val] % 10 === 2 && 3 && 4) {
                result[val] = `${result[val]} раза`
            } else {
                result[val] = `${result[val]} раз`
            }

        }
        let json = JSON.stringify(result)
        alert(json)
    }

}

stringConventions.readString("привет , подсчитай,привет .это все это")
alert(stringConventions.capitalizeString())
// alert(stringConventions.conventionCount())
stringConventions.calculateUniqueWords()
// alert(stringConventions.conventionSpacing())