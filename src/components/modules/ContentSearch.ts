export class Searcher {
  private result: string;
  private searchString: string;
  private elementsList: Array<NodeList>;

  public constructor(string: string, elements: Array<string>) {
    this.searchString = this.removeSpecialSymbols(string.toLowerCase().trim());
    this.result = ""; // Uses for return this in parse method

    this.elementsList = elements.map(
      (e: string): NodeList => {
        return document.querySelectorAll(e);
      }
    );
  }

  private fastSearch = (): void => {
    this.elementsList.map((els: NodeList) => {
      els.forEach((e: any) => {
        if (this.searchString != "") {
          e.innerHTML = this.markRemove(e.innerHTML).replace(
            new RegExp(this.searchString, "gi"),
            this.mark(this.searchString)
          );
        } else {
          e.innerHTML = this.markRemove(e.innerHTML);
        }
      });
    });
  };

  public search = (type: boolean): void => {
    if (!type) {
      this.elementsList.map((els: NodeList) => {
        els.forEach((e: any) => {
          if (this.searchString !== "") {
            e.innerHTML = this.parse(this.searchString, e.innerText);
          } else {
            e.innerHTML = this.markRemove(e.innerText);
          }
        });
      });
    } else this.fastSearch();
    // ( fast search replaces any typecases sumbols to lowercase but it's faster )
  };

  private parse = (
    token: string,
    string: string,
    result: string = ""
  ): string => {
    if (result === "") {
      let foundToken: RegExpMatchArray | null = string.match(
        new RegExp(token, "i")
      );
      let result = string;

      if (foundToken !== null) {
        let offString = string.substring(
          Number(foundToken.index) + token.length
        );

        result =
          result.substring(0, foundToken.index) +
          this.mark(foundToken[0]) +
          offString;

        this.parse(token, offString, result);
      } else {
        return result;
      }
    } else {
      let foundToken: RegExpMatchArray | null = string.match(
        new RegExp(token, "i")
      );

      if (foundToken !== null) {
        let offString: string = string.replace(
          foundToken[0],
          this.mark(foundToken[0])
        );

        result = result.replace(string, offString);

        offString = offString.substring(
          Number(foundToken.index) + this.mark(foundToken[0]).length
        );

        // recall itselft ( Yamete kudasai )
        this.parse(token, offString, result);
      } else {
        this.result = result;
      }
    }

    return this.result;
  };

  private mark = (token: string): string => {
    return `<mark>${token}</mark>`;
  };

  private markRemove = (htmlItem: string): string => {
    return htmlItem // Remove any markers
      .replace(new RegExp("<mark>", "g"), "")
      .replace(new RegExp("</mark>", "g"), "");
  };

  private removeSpecialSymbols = (string: string): string => {
    // Here i gonna remove any stuff like shitsymbols else it throw an error ;)
    return string.replace(/[?/\\!@$%&*+^\[\]|()]/g, "");
  };
}
