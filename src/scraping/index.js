/**
 * Return the HTML of a website.
 * @param url
 * @returns {Promise<string>}
 */
function getHTML (url) {
  return new Promise(function (resolve, reject) {
    const http = new XMLHttpRequest()

    http.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolve(this.responseText)
      }
    }

    http.onerror = reject

    http.open('GET', `https://cors-anywhere.herokuapp.com/${url}`, true)
    http.send()
  })
}

export default {
  getHTML
}
