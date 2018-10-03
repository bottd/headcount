export default class DistrictRepository {
  constructor(stats) {
    this.stats = this.cleanData(stats);
  }

  findByName(search) {
    if (!search) return undefined;
    const searchResult = Object.keys(this.stats).find(keyName => {
      return keyName.toLowerCase().includes(search.toLowerCase());
    });

    if (!searchResult) return undefined;

    return {
      location: searchResult,
      stats: this.stats[searchResult]
    };
  }

  findAllMatches(search) {
    if(!search) search = ''
    const searchResults = Object.keys(this.stats).filter(keyName => {
      return keyName.toLowerCase().includes(search.toLowerCase());
    });

    const resultData = searchResults.map(result => {
      return {
        location: result,
        stats: this.stats[result]
      }
    });

    return resultData;
  }

  cleanData(stats) {
    return stats.reduce((acc, data) => {
      if (typeof data.Data != 'number') data.Data = 0;
      const roundedData = Math.round(data.Data * 1000) / 1000;
      const location = data.Location.toUpperCase();

      if(acc[location]) {
        acc[location][data.TimeFrame] = roundedData;
      }
      else {
        acc[location] = {
          [data.TimeFrame]: roundedData
        }
      }
      return acc;
    }, {});
  }

  findAverage = (district) =>  {
    const years = Object.keys(this.stats[district]);
    const avg =  years.reduce((sum, year) => {
      return sum += this.stats[district][year];
    }, 0) / 11;
    return Math.round(avg * 1000) / 1000;
  }

  compareDistrictAverages(a, b) {
    a = a.toUpperCase();
    b = b.toUpperCase();
    const avgA = this.findAverage(a);
    const avgB = this.findAverage(b);
    const years = Object.keys(this.stats[a]);
    const sumA = years.reduce((sum, year) => {
      return sum += this.stats[a][year]
    }, 0);
    const sumB = years.reduce((sum, year) => {
      return sum += this.stats[b][year]
    }, 0);
    const sumSqA = years.reduce((sum, year) => {
      return sum += this.stats[a][year] * this.stats[a][year];
    }, 0);
    const sumSqB = years.reduce((sum, year) => {
      return sum += this.stats[b][year] * this.stats[b][year];
    }, 0);

    const avg = years.reduce((sum, year) => {
      return sum += this.stats[a][year] + this.stats[b][year];
    }, 0) / 22;
    return {
      [a]: avgA,
      compared: Math.round((avgA / avgB) * 1000) / 1000,
      [b]: avgB
    }
  }
}
