// TODO: you should to get this gone.
// Types
type rule = {
  name: string,
  exp: RegExp,
  exit?: boolean,
  join?: boolean,
  next?: Array<rule>
}

type rules = {
  start: Array<rule>
}

type ParsingElement = { 
  str: string,
  rule: Array<rule> | false,
  globalRules: object,
  internal?: boolean
}

type colors  = {
  white: Function,
  blue: Function,
  purple: Function,
  green: Function,
  yellow: Function,
  orange: Function,
  gray: Function,
  ocean: Function
}

const rules: rules = {
  start: [
    {
      name: "space",
      exp: /\s+/
    },
    {
      name: "comment",
      exp: /\/\/[A-ZА-Яа-яa-z0-9!@#$(){}\s\p{S}]+/
    },
    {
      name: "custom.word",
      exp: /(console|log|warn|error|Error|document|window|getElementById|getElementsByClassName|getElementsByTagName|Array|Object|RegExp|type|fetch|ajax|css|js|json|html)\b/
    },
    {
      name: "string.start",
      exp: /['"`]/,
      next: [
        {
          name: "string.escape",
          exp: /\\./
        },
        {
          name: "string.end",
          exp: /['"`]/,
          exit: true
        },
        {
          name: "string.content",
          exp: /./,
          join: true
        }
      ]
    },
    {
      name: "number",
      exp: /(\+-)?\d+(\.\d+)?/
    },
    {
      name: "par.open",
      exp: /[(\[{]/
    },
    {
      name: "par.close",
      exp: /[)\]}]/
    },
    {
      name: "keyword",
      exp: /(break|case|catch|continue|debugger|default|delete|do|else|finally|for|function|if|in|instanceof|new|return|switch|this|throw|try|typeof|var|void|while|with|class|const|enum|export|extends|import|super|implements|interface|let|package|private|protected|public|static|yield|null|undefined|string|number|boolean|true|false|let)\b/
    },
    {
      name: "symbol",
      exp: /[,.\*;!@%&=|\/:?\p{S}]/u
    },
    {
      name: "word",
      exp: /[a-zA-Z_$#]+[a-zA-Z0-9_$]*/
    }
  ]
}

// Main magic
export class syntaxHighlight {
  private codeLine: string;
  private rules: rules;
  private colors: colors;
  private styles: object;

  constructor(codeLine: string) {
    this.codeLine = codeLine;
    this.rules = rules;
    this.colors = {
      white: (el: string): string => { return `<span class="tp-code-white">${el}</span>` },
      blue: (el: string): string => { return `<span class="tp-code-blue">${el}</span>` },
      purple: (el: string): string => { return `<span class="tp-code-purple">${el}</span>` },
      green: (el: string): string => { return `<span class="tp-code-green">${el}</span>` },
      yellow: (el: string): string => { return `<span class="tp-code-yellow">${el}</span>` },
      orange: (el: string): string => { return `<span class="tp-code-orange">${el}</span>` },
      gray: (el: string): string => { return `<span class="tp-code-gray">${el}</span>` },
      ocean: (el: string): string => { return `<span class="tp-code-ocean">${el}</span>` }
    };
    this.styles = {
      defualt: this.colors.white,
      keyword: this.colors.blue,
      number: this.colors.purple,
      string: this.colors.green,
      par: this.colors.yellow,
      symbol: this.colors.orange,
      comment: this.colors.gray,
      custom: this.colors.ocean
    }
  }

  public highlight = (): string => {
    let parsingElement: ParsingElement = {
      rule: this.rules.start,
      globalRules: this.rules,
      str: this.codeLine
    }

    let result: Array<string> = this.parse(parsingElement).map((token: any): string => {
      for (let style in this.styles) {
        if (style === token.rule.name.split(".")[0]) {
          return (this.styles[style](token.token));
        }
      }
      return token.token;
    });

    return result.join("");
  }

  private findToken = (str: string, rules: Array<rule>, globalRules: object): Array<object> => {
    for (let rule of rules) {
      const match: RegExpMatchArray | null = rule.exp.exec(str);

      if (!match) continue;
      if (match.index !== 0) continue;
  
      const [token] = match;
      const result: object = { rule, token };

      return ([
        result,
        ...this.parse({
          str: str.substring(token.length), 
          rule: rule.next || false,
          globalRules, 
          internal: true
        })
      ]);
    }

    return [];
  }

  private parse = (parsingElement: ParsingElement): Array<object> => {
    if (!parsingElement.rule) return [];
    let offString: string = parsingElement.str;
    let index: number = 0;

    let tokens: Array<any> = [];

    while (true) {
      const foundTokens: Array<any> = this.findToken(
        offString, parsingElement.rule, parsingElement.globalRules);

      if (!foundTokens.length) break;

      foundTokens.forEach((item) => {
        const token: object = { ...item, index };
        
        offString = offString.substring(item.token.length);
        index += item.token.length;

        tokens.push(token);
      });

      if (parsingElement.internal && foundTokens.some(({ rule }) => rule.exit)) break;
    }

    return tokens.reduceRight((res, token) => {
      if (token.rule.join && res[0] && res[0].rule === token.rule) {
        res[0].token = token.token + res[0].token;
      } else { 
        res.unshift(token);
      }

      return res;
    }, []);
  }

} 

