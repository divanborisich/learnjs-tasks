let stringConventions = {
    readString(str) {
        this.str = prompt('Введите строку или слово')
    },
    capitalizeString(str) {
        let lowerStr = this.str.toLowerCase()
        return lowerStr.slice(0, 1).toUpperCase() + lowerStr.slice(1)
    },
    conventionSpacing(str) {
        let updatedStr = this.str.replace(/\s{2,}/g, " ").replace(/([.,;:!?]+)(?=\S)/g, "$1 ");
        return updatedStr.replace(/ +(\p{Po})/gu, "$1")
    },
    conventionCount(str) {
        let count = 0
        let deletePunctuationCount = this.str.replace(/(\p{Po})/gu, "");
        let arrDeletePunctuationCount = deletePunctuationCount.split(' ');
        for (let i = 0; i < arrDeletePunctuationCount.length; i++) {
            if (i !== '') {
                count += 1
            }
        }
        return count;
    },
    calculateUniqueWords(str) {
        let deletePunctuation = this.str.replace(/(\p{Po})/gu, "");
        let arrStr = deletePunctuation.split(' ')
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

stringConventions.readString()
// alert(stringConventions.capitalizeString())
// alert(stringConventions.conventionSpacing())
// alert(stringConventions.conventionCount())
// stringConventions.calculateUniqueWords()
