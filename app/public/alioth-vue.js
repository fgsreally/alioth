var is = Object.defineProperty;
var rs = (e, t, i) => t in e ? is(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var _ = (e, t, i) => (rs(e, typeof t != "symbol" ? t + "" : t, i), i);
import { g as ss, G as Y, T as J, I as Je, u as ns } from "./phecda-vue-c2d0c571.js";
import { d as kt, p as as, g as os, h as Ce, r as Ni, o as us, a as cs, b as hs, c as ls } from "./vue.runtime.esm-bundler-57682e21.js";
import { render as Oi } from "./vue.js";
var fs = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 81, 2, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 9, 5351, 0, 7, 14, 13835, 9, 87, 9, 39, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4706, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 983, 6, 110, 6, 6, 9, 4759, 9, 787719, 239], Li = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 4026, 582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 757, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 4191], ps = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࢘-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-ᫎᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‌‍‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯・꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿･", Ri = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟊꟐꟑꟓꟕ-ꟙꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", ot = {
  3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
  5: "class enum extends super const export import",
  6: "enum",
  strict: "implements interface let package private protected public static yield",
  strictBind: "eval arguments"
}, ut = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this", ds = {
  5: ut,
  "5module": ut + " export import",
  6: ut + " const class extends export import super"
}, ms = /^in(stanceof)?$/, vs = new RegExp("[" + Ri + "]"), gs = new RegExp("[" + Ri + ps + "]");
function pt(e, t) {
  for (var i = 65536, r = 0; r < t.length; r += 2) {
    if (i += t[r], i > e)
      return !1;
    if (i += t[r + 1], i >= e)
      return !0;
  }
  return !1;
}
function Q(e, t) {
  return e < 65 ? e === 36 : e < 91 ? !0 : e < 97 ? e === 95 : e < 123 ? !0 : e <= 65535 ? e >= 170 && vs.test(String.fromCharCode(e)) : t === !1 ? !1 : pt(e, Li);
}
function ve(e, t) {
  return e < 48 ? e === 36 : e < 58 ? !0 : e < 65 ? !1 : e < 91 ? !0 : e < 97 ? e === 95 : e < 123 ? !0 : e <= 65535 ? e >= 170 && gs.test(String.fromCharCode(e)) : t === !1 ? !1 : pt(e, Li) || pt(e, fs);
}
var A = function(t, i) {
  i === void 0 && (i = {}), this.label = t, this.keyword = i.keyword, this.beforeExpr = !!i.beforeExpr, this.startsExpr = !!i.startsExpr, this.isLoop = !!i.isLoop, this.isAssign = !!i.isAssign, this.prefix = !!i.prefix, this.postfix = !!i.postfix, this.binop = i.binop || null, this.updateContext = null;
};
function j(e, t) {
  return new A(e, { beforeExpr: !0, binop: t });
}
var M = { beforeExpr: !0 }, R = { startsExpr: !0 }, Tt = {};
function E(e, t) {
  return t === void 0 && (t = {}), t.keyword = e, Tt[e] = new A(e, t);
}
var u = {
  num: new A("num", R),
  regexp: new A("regexp", R),
  string: new A("string", R),
  name: new A("name", R),
  privateId: new A("privateId", R),
  eof: new A("eof"),
  // Punctuation token types.
  bracketL: new A("[", { beforeExpr: !0, startsExpr: !0 }),
  bracketR: new A("]"),
  braceL: new A("{", { beforeExpr: !0, startsExpr: !0 }),
  braceR: new A("}"),
  parenL: new A("(", { beforeExpr: !0, startsExpr: !0 }),
  parenR: new A(")"),
  comma: new A(",", M),
  semi: new A(";", M),
  colon: new A(":", M),
  dot: new A("."),
  question: new A("?", M),
  questionDot: new A("?."),
  arrow: new A("=>", M),
  template: new A("template"),
  invalidTemplate: new A("invalidTemplate"),
  ellipsis: new A("...", M),
  backQuote: new A("`", R),
  dollarBraceL: new A("${", { beforeExpr: !0, startsExpr: !0 }),
  // Operators. These carry several kinds of properties to help the
  // parser use them properly (the presence of these properties is
  // what categorizes them as operators).
  //
  // `binop`, when present, specifies that this operator is a binary
  // operator, and will refer to its precedence.
  //
  // `prefix` and `postfix` mark the operator as a prefix or postfix
  // unary operator.
  //
  // `isAssign` marks all of `=`, `+=`, `-=` etcetera, which act as
  // binary operators with a very low precedence, that should result
  // in AssignmentExpression nodes.
  eq: new A("=", { beforeExpr: !0, isAssign: !0 }),
  assign: new A("_=", { beforeExpr: !0, isAssign: !0 }),
  incDec: new A("++/--", { prefix: !0, postfix: !0, startsExpr: !0 }),
  prefix: new A("!/~", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  logicalOR: j("||", 1),
  logicalAND: j("&&", 2),
  bitwiseOR: j("|", 3),
  bitwiseXOR: j("^", 4),
  bitwiseAND: j("&", 5),
  equality: j("==/!=/===/!==", 6),
  relational: j("</>/<=/>=", 7),
  bitShift: j("<</>>/>>>", 8),
  plusMin: new A("+/-", { beforeExpr: !0, binop: 9, prefix: !0, startsExpr: !0 }),
  modulo: j("%", 10),
  star: j("*", 10),
  slash: j("/", 10),
  starstar: new A("**", { beforeExpr: !0 }),
  coalesce: j("??", 1),
  // Keyword token types.
  _break: E("break"),
  _case: E("case", M),
  _catch: E("catch"),
  _continue: E("continue"),
  _debugger: E("debugger"),
  _default: E("default", M),
  _do: E("do", { isLoop: !0, beforeExpr: !0 }),
  _else: E("else", M),
  _finally: E("finally"),
  _for: E("for", { isLoop: !0 }),
  _function: E("function", R),
  _if: E("if"),
  _return: E("return", M),
  _switch: E("switch"),
  _throw: E("throw", M),
  _try: E("try"),
  _var: E("var"),
  _const: E("const"),
  _while: E("while", { isLoop: !0 }),
  _with: E("with"),
  _new: E("new", { beforeExpr: !0, startsExpr: !0 }),
  _this: E("this", R),
  _super: E("super", R),
  _class: E("class", R),
  _extends: E("extends", M),
  _export: E("export"),
  _import: E("import", R),
  _null: E("null", R),
  _true: E("true", R),
  _false: E("false", R),
  _in: E("in", { beforeExpr: !0, binop: 7 }),
  _instanceof: E("instanceof", { beforeExpr: !0, binop: 7 }),
  _typeof: E("typeof", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  _void: E("void", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  _delete: E("delete", { beforeExpr: !0, prefix: !0, startsExpr: !0 })
}, $ = /\r\n?|\n|\u2028|\u2029/, xs = new RegExp($.source, "g");
function be(e) {
  return e === 10 || e === 13 || e === 8232 || e === 8233;
}
function Vi(e, t, i) {
  i === void 0 && (i = e.length);
  for (var r = t; r < i; r++) {
    var s = e.charCodeAt(r);
    if (be(s))
      return r < i - 1 && s === 13 && e.charCodeAt(r + 1) === 10 ? r + 2 : r + 1;
  }
  return -1;
}
var Bi = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/, D = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g, ji = Object.prototype, ys = ji.hasOwnProperty, bs = ji.toString, Ve = Object.hasOwn || function(e, t) {
  return ys.call(e, t);
}, ei = Array.isArray || function(e) {
  return bs.call(e) === "[object Array]";
}, ti = /* @__PURE__ */ Object.create(null);
function te(e) {
  return ti[e] || (ti[e] = new RegExp("^(?:" + e.replace(/ /g, "|") + ")$"));
}
function ie(e) {
  return e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320));
}
var _s = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/, Pe = function(t, i) {
  this.line = t, this.column = i;
};
Pe.prototype.offset = function(t) {
  return new Pe(this.line, this.column + t);
};
var Ze = function(t, i, r) {
  this.start = i, this.end = r, t.sourceFile !== null && (this.source = t.sourceFile);
};
function Mi(e, t) {
  for (var i = 1, r = 0; ; ) {
    var s = Vi(e, r, t);
    if (s < 0)
      return new Pe(i, t - r);
    ++i, r = s;
  }
}
var dt = {
  // `ecmaVersion` indicates the ECMAScript version to parse. Must be
  // either 3, 5, 6 (or 2015), 7 (2016), 8 (2017), 9 (2018), 10
  // (2019), 11 (2020), 12 (2021), 13 (2022), 14 (2023), or `"latest"`
  // (the latest version the library supports). This influences
  // support for strict mode, the set of reserved words, and support
  // for new syntax features.
  ecmaVersion: null,
  // `sourceType` indicates the mode the code should be parsed in.
  // Can be either `"script"` or `"module"`. This influences global
  // strict mode and parsing of `import` and `export` declarations.
  sourceType: "script",
  // `onInsertedSemicolon` can be a callback that will be called when
  // a semicolon is automatically inserted. It will be passed the
  // position of the inserted semicolon as an offset, and if
  // `locations` is enabled, it is given the location as a `{line,
  // column}` object as second argument.
  onInsertedSemicolon: null,
  // `onTrailingComma` is similar to `onInsertedSemicolon`, but for
  // trailing commas.
  onTrailingComma: null,
  // By default, reserved words are only enforced if ecmaVersion >= 5.
  // Set `allowReserved` to a boolean value to explicitly turn this on
  // an off. When this option has the value "never", reserved words
  // and keywords can also not be used as property names.
  allowReserved: null,
  // When enabled, a return at the top level is not considered an
  // error.
  allowReturnOutsideFunction: !1,
  // When enabled, import/export statements are not constrained to
  // appearing at the top of the program, and an import.meta expression
  // in a script isn't considered an error.
  allowImportExportEverywhere: !1,
  // By default, await identifiers are allowed to appear at the top-level scope only if ecmaVersion >= 2022.
  // When enabled, await identifiers are allowed to appear at the top-level scope,
  // but they are still not allowed in non-async functions.
  allowAwaitOutsideFunction: null,
  // When enabled, super identifiers are not constrained to
  // appearing in methods and do not raise an error when they appear elsewhere.
  allowSuperOutsideMethod: null,
  // When enabled, hashbang directive in the beginning of file is
  // allowed and treated as a line comment. Enabled by default when
  // `ecmaVersion` >= 2023.
  allowHashBang: !1,
  // By default, the parser will verify that private properties are
  // only used in places where they are valid and have been declared.
  // Set this to false to turn such checks off.
  checkPrivateFields: !0,
  // When `locations` is on, `loc` properties holding objects with
  // `start` and `end` properties in `{line, column}` form (with
  // line being 1-based and column 0-based) will be attached to the
  // nodes.
  locations: !1,
  // A function can be passed as `onToken` option, which will
  // cause Acorn to call that function with object in the same
  // format as tokens returned from `tokenizer().getToken()`. Note
  // that you are not allowed to call the parser from the
  // callback—that will corrupt its internal state.
  onToken: null,
  // A function can be passed as `onComment` option, which will
  // cause Acorn to call that function with `(block, text, start,
  // end)` parameters whenever a comment is skipped. `block` is a
  // boolean indicating whether this is a block (`/* */`) comment,
  // `text` is the content of the comment, and `start` and `end` are
  // character offsets that denote the start and end of the comment.
  // When the `locations` option is on, two more parameters are
  // passed, the full `{line, column}` locations of the start and
  // end of the comments. Note that you are not allowed to call the
  // parser from the callback—that will corrupt its internal state.
  // When this option has an array as value, objects representing the
  // comments are pushed to it.
  onComment: null,
  // Nodes have their start and end characters offsets recorded in
  // `start` and `end` properties (directly on the node, rather than
  // the `loc` object, which holds line/column data. To also add a
  // [semi-standardized][range] `range` property holding a `[start,
  // end]` array with the same numbers, set the `ranges` option to
  // `true`.
  //
  // [range]: https://bugzilla.mozilla.org/show_bug.cgi?id=745678
  ranges: !1,
  // It is possible to parse multiple files into a single AST by
  // passing the tree produced by parsing the first file as
  // `program` option in subsequent parses. This will add the
  // toplevel forms of the parsed file to the `Program` (top) node
  // of an existing parse tree.
  program: null,
  // When `locations` is on, you can pass this to record the source
  // file in every node's `loc` object.
  sourceFile: null,
  // This value, if given, is stored in every node, whether
  // `locations` is on or off.
  directSourceFile: null,
  // When enabled, parenthesized expressions are represented by
  // (non-standard) ParenthesizedExpression nodes
  preserveParens: !1
}, ii = !1;
function ws(e) {
  var t = {};
  for (var i in dt)
    t[i] = e && Ve(e, i) ? e[i] : dt[i];
  if (t.ecmaVersion === "latest" ? t.ecmaVersion = 1e8 : t.ecmaVersion == null ? (!ii && typeof console == "object" && console.warn && (ii = !0, console.warn(`Since Acorn 8.0.0, options.ecmaVersion is required.
Defaulting to 2020, but this will stop working in the future.`)), t.ecmaVersion = 11) : t.ecmaVersion >= 2015 && (t.ecmaVersion -= 2009), t.allowReserved == null && (t.allowReserved = t.ecmaVersion < 5), (!e || e.allowHashBang == null) && (t.allowHashBang = t.ecmaVersion >= 14), ei(t.onToken)) {
    var r = t.onToken;
    t.onToken = function(s) {
      return r.push(s);
    };
  }
  return ei(t.onComment) && (t.onComment = Ss(t, t.onComment)), t;
}
function Ss(e, t) {
  return function(i, r, s, n, a, o) {
    var c = {
      type: i ? "Block" : "Line",
      value: r,
      start: s,
      end: n
    };
    e.locations && (c.loc = new Ze(this, a, o)), e.ranges && (c.range = [s, n]), t.push(c);
  };
}
var ke = 1, _e = 2, Nt = 4, Di = 8, Fi = 16, $i = 32, Ot = 64, Ui = 128, Be = 256, Lt = ke | _e | Be;
function Rt(e, t) {
  return _e | (e ? Nt : 0) | (t ? Di : 0);
}
var Ge = 0, Vt = 1, Z = 2, Gi = 3, qi = 4, Hi = 5, N = function(t, i, r) {
  this.options = t = ws(t), this.sourceFile = t.sourceFile, this.keywords = te(ds[t.ecmaVersion >= 6 ? 6 : t.sourceType === "module" ? "5module" : 5]);
  var s = "";
  t.allowReserved !== !0 && (s = ot[t.ecmaVersion >= 6 ? 6 : t.ecmaVersion === 5 ? 5 : 3], t.sourceType === "module" && (s += " await")), this.reservedWords = te(s);
  var n = (s ? s + " " : "") + ot.strict;
  this.reservedWordsStrict = te(n), this.reservedWordsStrictBind = te(n + " " + ot.strictBind), this.input = String(i), this.containsEsc = !1, r ? (this.pos = r, this.lineStart = this.input.lastIndexOf(`
`, r - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split($).length) : (this.pos = this.lineStart = 0, this.curLine = 1), this.type = u.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = !0, this.inModule = t.sourceType === "module", this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.potentialArrowInForAwait = !1, this.yieldPos = this.awaitPos = this.awaitIdentPos = 0, this.labels = [], this.undefinedExports = /* @__PURE__ */ Object.create(null), this.pos === 0 && t.allowHashBang && this.input.slice(0, 2) === "#!" && this.skipLineComment(2), this.scopeStack = [], this.enterScope(ke), this.regexpState = null, this.privateNameStack = [];
}, H = { inFunction: { configurable: !0 }, inGenerator: { configurable: !0 }, inAsync: { configurable: !0 }, canAwait: { configurable: !0 }, allowSuper: { configurable: !0 }, allowDirectSuper: { configurable: !0 }, treatFunctionsAsVar: { configurable: !0 }, allowNewDotTarget: { configurable: !0 }, inClassStaticBlock: { configurable: !0 } };
N.prototype.parse = function() {
  var t = this.options.program || this.startNode();
  return this.nextToken(), this.parseTopLevel(t);
};
H.inFunction.get = function() {
  return (this.currentVarScope().flags & _e) > 0;
};
H.inGenerator.get = function() {
  return (this.currentVarScope().flags & Di) > 0 && !this.currentVarScope().inClassFieldInit;
};
H.inAsync.get = function() {
  return (this.currentVarScope().flags & Nt) > 0 && !this.currentVarScope().inClassFieldInit;
};
H.canAwait.get = function() {
  for (var e = this.scopeStack.length - 1; e >= 0; e--) {
    var t = this.scopeStack[e];
    if (t.inClassFieldInit || t.flags & Be)
      return !1;
    if (t.flags & _e)
      return (t.flags & Nt) > 0;
  }
  return this.inModule && this.options.ecmaVersion >= 13 || this.options.allowAwaitOutsideFunction;
};
H.allowSuper.get = function() {
  var e = this.currentThisScope(), t = e.flags, i = e.inClassFieldInit;
  return (t & Ot) > 0 || i || this.options.allowSuperOutsideMethod;
};
H.allowDirectSuper.get = function() {
  return (this.currentThisScope().flags & Ui) > 0;
};
H.treatFunctionsAsVar.get = function() {
  return this.treatFunctionsAsVarInScope(this.currentScope());
};
H.allowNewDotTarget.get = function() {
  var e = this.currentThisScope(), t = e.flags, i = e.inClassFieldInit;
  return (t & (_e | Be)) > 0 || i;
};
H.inClassStaticBlock.get = function() {
  return (this.currentVarScope().flags & Be) > 0;
};
N.extend = function() {
  for (var t = [], i = arguments.length; i--; )
    t[i] = arguments[i];
  for (var r = this, s = 0; s < t.length; s++)
    r = t[s](r);
  return r;
};
N.parse = function(t, i) {
  return new this(i, t).parse();
};
N.parseExpressionAt = function(t, i, r) {
  var s = new this(r, t, i);
  return s.nextToken(), s.parseExpression();
};
N.tokenizer = function(t, i) {
  return new this(i, t);
};
Object.defineProperties(N.prototype, H);
var L = N.prototype, Cs = /^(?:'((?:\\[^]|[^'\\])*?)'|"((?:\\[^]|[^"\\])*?)")/;
L.strictDirective = function(e) {
  if (this.options.ecmaVersion < 5)
    return !1;
  for (; ; ) {
    D.lastIndex = e, e += D.exec(this.input)[0].length;
    var t = Cs.exec(this.input.slice(e));
    if (!t)
      return !1;
    if ((t[1] || t[2]) === "use strict") {
      D.lastIndex = e + t[0].length;
      var i = D.exec(this.input), r = i.index + i[0].length, s = this.input.charAt(r);
      return s === ";" || s === "}" || $.test(i[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(s) || s === "!" && this.input.charAt(r + 1) === "=");
    }
    e += t[0].length, D.lastIndex = e, e += D.exec(this.input)[0].length, this.input[e] === ";" && e++;
  }
};
L.eat = function(e) {
  return this.type === e ? (this.next(), !0) : !1;
};
L.isContextual = function(e) {
  return this.type === u.name && this.value === e && !this.containsEsc;
};
L.eatContextual = function(e) {
  return this.isContextual(e) ? (this.next(), !0) : !1;
};
L.expectContextual = function(e) {
  this.eatContextual(e) || this.unexpected();
};
L.canInsertSemicolon = function() {
  return this.type === u.eof || this.type === u.braceR || $.test(this.input.slice(this.lastTokEnd, this.start));
};
L.insertSemicolon = function() {
  if (this.canInsertSemicolon())
    return this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), !0;
};
L.semicolon = function() {
  !this.eat(u.semi) && !this.insertSemicolon() && this.unexpected();
};
L.afterTrailingComma = function(e, t) {
  if (this.type === e)
    return this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc), t || this.next(), !0;
};
L.expect = function(e) {
  this.eat(e) || this.unexpected();
};
L.unexpected = function(e) {
  this.raise(e ?? this.start, "Unexpected token");
};
var et = function() {
  this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
};
L.checkPatternErrors = function(e, t) {
  if (e) {
    e.trailingComma > -1 && this.raiseRecoverable(e.trailingComma, "Comma is not permitted after the rest element");
    var i = t ? e.parenthesizedAssign : e.parenthesizedBind;
    i > -1 && this.raiseRecoverable(i, t ? "Assigning to rvalue" : "Parenthesized pattern");
  }
};
L.checkExpressionErrors = function(e, t) {
  if (!e)
    return !1;
  var i = e.shorthandAssign, r = e.doubleProto;
  if (!t)
    return i >= 0 || r >= 0;
  i >= 0 && this.raise(i, "Shorthand property assignments are valid only in destructuring patterns"), r >= 0 && this.raiseRecoverable(r, "Redefinition of __proto__ property");
};
L.checkYieldAwaitInDefaultParams = function() {
  this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value"), this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value");
};
L.isSimpleAssignTarget = function(e) {
  return e.type === "ParenthesizedExpression" ? this.isSimpleAssignTarget(e.expression) : e.type === "Identifier" || e.type === "MemberExpression";
};
var y = N.prototype;
y.parseTopLevel = function(e) {
  var t = /* @__PURE__ */ Object.create(null);
  for (e.body || (e.body = []); this.type !== u.eof; ) {
    var i = this.parseStatement(null, !0, t);
    e.body.push(i);
  }
  if (this.inModule)
    for (var r = 0, s = Object.keys(this.undefinedExports); r < s.length; r += 1) {
      var n = s[r];
      this.raiseRecoverable(this.undefinedExports[n].start, "Export '" + n + "' is not defined");
    }
  return this.adaptDirectivePrologue(e.body), this.next(), e.sourceType = this.options.sourceType, this.finishNode(e, "Program");
};
var Bt = { kind: "loop" }, Es = { kind: "switch" };
y.isLet = function(e) {
  if (this.options.ecmaVersion < 6 || !this.isContextual("let"))
    return !1;
  D.lastIndex = this.pos;
  var t = D.exec(this.input), i = this.pos + t[0].length, r = this.input.charCodeAt(i);
  if (r === 91 || r === 92)
    return !0;
  if (e)
    return !1;
  if (r === 123 || r > 55295 && r < 56320)
    return !0;
  if (Q(r, !0)) {
    for (var s = i + 1; ve(r = this.input.charCodeAt(s), !0); )
      ++s;
    if (r === 92 || r > 55295 && r < 56320)
      return !0;
    var n = this.input.slice(i, s);
    if (!ms.test(n))
      return !0;
  }
  return !1;
};
y.isAsyncFunction = function() {
  if (this.options.ecmaVersion < 8 || !this.isContextual("async"))
    return !1;
  D.lastIndex = this.pos;
  var e = D.exec(this.input), t = this.pos + e[0].length, i;
  return !$.test(this.input.slice(this.pos, t)) && this.input.slice(t, t + 8) === "function" && (t + 8 === this.input.length || !(ve(i = this.input.charCodeAt(t + 8)) || i > 55295 && i < 56320));
};
y.parseStatement = function(e, t, i) {
  var r = this.type, s = this.startNode(), n;
  switch (this.isLet(e) && (r = u._var, n = "let"), r) {
    case u._break:
    case u._continue:
      return this.parseBreakContinueStatement(s, r.keyword);
    case u._debugger:
      return this.parseDebuggerStatement(s);
    case u._do:
      return this.parseDoStatement(s);
    case u._for:
      return this.parseForStatement(s);
    case u._function:
      return e && (this.strict || e !== "if" && e !== "label") && this.options.ecmaVersion >= 6 && this.unexpected(), this.parseFunctionStatement(s, !1, !e);
    case u._class:
      return e && this.unexpected(), this.parseClass(s, !0);
    case u._if:
      return this.parseIfStatement(s);
    case u._return:
      return this.parseReturnStatement(s);
    case u._switch:
      return this.parseSwitchStatement(s);
    case u._throw:
      return this.parseThrowStatement(s);
    case u._try:
      return this.parseTryStatement(s);
    case u._const:
    case u._var:
      return n = n || this.value, e && n !== "var" && this.unexpected(), this.parseVarStatement(s, n);
    case u._while:
      return this.parseWhileStatement(s);
    case u._with:
      return this.parseWithStatement(s);
    case u.braceL:
      return this.parseBlock(!0, s);
    case u.semi:
      return this.parseEmptyStatement(s);
    case u._export:
    case u._import:
      if (this.options.ecmaVersion > 10 && r === u._import) {
        D.lastIndex = this.pos;
        var a = D.exec(this.input), o = this.pos + a[0].length, c = this.input.charCodeAt(o);
        if (c === 40 || c === 46)
          return this.parseExpressionStatement(s, this.parseExpression());
      }
      return this.options.allowImportExportEverywhere || (t || this.raise(this.start, "'import' and 'export' may only appear at the top level"), this.inModule || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")), r === u._import ? this.parseImport(s) : this.parseExport(s, i);
    default:
      if (this.isAsyncFunction())
        return e && this.unexpected(), this.next(), this.parseFunctionStatement(s, !0, !e);
      var h = this.value, l = this.parseExpression();
      return r === u.name && l.type === "Identifier" && this.eat(u.colon) ? this.parseLabeledStatement(s, h, l, e) : this.parseExpressionStatement(s, l);
  }
};
y.parseBreakContinueStatement = function(e, t) {
  var i = t === "break";
  this.next(), this.eat(u.semi) || this.insertSemicolon() ? e.label = null : this.type !== u.name ? this.unexpected() : (e.label = this.parseIdent(), this.semicolon());
  for (var r = 0; r < this.labels.length; ++r) {
    var s = this.labels[r];
    if ((e.label == null || s.name === e.label.name) && (s.kind != null && (i || s.kind === "loop") || e.label && i))
      break;
  }
  return r === this.labels.length && this.raise(e.start, "Unsyntactic " + t), this.finishNode(e, i ? "BreakStatement" : "ContinueStatement");
};
y.parseDebuggerStatement = function(e) {
  return this.next(), this.semicolon(), this.finishNode(e, "DebuggerStatement");
};
y.parseDoStatement = function(e) {
  return this.next(), this.labels.push(Bt), e.body = this.parseStatement("do"), this.labels.pop(), this.expect(u._while), e.test = this.parseParenExpression(), this.options.ecmaVersion >= 6 ? this.eat(u.semi) : this.semicolon(), this.finishNode(e, "DoWhileStatement");
};
y.parseForStatement = function(e) {
  this.next();
  var t = this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await") ? this.lastTokStart : -1;
  if (this.labels.push(Bt), this.enterScope(0), this.expect(u.parenL), this.type === u.semi)
    return t > -1 && this.unexpected(t), this.parseFor(e, null);
  var i = this.isLet();
  if (this.type === u._var || this.type === u._const || i) {
    var r = this.startNode(), s = i ? "let" : this.value;
    return this.next(), this.parseVar(r, !0, s), this.finishNode(r, "VariableDeclaration"), (this.type === u._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && r.declarations.length === 1 ? (this.options.ecmaVersion >= 9 && (this.type === u._in ? t > -1 && this.unexpected(t) : e.await = t > -1), this.parseForIn(e, r)) : (t > -1 && this.unexpected(t), this.parseFor(e, r));
  }
  var n = this.isContextual("let"), a = !1, o = this.containsEsc, c = new et(), h = this.start, l = t > -1 ? this.parseExprSubscripts(c, "await") : this.parseExpression(!0, c);
  return this.type === u._in || (a = this.options.ecmaVersion >= 6 && this.isContextual("of")) ? (t > -1 ? (this.type === u._in && this.unexpected(t), e.await = !0) : a && this.options.ecmaVersion >= 8 && (l.start === h && !o && l.type === "Identifier" && l.name === "async" ? this.unexpected() : this.options.ecmaVersion >= 9 && (e.await = !1)), n && a && this.raise(l.start, "The left-hand side of a for-of loop may not start with 'let'."), this.toAssignable(l, !1, c), this.checkLValPattern(l), this.parseForIn(e, l)) : (this.checkExpressionErrors(c, !0), t > -1 && this.unexpected(t), this.parseFor(e, l));
};
y.parseFunctionStatement = function(e, t, i) {
  return this.next(), this.parseFunction(e, Ee | (i ? 0 : mt), !1, t);
};
y.parseIfStatement = function(e) {
  return this.next(), e.test = this.parseParenExpression(), e.consequent = this.parseStatement("if"), e.alternate = this.eat(u._else) ? this.parseStatement("if") : null, this.finishNode(e, "IfStatement");
};
y.parseReturnStatement = function(e) {
  return !this.inFunction && !this.options.allowReturnOutsideFunction && this.raise(this.start, "'return' outside of function"), this.next(), this.eat(u.semi) || this.insertSemicolon() ? e.argument = null : (e.argument = this.parseExpression(), this.semicolon()), this.finishNode(e, "ReturnStatement");
};
y.parseSwitchStatement = function(e) {
  this.next(), e.discriminant = this.parseParenExpression(), e.cases = [], this.expect(u.braceL), this.labels.push(Es), this.enterScope(0);
  for (var t, i = !1; this.type !== u.braceR; )
    if (this.type === u._case || this.type === u._default) {
      var r = this.type === u._case;
      t && this.finishNode(t, "SwitchCase"), e.cases.push(t = this.startNode()), t.consequent = [], this.next(), r ? t.test = this.parseExpression() : (i && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), i = !0, t.test = null), this.expect(u.colon);
    } else
      t || this.unexpected(), t.consequent.push(this.parseStatement(null));
  return this.exitScope(), t && this.finishNode(t, "SwitchCase"), this.next(), this.labels.pop(), this.finishNode(e, "SwitchStatement");
};
y.parseThrowStatement = function(e) {
  return this.next(), $.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"), e.argument = this.parseExpression(), this.semicolon(), this.finishNode(e, "ThrowStatement");
};
var As = [];
y.parseCatchClauseParam = function() {
  var e = this.parseBindingAtom(), t = e.type === "Identifier";
  return this.enterScope(t ? $i : 0), this.checkLValPattern(e, t ? qi : Z), this.expect(u.parenR), e;
};
y.parseTryStatement = function(e) {
  if (this.next(), e.block = this.parseBlock(), e.handler = null, this.type === u._catch) {
    var t = this.startNode();
    this.next(), this.eat(u.parenL) ? t.param = this.parseCatchClauseParam() : (this.options.ecmaVersion < 10 && this.unexpected(), t.param = null, this.enterScope(0)), t.body = this.parseBlock(!1), this.exitScope(), e.handler = this.finishNode(t, "CatchClause");
  }
  return e.finalizer = this.eat(u._finally) ? this.parseBlock() : null, !e.handler && !e.finalizer && this.raise(e.start, "Missing catch or finally clause"), this.finishNode(e, "TryStatement");
};
y.parseVarStatement = function(e, t, i) {
  return this.next(), this.parseVar(e, !1, t, i), this.semicolon(), this.finishNode(e, "VariableDeclaration");
};
y.parseWhileStatement = function(e) {
  return this.next(), e.test = this.parseParenExpression(), this.labels.push(Bt), e.body = this.parseStatement("while"), this.labels.pop(), this.finishNode(e, "WhileStatement");
};
y.parseWithStatement = function(e) {
  return this.strict && this.raise(this.start, "'with' in strict mode"), this.next(), e.object = this.parseParenExpression(), e.body = this.parseStatement("with"), this.finishNode(e, "WithStatement");
};
y.parseEmptyStatement = function(e) {
  return this.next(), this.finishNode(e, "EmptyStatement");
};
y.parseLabeledStatement = function(e, t, i, r) {
  for (var s = 0, n = this.labels; s < n.length; s += 1) {
    var a = n[s];
    a.name === t && this.raise(i.start, "Label '" + t + "' is already declared");
  }
  for (var o = this.type.isLoop ? "loop" : this.type === u._switch ? "switch" : null, c = this.labels.length - 1; c >= 0; c--) {
    var h = this.labels[c];
    if (h.statementStart === e.start)
      h.statementStart = this.start, h.kind = o;
    else
      break;
  }
  return this.labels.push({ name: t, kind: o, statementStart: this.start }), e.body = this.parseStatement(r ? r.indexOf("label") === -1 ? r + "label" : r : "label"), this.labels.pop(), e.label = i, this.finishNode(e, "LabeledStatement");
};
y.parseExpressionStatement = function(e, t) {
  return e.expression = t, this.semicolon(), this.finishNode(e, "ExpressionStatement");
};
y.parseBlock = function(e, t, i) {
  for (e === void 0 && (e = !0), t === void 0 && (t = this.startNode()), t.body = [], this.expect(u.braceL), e && this.enterScope(0); this.type !== u.braceR; ) {
    var r = this.parseStatement(null);
    t.body.push(r);
  }
  return i && (this.strict = !1), this.next(), e && this.exitScope(), this.finishNode(t, "BlockStatement");
};
y.parseFor = function(e, t) {
  return e.init = t, this.expect(u.semi), e.test = this.type === u.semi ? null : this.parseExpression(), this.expect(u.semi), e.update = this.type === u.parenR ? null : this.parseExpression(), this.expect(u.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e, "ForStatement");
};
y.parseForIn = function(e, t) {
  var i = this.type === u._in;
  return this.next(), t.type === "VariableDeclaration" && t.declarations[0].init != null && (!i || this.options.ecmaVersion < 8 || this.strict || t.kind !== "var" || t.declarations[0].id.type !== "Identifier") && this.raise(
    t.start,
    (i ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"
  ), e.left = t, e.right = i ? this.parseExpression() : this.parseMaybeAssign(), this.expect(u.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e, i ? "ForInStatement" : "ForOfStatement");
};
y.parseVar = function(e, t, i, r) {
  for (e.declarations = [], e.kind = i; ; ) {
    var s = this.startNode();
    if (this.parseVarId(s, i), this.eat(u.eq) ? s.init = this.parseMaybeAssign(t) : !r && i === "const" && !(this.type === u._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) ? this.unexpected() : !r && s.id.type !== "Identifier" && !(t && (this.type === u._in || this.isContextual("of"))) ? this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value") : s.init = null, e.declarations.push(this.finishNode(s, "VariableDeclarator")), !this.eat(u.comma))
      break;
  }
  return e;
};
y.parseVarId = function(e, t) {
  e.id = this.parseBindingAtom(), this.checkLValPattern(e.id, t === "var" ? Vt : Z, !1);
};
var Ee = 1, mt = 2, Wi = 4;
y.parseFunction = function(e, t, i, r, s) {
  this.initFunction(e), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !r) && (this.type === u.star && t & mt && this.unexpected(), e.generator = this.eat(u.star)), this.options.ecmaVersion >= 8 && (e.async = !!r), t & Ee && (e.id = t & Wi && this.type !== u.name ? null : this.parseIdent(), e.id && !(t & mt) && this.checkLValSimple(e.id, this.strict || e.generator || e.async ? this.treatFunctionsAsVar ? Vt : Z : Gi));
  var n = this.yieldPos, a = this.awaitPos, o = this.awaitIdentPos;
  return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(Rt(e.async, e.generator)), t & Ee || (e.id = this.type === u.name ? this.parseIdent() : null), this.parseFunctionParams(e), this.parseFunctionBody(e, i, !1, s), this.yieldPos = n, this.awaitPos = a, this.awaitIdentPos = o, this.finishNode(e, t & Ee ? "FunctionDeclaration" : "FunctionExpression");
};
y.parseFunctionParams = function(e) {
  this.expect(u.parenL), e.params = this.parseBindingList(u.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams();
};
y.parseClass = function(e, t) {
  this.next();
  var i = this.strict;
  this.strict = !0, this.parseClassId(e, t), this.parseClassSuper(e);
  var r = this.enterClassBody(), s = this.startNode(), n = !1;
  for (s.body = [], this.expect(u.braceL); this.type !== u.braceR; ) {
    var a = this.parseClassElement(e.superClass !== null);
    a && (s.body.push(a), a.type === "MethodDefinition" && a.kind === "constructor" ? (n && this.raiseRecoverable(a.start, "Duplicate constructor in the same class"), n = !0) : a.key && a.key.type === "PrivateIdentifier" && Is(r, a) && this.raiseRecoverable(a.key.start, "Identifier '#" + a.key.name + "' has already been declared"));
  }
  return this.strict = i, this.next(), e.body = this.finishNode(s, "ClassBody"), this.exitClassBody(), this.finishNode(e, t ? "ClassDeclaration" : "ClassExpression");
};
y.parseClassElement = function(e) {
  if (this.eat(u.semi))
    return null;
  var t = this.options.ecmaVersion, i = this.startNode(), r = "", s = !1, n = !1, a = "method", o = !1;
  if (this.eatContextual("static")) {
    if (t >= 13 && this.eat(u.braceL))
      return this.parseClassStaticBlock(i), i;
    this.isClassElementNameStart() || this.type === u.star ? o = !0 : r = "static";
  }
  if (i.static = o, !r && t >= 8 && this.eatContextual("async") && ((this.isClassElementNameStart() || this.type === u.star) && !this.canInsertSemicolon() ? n = !0 : r = "async"), !r && (t >= 9 || !n) && this.eat(u.star) && (s = !0), !r && !n && !s) {
    var c = this.value;
    (this.eatContextual("get") || this.eatContextual("set")) && (this.isClassElementNameStart() ? a = c : r = c);
  }
  if (r ? (i.computed = !1, i.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc), i.key.name = r, this.finishNode(i.key, "Identifier")) : this.parseClassElementName(i), t < 13 || this.type === u.parenL || a !== "method" || s || n) {
    var h = !i.static && qe(i, "constructor"), l = h && e;
    h && a !== "method" && this.raise(i.key.start, "Constructor can't have get/set modifier"), i.kind = h ? "constructor" : a, this.parseClassMethod(i, s, n, l);
  } else
    this.parseClassField(i);
  return i;
};
y.isClassElementNameStart = function() {
  return this.type === u.name || this.type === u.privateId || this.type === u.num || this.type === u.string || this.type === u.bracketL || this.type.keyword;
};
y.parseClassElementName = function(e) {
  this.type === u.privateId ? (this.value === "constructor" && this.raise(this.start, "Classes can't have an element named '#constructor'"), e.computed = !1, e.key = this.parsePrivateIdent()) : this.parsePropertyName(e);
};
y.parseClassMethod = function(e, t, i, r) {
  var s = e.key;
  e.kind === "constructor" ? (t && this.raise(s.start, "Constructor can't be a generator"), i && this.raise(s.start, "Constructor can't be an async method")) : e.static && qe(e, "prototype") && this.raise(s.start, "Classes may not have a static property named prototype");
  var n = e.value = this.parseMethod(t, i, r);
  return e.kind === "get" && n.params.length !== 0 && this.raiseRecoverable(n.start, "getter should have no params"), e.kind === "set" && n.params.length !== 1 && this.raiseRecoverable(n.start, "setter should have exactly one param"), e.kind === "set" && n.params[0].type === "RestElement" && this.raiseRecoverable(n.params[0].start, "Setter cannot use rest params"), this.finishNode(e, "MethodDefinition");
};
y.parseClassField = function(e) {
  if (qe(e, "constructor") ? this.raise(e.key.start, "Classes can't have a field named 'constructor'") : e.static && qe(e, "prototype") && this.raise(e.key.start, "Classes can't have a static field named 'prototype'"), this.eat(u.eq)) {
    var t = this.currentThisScope(), i = t.inClassFieldInit;
    t.inClassFieldInit = !0, e.value = this.parseMaybeAssign(), t.inClassFieldInit = i;
  } else
    e.value = null;
  return this.semicolon(), this.finishNode(e, "PropertyDefinition");
};
y.parseClassStaticBlock = function(e) {
  e.body = [];
  var t = this.labels;
  for (this.labels = [], this.enterScope(Be | Ot); this.type !== u.braceR; ) {
    var i = this.parseStatement(null);
    e.body.push(i);
  }
  return this.next(), this.exitScope(), this.labels = t, this.finishNode(e, "StaticBlock");
};
y.parseClassId = function(e, t) {
  this.type === u.name ? (e.id = this.parseIdent(), t && this.checkLValSimple(e.id, Z, !1)) : (t === !0 && this.unexpected(), e.id = null);
};
y.parseClassSuper = function(e) {
  e.superClass = this.eat(u._extends) ? this.parseExprSubscripts(null, !1) : null;
};
y.enterClassBody = function() {
  var e = { declared: /* @__PURE__ */ Object.create(null), used: [] };
  return this.privateNameStack.push(e), e.declared;
};
y.exitClassBody = function() {
  var e = this.privateNameStack.pop(), t = e.declared, i = e.used;
  if (this.options.checkPrivateFields)
    for (var r = this.privateNameStack.length, s = r === 0 ? null : this.privateNameStack[r - 1], n = 0; n < i.length; ++n) {
      var a = i[n];
      Ve(t, a.name) || (s ? s.used.push(a) : this.raiseRecoverable(a.start, "Private field '#" + a.name + "' must be declared in an enclosing class"));
    }
};
function Is(e, t) {
  var i = t.key.name, r = e[i], s = "true";
  return t.type === "MethodDefinition" && (t.kind === "get" || t.kind === "set") && (s = (t.static ? "s" : "i") + t.kind), r === "iget" && s === "iset" || r === "iset" && s === "iget" || r === "sget" && s === "sset" || r === "sset" && s === "sget" ? (e[i] = "true", !1) : r ? !0 : (e[i] = s, !1);
}
function qe(e, t) {
  var i = e.computed, r = e.key;
  return !i && (r.type === "Identifier" && r.name === t || r.type === "Literal" && r.value === t);
}
y.parseExportAllDeclaration = function(e, t) {
  return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (e.exported = this.parseModuleExportName(), this.checkExport(t, e.exported, this.lastTokStart)) : e.exported = null), this.expectContextual("from"), this.type !== u.string && this.unexpected(), e.source = this.parseExprAtom(), this.semicolon(), this.finishNode(e, "ExportAllDeclaration");
};
y.parseExport = function(e, t) {
  if (this.next(), this.eat(u.star))
    return this.parseExportAllDeclaration(e, t);
  if (this.eat(u._default))
    return this.checkExport(t, "default", this.lastTokStart), e.declaration = this.parseExportDefaultDeclaration(), this.finishNode(e, "ExportDefaultDeclaration");
  if (this.shouldParseExportStatement())
    e.declaration = this.parseExportDeclaration(e), e.declaration.type === "VariableDeclaration" ? this.checkVariableExport(t, e.declaration.declarations) : this.checkExport(t, e.declaration.id, e.declaration.id.start), e.specifiers = [], e.source = null;
  else {
    if (e.declaration = null, e.specifiers = this.parseExportSpecifiers(t), this.eatContextual("from"))
      this.type !== u.string && this.unexpected(), e.source = this.parseExprAtom();
    else {
      for (var i = 0, r = e.specifiers; i < r.length; i += 1) {
        var s = r[i];
        this.checkUnreserved(s.local), this.checkLocalExport(s.local), s.local.type === "Literal" && this.raise(s.local.start, "A string literal cannot be used as an exported binding without `from`.");
      }
      e.source = null;
    }
    this.semicolon();
  }
  return this.finishNode(e, "ExportNamedDeclaration");
};
y.parseExportDeclaration = function(e) {
  return this.parseStatement(null);
};
y.parseExportDefaultDeclaration = function() {
  var e;
  if (this.type === u._function || (e = this.isAsyncFunction())) {
    var t = this.startNode();
    return this.next(), e && this.next(), this.parseFunction(t, Ee | Wi, !1, e);
  } else if (this.type === u._class) {
    var i = this.startNode();
    return this.parseClass(i, "nullableID");
  } else {
    var r = this.parseMaybeAssign();
    return this.semicolon(), r;
  }
};
y.checkExport = function(e, t, i) {
  e && (typeof t != "string" && (t = t.type === "Identifier" ? t.name : t.value), Ve(e, t) && this.raiseRecoverable(i, "Duplicate export '" + t + "'"), e[t] = !0);
};
y.checkPatternExport = function(e, t) {
  var i = t.type;
  if (i === "Identifier")
    this.checkExport(e, t, t.start);
  else if (i === "ObjectPattern")
    for (var r = 0, s = t.properties; r < s.length; r += 1) {
      var n = s[r];
      this.checkPatternExport(e, n);
    }
  else if (i === "ArrayPattern")
    for (var a = 0, o = t.elements; a < o.length; a += 1) {
      var c = o[a];
      c && this.checkPatternExport(e, c);
    }
  else
    i === "Property" ? this.checkPatternExport(e, t.value) : i === "AssignmentPattern" ? this.checkPatternExport(e, t.left) : i === "RestElement" && this.checkPatternExport(e, t.argument);
};
y.checkVariableExport = function(e, t) {
  if (e)
    for (var i = 0, r = t; i < r.length; i += 1) {
      var s = r[i];
      this.checkPatternExport(e, s.id);
    }
};
y.shouldParseExportStatement = function() {
  return this.type.keyword === "var" || this.type.keyword === "const" || this.type.keyword === "class" || this.type.keyword === "function" || this.isLet() || this.isAsyncFunction();
};
y.parseExportSpecifier = function(e) {
  var t = this.startNode();
  return t.local = this.parseModuleExportName(), t.exported = this.eatContextual("as") ? this.parseModuleExportName() : t.local, this.checkExport(
    e,
    t.exported,
    t.exported.start
  ), this.finishNode(t, "ExportSpecifier");
};
y.parseExportSpecifiers = function(e) {
  var t = [], i = !0;
  for (this.expect(u.braceL); !this.eat(u.braceR); ) {
    if (i)
      i = !1;
    else if (this.expect(u.comma), this.afterTrailingComma(u.braceR))
      break;
    t.push(this.parseExportSpecifier(e));
  }
  return t;
};
y.parseImport = function(e) {
  return this.next(), this.type === u.string ? (e.specifiers = As, e.source = this.parseExprAtom()) : (e.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), e.source = this.type === u.string ? this.parseExprAtom() : this.unexpected()), this.semicolon(), this.finishNode(e, "ImportDeclaration");
};
y.parseImportSpecifier = function() {
  var e = this.startNode();
  return e.imported = this.parseModuleExportName(), this.eatContextual("as") ? e.local = this.parseIdent() : (this.checkUnreserved(e.imported), e.local = e.imported), this.checkLValSimple(e.local, Z), this.finishNode(e, "ImportSpecifier");
};
y.parseImportDefaultSpecifier = function() {
  var e = this.startNode();
  return e.local = this.parseIdent(), this.checkLValSimple(e.local, Z), this.finishNode(e, "ImportDefaultSpecifier");
};
y.parseImportNamespaceSpecifier = function() {
  var e = this.startNode();
  return this.next(), this.expectContextual("as"), e.local = this.parseIdent(), this.checkLValSimple(e.local, Z), this.finishNode(e, "ImportNamespaceSpecifier");
};
y.parseImportSpecifiers = function() {
  var e = [], t = !0;
  if (this.type === u.name && (e.push(this.parseImportDefaultSpecifier()), !this.eat(u.comma)))
    return e;
  if (this.type === u.star)
    return e.push(this.parseImportNamespaceSpecifier()), e;
  for (this.expect(u.braceL); !this.eat(u.braceR); ) {
    if (t)
      t = !1;
    else if (this.expect(u.comma), this.afterTrailingComma(u.braceR))
      break;
    e.push(this.parseImportSpecifier());
  }
  return e;
};
y.parseModuleExportName = function() {
  if (this.options.ecmaVersion >= 13 && this.type === u.string) {
    var e = this.parseLiteral(this.value);
    return _s.test(e.value) && this.raise(e.start, "An export name cannot include a lone surrogate."), e;
  }
  return this.parseIdent(!0);
};
y.adaptDirectivePrologue = function(e) {
  for (var t = 0; t < e.length && this.isDirectiveCandidate(e[t]); ++t)
    e[t].directive = e[t].expression.raw.slice(1, -1);
};
y.isDirectiveCandidate = function(e) {
  return this.options.ecmaVersion >= 5 && e.type === "ExpressionStatement" && e.expression.type === "Literal" && typeof e.expression.value == "string" && // Reject parenthesized strings.
  (this.input[e.start] === '"' || this.input[e.start] === "'");
};
var U = N.prototype;
U.toAssignable = function(e, t, i) {
  if (this.options.ecmaVersion >= 6 && e)
    switch (e.type) {
      case "Identifier":
        this.inAsync && e.name === "await" && this.raise(e.start, "Cannot use 'await' as identifier inside an async function");
        break;
      case "ObjectPattern":
      case "ArrayPattern":
      case "AssignmentPattern":
      case "RestElement":
        break;
      case "ObjectExpression":
        e.type = "ObjectPattern", i && this.checkPatternErrors(i, !0);
        for (var r = 0, s = e.properties; r < s.length; r += 1) {
          var n = s[r];
          this.toAssignable(n, t), n.type === "RestElement" && (n.argument.type === "ArrayPattern" || n.argument.type === "ObjectPattern") && this.raise(n.argument.start, "Unexpected token");
        }
        break;
      case "Property":
        e.kind !== "init" && this.raise(e.key.start, "Object pattern can't contain getter or setter"), this.toAssignable(e.value, t);
        break;
      case "ArrayExpression":
        e.type = "ArrayPattern", i && this.checkPatternErrors(i, !0), this.toAssignableList(e.elements, t);
        break;
      case "SpreadElement":
        e.type = "RestElement", this.toAssignable(e.argument, t), e.argument.type === "AssignmentPattern" && this.raise(e.argument.start, "Rest elements cannot have a default value");
        break;
      case "AssignmentExpression":
        e.operator !== "=" && this.raise(e.left.end, "Only '=' operator can be used for specifying default value."), e.type = "AssignmentPattern", delete e.operator, this.toAssignable(e.left, t);
        break;
      case "ParenthesizedExpression":
        this.toAssignable(e.expression, t, i);
        break;
      case "ChainExpression":
        this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
        break;
      case "MemberExpression":
        if (!t)
          break;
      default:
        this.raise(e.start, "Assigning to rvalue");
    }
  else
    i && this.checkPatternErrors(i, !0);
  return e;
};
U.toAssignableList = function(e, t) {
  for (var i = e.length, r = 0; r < i; r++) {
    var s = e[r];
    s && this.toAssignable(s, t);
  }
  if (i) {
    var n = e[i - 1];
    this.options.ecmaVersion === 6 && t && n && n.type === "RestElement" && n.argument.type !== "Identifier" && this.unexpected(n.argument.start);
  }
  return e;
};
U.parseSpread = function(e) {
  var t = this.startNode();
  return this.next(), t.argument = this.parseMaybeAssign(!1, e), this.finishNode(t, "SpreadElement");
};
U.parseRestBinding = function() {
  var e = this.startNode();
  return this.next(), this.options.ecmaVersion === 6 && this.type !== u.name && this.unexpected(), e.argument = this.parseBindingAtom(), this.finishNode(e, "RestElement");
};
U.parseBindingAtom = function() {
  if (this.options.ecmaVersion >= 6)
    switch (this.type) {
      case u.bracketL:
        var e = this.startNode();
        return this.next(), e.elements = this.parseBindingList(u.bracketR, !0, !0), this.finishNode(e, "ArrayPattern");
      case u.braceL:
        return this.parseObj(!0);
    }
  return this.parseIdent();
};
U.parseBindingList = function(e, t, i, r) {
  for (var s = [], n = !0; !this.eat(e); )
    if (n ? n = !1 : this.expect(u.comma), t && this.type === u.comma)
      s.push(null);
    else {
      if (i && this.afterTrailingComma(e))
        break;
      if (this.type === u.ellipsis) {
        var a = this.parseRestBinding();
        this.parseBindingListItem(a), s.push(a), this.type === u.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.expect(e);
        break;
      } else
        s.push(this.parseAssignableListItem(r));
    }
  return s;
};
U.parseAssignableListItem = function(e) {
  var t = this.parseMaybeDefault(this.start, this.startLoc);
  return this.parseBindingListItem(t), t;
};
U.parseBindingListItem = function(e) {
  return e;
};
U.parseMaybeDefault = function(e, t, i) {
  if (i = i || this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(u.eq))
    return i;
  var r = this.startNodeAt(e, t);
  return r.left = i, r.right = this.parseMaybeAssign(), this.finishNode(r, "AssignmentPattern");
};
U.checkLValSimple = function(e, t, i) {
  t === void 0 && (t = Ge);
  var r = t !== Ge;
  switch (e.type) {
    case "Identifier":
      this.strict && this.reservedWordsStrictBind.test(e.name) && this.raiseRecoverable(e.start, (r ? "Binding " : "Assigning to ") + e.name + " in strict mode"), r && (t === Z && e.name === "let" && this.raiseRecoverable(e.start, "let is disallowed as a lexically bound name"), i && (Ve(i, e.name) && this.raiseRecoverable(e.start, "Argument name clash"), i[e.name] = !0), t !== Hi && this.declareName(e.name, t, e.start));
      break;
    case "ChainExpression":
      this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
      break;
    case "MemberExpression":
      r && this.raiseRecoverable(e.start, "Binding member expression");
      break;
    case "ParenthesizedExpression":
      return r && this.raiseRecoverable(e.start, "Binding parenthesized expression"), this.checkLValSimple(e.expression, t, i);
    default:
      this.raise(e.start, (r ? "Binding" : "Assigning to") + " rvalue");
  }
};
U.checkLValPattern = function(e, t, i) {
  switch (t === void 0 && (t = Ge), e.type) {
    case "ObjectPattern":
      for (var r = 0, s = e.properties; r < s.length; r += 1) {
        var n = s[r];
        this.checkLValInnerPattern(n, t, i);
      }
      break;
    case "ArrayPattern":
      for (var a = 0, o = e.elements; a < o.length; a += 1) {
        var c = o[a];
        c && this.checkLValInnerPattern(c, t, i);
      }
      break;
    default:
      this.checkLValSimple(e, t, i);
  }
};
U.checkLValInnerPattern = function(e, t, i) {
  switch (t === void 0 && (t = Ge), e.type) {
    case "Property":
      this.checkLValInnerPattern(e.value, t, i);
      break;
    case "AssignmentPattern":
      this.checkLValPattern(e.left, t, i);
      break;
    case "RestElement":
      this.checkLValPattern(e.argument, t, i);
      break;
    default:
      this.checkLValPattern(e, t, i);
  }
};
var G = function(t, i, r, s, n) {
  this.token = t, this.isExpr = !!i, this.preserveSpace = !!r, this.override = s, this.generator = !!n;
}, T = {
  b_stat: new G("{", !1),
  b_expr: new G("{", !0),
  b_tmpl: new G("${", !1),
  p_stat: new G("(", !1),
  p_expr: new G("(", !0),
  q_tmpl: new G("`", !0, !0, function(e) {
    return e.tryReadTemplateToken();
  }),
  f_stat: new G("function", !1),
  f_expr: new G("function", !0),
  f_expr_gen: new G("function", !0, !1, null, !0),
  f_gen: new G("function", !1, !1, null, !0)
}, we = N.prototype;
we.initialContext = function() {
  return [T.b_stat];
};
we.curContext = function() {
  return this.context[this.context.length - 1];
};
we.braceIsBlock = function(e) {
  var t = this.curContext();
  return t === T.f_expr || t === T.f_stat ? !0 : e === u.colon && (t === T.b_stat || t === T.b_expr) ? !t.isExpr : e === u._return || e === u.name && this.exprAllowed ? $.test(this.input.slice(this.lastTokEnd, this.start)) : e === u._else || e === u.semi || e === u.eof || e === u.parenR || e === u.arrow ? !0 : e === u.braceL ? t === T.b_stat : e === u._var || e === u._const || e === u.name ? !1 : !this.exprAllowed;
};
we.inGeneratorContext = function() {
  for (var e = this.context.length - 1; e >= 1; e--) {
    var t = this.context[e];
    if (t.token === "function")
      return t.generator;
  }
  return !1;
};
we.updateContext = function(e) {
  var t, i = this.type;
  i.keyword && e === u.dot ? this.exprAllowed = !1 : (t = i.updateContext) ? t.call(this, e) : this.exprAllowed = i.beforeExpr;
};
we.overrideContext = function(e) {
  this.curContext() !== e && (this.context[this.context.length - 1] = e);
};
u.parenR.updateContext = u.braceR.updateContext = function() {
  if (this.context.length === 1) {
    this.exprAllowed = !0;
    return;
  }
  var e = this.context.pop();
  e === T.b_stat && this.curContext().token === "function" && (e = this.context.pop()), this.exprAllowed = !e.isExpr;
};
u.braceL.updateContext = function(e) {
  this.context.push(this.braceIsBlock(e) ? T.b_stat : T.b_expr), this.exprAllowed = !0;
};
u.dollarBraceL.updateContext = function() {
  this.context.push(T.b_tmpl), this.exprAllowed = !0;
};
u.parenL.updateContext = function(e) {
  var t = e === u._if || e === u._for || e === u._with || e === u._while;
  this.context.push(t ? T.p_stat : T.p_expr), this.exprAllowed = !0;
};
u.incDec.updateContext = function() {
};
u._function.updateContext = u._class.updateContext = function(e) {
  e.beforeExpr && e !== u._else && !(e === u.semi && this.curContext() !== T.p_stat) && !(e === u._return && $.test(this.input.slice(this.lastTokEnd, this.start))) && !((e === u.colon || e === u.braceL) && this.curContext() === T.b_stat) ? this.context.push(T.f_expr) : this.context.push(T.f_stat), this.exprAllowed = !1;
};
u.colon.updateContext = function() {
  this.curContext().token === "function" && this.context.pop(), this.exprAllowed = !0;
};
u.backQuote.updateContext = function() {
  this.curContext() === T.q_tmpl ? this.context.pop() : this.context.push(T.q_tmpl), this.exprAllowed = !1;
};
u.star.updateContext = function(e) {
  if (e === u._function) {
    var t = this.context.length - 1;
    this.context[t] === T.f_expr ? this.context[t] = T.f_expr_gen : this.context[t] = T.f_gen;
  }
  this.exprAllowed = !0;
};
u.name.updateContext = function(e) {
  var t = !1;
  this.options.ecmaVersion >= 6 && e !== u.dot && (this.value === "of" && !this.exprAllowed || this.value === "yield" && this.inGeneratorContext()) && (t = !0), this.exprAllowed = t;
};
var w = N.prototype;
w.checkPropClash = function(e, t, i) {
  if (!(this.options.ecmaVersion >= 9 && e.type === "SpreadElement") && !(this.options.ecmaVersion >= 6 && (e.computed || e.method || e.shorthand))) {
    var r = e.key, s;
    switch (r.type) {
      case "Identifier":
        s = r.name;
        break;
      case "Literal":
        s = String(r.value);
        break;
      default:
        return;
    }
    var n = e.kind;
    if (this.options.ecmaVersion >= 6) {
      s === "__proto__" && n === "init" && (t.proto && (i ? i.doubleProto < 0 && (i.doubleProto = r.start) : this.raiseRecoverable(r.start, "Redefinition of __proto__ property")), t.proto = !0);
      return;
    }
    s = "$" + s;
    var a = t[s];
    if (a) {
      var o;
      n === "init" ? o = this.strict && a.init || a.get || a.set : o = a.init || a[n], o && this.raiseRecoverable(r.start, "Redefinition of property");
    } else
      a = t[s] = {
        init: !1,
        get: !1,
        set: !1
      };
    a[n] = !0;
  }
};
w.parseExpression = function(e, t) {
  var i = this.start, r = this.startLoc, s = this.parseMaybeAssign(e, t);
  if (this.type === u.comma) {
    var n = this.startNodeAt(i, r);
    for (n.expressions = [s]; this.eat(u.comma); )
      n.expressions.push(this.parseMaybeAssign(e, t));
    return this.finishNode(n, "SequenceExpression");
  }
  return s;
};
w.parseMaybeAssign = function(e, t, i) {
  if (this.isContextual("yield")) {
    if (this.inGenerator)
      return this.parseYield(e);
    this.exprAllowed = !1;
  }
  var r = !1, s = -1, n = -1, a = -1;
  t ? (s = t.parenthesizedAssign, n = t.trailingComma, a = t.doubleProto, t.parenthesizedAssign = t.trailingComma = -1) : (t = new et(), r = !0);
  var o = this.start, c = this.startLoc;
  (this.type === u.parenL || this.type === u.name) && (this.potentialArrowAt = this.start, this.potentialArrowInForAwait = e === "await");
  var h = this.parseMaybeConditional(e, t);
  if (i && (h = i.call(this, h, o, c)), this.type.isAssign) {
    var l = this.startNodeAt(o, c);
    return l.operator = this.value, this.type === u.eq && (h = this.toAssignable(h, !1, t)), r || (t.parenthesizedAssign = t.trailingComma = t.doubleProto = -1), t.shorthandAssign >= h.start && (t.shorthandAssign = -1), this.type === u.eq ? this.checkLValPattern(h) : this.checkLValSimple(h), l.left = h, this.next(), l.right = this.parseMaybeAssign(e), a > -1 && (t.doubleProto = a), this.finishNode(l, "AssignmentExpression");
  } else
    r && this.checkExpressionErrors(t, !0);
  return s > -1 && (t.parenthesizedAssign = s), n > -1 && (t.trailingComma = n), h;
};
w.parseMaybeConditional = function(e, t) {
  var i = this.start, r = this.startLoc, s = this.parseExprOps(e, t);
  if (this.checkExpressionErrors(t))
    return s;
  if (this.eat(u.question)) {
    var n = this.startNodeAt(i, r);
    return n.test = s, n.consequent = this.parseMaybeAssign(), this.expect(u.colon), n.alternate = this.parseMaybeAssign(e), this.finishNode(n, "ConditionalExpression");
  }
  return s;
};
w.parseExprOps = function(e, t) {
  var i = this.start, r = this.startLoc, s = this.parseMaybeUnary(t, !1, !1, e);
  return this.checkExpressionErrors(t) || s.start === i && s.type === "ArrowFunctionExpression" ? s : this.parseExprOp(s, i, r, -1, e);
};
w.parseExprOp = function(e, t, i, r, s) {
  var n = this.type.binop;
  if (n != null && (!s || this.type !== u._in) && n > r) {
    var a = this.type === u.logicalOR || this.type === u.logicalAND, o = this.type === u.coalesce;
    o && (n = u.logicalAND.binop);
    var c = this.value;
    this.next();
    var h = this.start, l = this.startLoc, p = this.parseExprOp(this.parseMaybeUnary(null, !1, !1, s), h, l, n, s), f = this.buildBinary(t, i, e, p, c, a || o);
    return (a && this.type === u.coalesce || o && (this.type === u.logicalOR || this.type === u.logicalAND)) && this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"), this.parseExprOp(f, t, i, r, s);
  }
  return e;
};
w.buildBinary = function(e, t, i, r, s, n) {
  r.type === "PrivateIdentifier" && this.raise(r.start, "Private identifier can only be left side of binary expression");
  var a = this.startNodeAt(e, t);
  return a.left = i, a.operator = s, a.right = r, this.finishNode(a, n ? "LogicalExpression" : "BinaryExpression");
};
w.parseMaybeUnary = function(e, t, i, r) {
  var s = this.start, n = this.startLoc, a;
  if (this.isContextual("await") && this.canAwait)
    a = this.parseAwait(r), t = !0;
  else if (this.type.prefix) {
    var o = this.startNode(), c = this.type === u.incDec;
    o.operator = this.value, o.prefix = !0, this.next(), o.argument = this.parseMaybeUnary(null, !0, c, r), this.checkExpressionErrors(e, !0), c ? this.checkLValSimple(o.argument) : this.strict && o.operator === "delete" && zi(o.argument) ? this.raiseRecoverable(o.start, "Deleting local variable in strict mode") : o.operator === "delete" && vt(o.argument) ? this.raiseRecoverable(o.start, "Private fields can not be deleted") : t = !0, a = this.finishNode(o, c ? "UpdateExpression" : "UnaryExpression");
  } else if (!t && this.type === u.privateId)
    (r || this.privateNameStack.length === 0) && this.options.checkPrivateFields && this.unexpected(), a = this.parsePrivateIdent(), this.type !== u._in && this.unexpected();
  else {
    if (a = this.parseExprSubscripts(e, r), this.checkExpressionErrors(e))
      return a;
    for (; this.type.postfix && !this.canInsertSemicolon(); ) {
      var h = this.startNodeAt(s, n);
      h.operator = this.value, h.prefix = !1, h.argument = a, this.checkLValSimple(a), this.next(), a = this.finishNode(h, "UpdateExpression");
    }
  }
  if (!i && this.eat(u.starstar))
    if (t)
      this.unexpected(this.lastTokStart);
    else
      return this.buildBinary(s, n, a, this.parseMaybeUnary(null, !1, !1, r), "**", !1);
  else
    return a;
};
function zi(e) {
  return e.type === "Identifier" || e.type === "ParenthesizedExpression" && zi(e.expression);
}
function vt(e) {
  return e.type === "MemberExpression" && e.property.type === "PrivateIdentifier" || e.type === "ChainExpression" && vt(e.expression) || e.type === "ParenthesizedExpression" && vt(e.expression);
}
w.parseExprSubscripts = function(e, t) {
  var i = this.start, r = this.startLoc, s = this.parseExprAtom(e, t);
  if (s.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")")
    return s;
  var n = this.parseSubscripts(s, i, r, !1, t);
  return e && n.type === "MemberExpression" && (e.parenthesizedAssign >= n.start && (e.parenthesizedAssign = -1), e.parenthesizedBind >= n.start && (e.parenthesizedBind = -1), e.trailingComma >= n.start && (e.trailingComma = -1)), n;
};
w.parseSubscripts = function(e, t, i, r, s) {
  for (var n = this.options.ecmaVersion >= 8 && e.type === "Identifier" && e.name === "async" && this.lastTokEnd === e.end && !this.canInsertSemicolon() && e.end - e.start === 5 && this.potentialArrowAt === e.start, a = !1; ; ) {
    var o = this.parseSubscript(e, t, i, r, n, a, s);
    if (o.optional && (a = !0), o === e || o.type === "ArrowFunctionExpression") {
      if (a) {
        var c = this.startNodeAt(t, i);
        c.expression = o, o = this.finishNode(c, "ChainExpression");
      }
      return o;
    }
    e = o;
  }
};
w.shouldParseAsyncArrow = function() {
  return !this.canInsertSemicolon() && this.eat(u.arrow);
};
w.parseSubscriptAsyncArrow = function(e, t, i, r) {
  return this.parseArrowExpression(this.startNodeAt(e, t), i, !0, r);
};
w.parseSubscript = function(e, t, i, r, s, n, a) {
  var o = this.options.ecmaVersion >= 11, c = o && this.eat(u.questionDot);
  r && c && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
  var h = this.eat(u.bracketL);
  if (h || c && this.type !== u.parenL && this.type !== u.backQuote || this.eat(u.dot)) {
    var l = this.startNodeAt(t, i);
    l.object = e, h ? (l.property = this.parseExpression(), this.expect(u.bracketR)) : this.type === u.privateId && e.type !== "Super" ? l.property = this.parsePrivateIdent() : l.property = this.parseIdent(this.options.allowReserved !== "never"), l.computed = !!h, o && (l.optional = c), e = this.finishNode(l, "MemberExpression");
  } else if (!r && this.eat(u.parenL)) {
    var p = new et(), f = this.yieldPos, d = this.awaitPos, m = this.awaitIdentPos;
    this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
    var S = this.parseExprList(u.parenR, this.options.ecmaVersion >= 8, !1, p);
    if (s && !c && this.shouldParseAsyncArrow())
      return this.checkPatternErrors(p, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = f, this.awaitPos = d, this.awaitIdentPos = m, this.parseSubscriptAsyncArrow(t, i, S, a);
    this.checkExpressionErrors(p, !0), this.yieldPos = f || this.yieldPos, this.awaitPos = d || this.awaitPos, this.awaitIdentPos = m || this.awaitIdentPos;
    var v = this.startNodeAt(t, i);
    v.callee = e, v.arguments = S, o && (v.optional = c), e = this.finishNode(v, "CallExpression");
  } else if (this.type === u.backQuote) {
    (c || n) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
    var b = this.startNodeAt(t, i);
    b.tag = e, b.quasi = this.parseTemplate({ isTagged: !0 }), e = this.finishNode(b, "TaggedTemplateExpression");
  }
  return e;
};
w.parseExprAtom = function(e, t, i) {
  this.type === u.slash && this.readRegexp();
  var r, s = this.potentialArrowAt === this.start;
  switch (this.type) {
    case u._super:
      return this.allowSuper || this.raise(this.start, "'super' keyword outside a method"), r = this.startNode(), this.next(), this.type === u.parenL && !this.allowDirectSuper && this.raise(r.start, "super() call outside constructor of a subclass"), this.type !== u.dot && this.type !== u.bracketL && this.type !== u.parenL && this.unexpected(), this.finishNode(r, "Super");
    case u._this:
      return r = this.startNode(), this.next(), this.finishNode(r, "ThisExpression");
    case u.name:
      var n = this.start, a = this.startLoc, o = this.containsEsc, c = this.parseIdent(!1);
      if (this.options.ecmaVersion >= 8 && !o && c.name === "async" && !this.canInsertSemicolon() && this.eat(u._function))
        return this.overrideContext(T.f_expr), this.parseFunction(this.startNodeAt(n, a), 0, !1, !0, t);
      if (s && !this.canInsertSemicolon()) {
        if (this.eat(u.arrow))
          return this.parseArrowExpression(this.startNodeAt(n, a), [c], !1, t);
        if (this.options.ecmaVersion >= 8 && c.name === "async" && this.type === u.name && !o && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc))
          return c = this.parseIdent(!1), (this.canInsertSemicolon() || !this.eat(u.arrow)) && this.unexpected(), this.parseArrowExpression(this.startNodeAt(n, a), [c], !0, t);
      }
      return c;
    case u.regexp:
      var h = this.value;
      return r = this.parseLiteral(h.value), r.regex = { pattern: h.pattern, flags: h.flags }, r;
    case u.num:
    case u.string:
      return this.parseLiteral(this.value);
    case u._null:
    case u._true:
    case u._false:
      return r = this.startNode(), r.value = this.type === u._null ? null : this.type === u._true, r.raw = this.type.keyword, this.next(), this.finishNode(r, "Literal");
    case u.parenL:
      var l = this.start, p = this.parseParenAndDistinguishExpression(s, t);
      return e && (e.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(p) && (e.parenthesizedAssign = l), e.parenthesizedBind < 0 && (e.parenthesizedBind = l)), p;
    case u.bracketL:
      return r = this.startNode(), this.next(), r.elements = this.parseExprList(u.bracketR, !0, !0, e), this.finishNode(r, "ArrayExpression");
    case u.braceL:
      return this.overrideContext(T.b_expr), this.parseObj(!1, e);
    case u._function:
      return r = this.startNode(), this.next(), this.parseFunction(r, 0);
    case u._class:
      return this.parseClass(this.startNode(), !1);
    case u._new:
      return this.parseNew();
    case u.backQuote:
      return this.parseTemplate();
    case u._import:
      return this.options.ecmaVersion >= 11 ? this.parseExprImport(i) : this.unexpected();
    default:
      return this.parseExprAtomDefault();
  }
};
w.parseExprAtomDefault = function() {
  this.unexpected();
};
w.parseExprImport = function(e) {
  var t = this.startNode();
  if (this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword import"), this.next(), this.type === u.parenL && !e)
    return this.parseDynamicImport(t);
  if (this.type === u.dot) {
    var i = this.startNodeAt(t.start, t.loc && t.loc.start);
    return i.name = "import", t.meta = this.finishNode(i, "Identifier"), this.parseImportMeta(t);
  } else
    this.unexpected();
};
w.parseDynamicImport = function(e) {
  if (this.next(), e.source = this.parseMaybeAssign(), !this.eat(u.parenR)) {
    var t = this.start;
    this.eat(u.comma) && this.eat(u.parenR) ? this.raiseRecoverable(t, "Trailing comma is not allowed in import()") : this.unexpected(t);
  }
  return this.finishNode(e, "ImportExpression");
};
w.parseImportMeta = function(e) {
  this.next();
  var t = this.containsEsc;
  return e.property = this.parseIdent(!0), e.property.name !== "meta" && this.raiseRecoverable(e.property.start, "The only valid meta property for import is 'import.meta'"), t && this.raiseRecoverable(e.start, "'import.meta' must not contain escaped characters"), this.options.sourceType !== "module" && !this.options.allowImportExportEverywhere && this.raiseRecoverable(e.start, "Cannot use 'import.meta' outside a module"), this.finishNode(e, "MetaProperty");
};
w.parseLiteral = function(e) {
  var t = this.startNode();
  return t.value = e, t.raw = this.input.slice(this.start, this.end), t.raw.charCodeAt(t.raw.length - 1) === 110 && (t.bigint = t.raw.slice(0, -1).replace(/_/g, "")), this.next(), this.finishNode(t, "Literal");
};
w.parseParenExpression = function() {
  this.expect(u.parenL);
  var e = this.parseExpression();
  return this.expect(u.parenR), e;
};
w.shouldParseArrow = function(e) {
  return !this.canInsertSemicolon();
};
w.parseParenAndDistinguishExpression = function(e, t) {
  var i = this.start, r = this.startLoc, s, n = this.options.ecmaVersion >= 8;
  if (this.options.ecmaVersion >= 6) {
    this.next();
    var a = this.start, o = this.startLoc, c = [], h = !0, l = !1, p = new et(), f = this.yieldPos, d = this.awaitPos, m;
    for (this.yieldPos = 0, this.awaitPos = 0; this.type !== u.parenR; )
      if (h ? h = !1 : this.expect(u.comma), n && this.afterTrailingComma(u.parenR, !0)) {
        l = !0;
        break;
      } else if (this.type === u.ellipsis) {
        m = this.start, c.push(this.parseParenItem(this.parseRestBinding())), this.type === u.comma && this.raiseRecoverable(
          this.start,
          "Comma is not permitted after the rest element"
        );
        break;
      } else
        c.push(this.parseMaybeAssign(!1, p, this.parseParenItem));
    var S = this.lastTokEnd, v = this.lastTokEndLoc;
    if (this.expect(u.parenR), e && this.shouldParseArrow(c) && this.eat(u.arrow))
      return this.checkPatternErrors(p, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = f, this.awaitPos = d, this.parseParenArrowList(i, r, c, t);
    (!c.length || l) && this.unexpected(this.lastTokStart), m && this.unexpected(m), this.checkExpressionErrors(p, !0), this.yieldPos = f || this.yieldPos, this.awaitPos = d || this.awaitPos, c.length > 1 ? (s = this.startNodeAt(a, o), s.expressions = c, this.finishNodeAt(s, "SequenceExpression", S, v)) : s = c[0];
  } else
    s = this.parseParenExpression();
  if (this.options.preserveParens) {
    var b = this.startNodeAt(i, r);
    return b.expression = s, this.finishNode(b, "ParenthesizedExpression");
  } else
    return s;
};
w.parseParenItem = function(e) {
  return e;
};
w.parseParenArrowList = function(e, t, i, r) {
  return this.parseArrowExpression(this.startNodeAt(e, t), i, !1, r);
};
var Ps = [];
w.parseNew = function() {
  this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
  var e = this.startNode();
  if (this.next(), this.options.ecmaVersion >= 6 && this.type === u.dot) {
    var t = this.startNodeAt(e.start, e.loc && e.loc.start);
    t.name = "new", e.meta = this.finishNode(t, "Identifier"), this.next();
    var i = this.containsEsc;
    return e.property = this.parseIdent(!0), e.property.name !== "target" && this.raiseRecoverable(e.property.start, "The only valid meta property for new is 'new.target'"), i && this.raiseRecoverable(e.start, "'new.target' must not contain escaped characters"), this.allowNewDotTarget || this.raiseRecoverable(e.start, "'new.target' can only be used in functions and class static block"), this.finishNode(e, "MetaProperty");
  }
  var r = this.start, s = this.startLoc;
  return e.callee = this.parseSubscripts(this.parseExprAtom(null, !1, !0), r, s, !0, !1), this.eat(u.parenL) ? e.arguments = this.parseExprList(u.parenR, this.options.ecmaVersion >= 8, !1) : e.arguments = Ps, this.finishNode(e, "NewExpression");
};
w.parseTemplateElement = function(e) {
  var t = e.isTagged, i = this.startNode();
  return this.type === u.invalidTemplate ? (t || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"), i.value = {
    raw: this.value.replace(/\r\n?/g, `
`),
    cooked: null
  }) : i.value = {
    raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, `
`),
    cooked: this.value
  }, this.next(), i.tail = this.type === u.backQuote, this.finishNode(i, "TemplateElement");
};
w.parseTemplate = function(e) {
  e === void 0 && (e = {});
  var t = e.isTagged;
  t === void 0 && (t = !1);
  var i = this.startNode();
  this.next(), i.expressions = [];
  var r = this.parseTemplateElement({ isTagged: t });
  for (i.quasis = [r]; !r.tail; )
    this.type === u.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(u.dollarBraceL), i.expressions.push(this.parseExpression()), this.expect(u.braceR), i.quasis.push(r = this.parseTemplateElement({ isTagged: t }));
  return this.next(), this.finishNode(i, "TemplateLiteral");
};
w.isAsyncProp = function(e) {
  return !e.computed && e.key.type === "Identifier" && e.key.name === "async" && (this.type === u.name || this.type === u.num || this.type === u.string || this.type === u.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === u.star) && !$.test(this.input.slice(this.lastTokEnd, this.start));
};
w.parseObj = function(e, t) {
  var i = this.startNode(), r = !0, s = {};
  for (i.properties = [], this.next(); !this.eat(u.braceR); ) {
    if (r)
      r = !1;
    else if (this.expect(u.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(u.braceR))
      break;
    var n = this.parseProperty(e, t);
    e || this.checkPropClash(n, s, t), i.properties.push(n);
  }
  return this.finishNode(i, e ? "ObjectPattern" : "ObjectExpression");
};
w.parseProperty = function(e, t) {
  var i = this.startNode(), r, s, n, a;
  if (this.options.ecmaVersion >= 9 && this.eat(u.ellipsis))
    return e ? (i.argument = this.parseIdent(!1), this.type === u.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.finishNode(i, "RestElement")) : (i.argument = this.parseMaybeAssign(!1, t), this.type === u.comma && t && t.trailingComma < 0 && (t.trailingComma = this.start), this.finishNode(i, "SpreadElement"));
  this.options.ecmaVersion >= 6 && (i.method = !1, i.shorthand = !1, (e || t) && (n = this.start, a = this.startLoc), e || (r = this.eat(u.star)));
  var o = this.containsEsc;
  return this.parsePropertyName(i), !e && !o && this.options.ecmaVersion >= 8 && !r && this.isAsyncProp(i) ? (s = !0, r = this.options.ecmaVersion >= 9 && this.eat(u.star), this.parsePropertyName(i)) : s = !1, this.parsePropertyValue(i, e, r, s, n, a, t, o), this.finishNode(i, "Property");
};
w.parseGetterSetter = function(e) {
  e.kind = e.key.name, this.parsePropertyName(e), e.value = this.parseMethod(!1);
  var t = e.kind === "get" ? 0 : 1;
  if (e.value.params.length !== t) {
    var i = e.value.start;
    e.kind === "get" ? this.raiseRecoverable(i, "getter should have no params") : this.raiseRecoverable(i, "setter should have exactly one param");
  } else
    e.kind === "set" && e.value.params[0].type === "RestElement" && this.raiseRecoverable(e.value.params[0].start, "Setter cannot use rest params");
};
w.parsePropertyValue = function(e, t, i, r, s, n, a, o) {
  (i || r) && this.type === u.colon && this.unexpected(), this.eat(u.colon) ? (e.value = t ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, a), e.kind = "init") : this.options.ecmaVersion >= 6 && this.type === u.parenL ? (t && this.unexpected(), e.kind = "init", e.method = !0, e.value = this.parseMethod(i, r)) : !t && !o && this.options.ecmaVersion >= 5 && !e.computed && e.key.type === "Identifier" && (e.key.name === "get" || e.key.name === "set") && this.type !== u.comma && this.type !== u.braceR && this.type !== u.eq ? ((i || r) && this.unexpected(), this.parseGetterSetter(e)) : this.options.ecmaVersion >= 6 && !e.computed && e.key.type === "Identifier" ? ((i || r) && this.unexpected(), this.checkUnreserved(e.key), e.key.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = s), e.kind = "init", t ? e.value = this.parseMaybeDefault(s, n, this.copyNode(e.key)) : this.type === u.eq && a ? (a.shorthandAssign < 0 && (a.shorthandAssign = this.start), e.value = this.parseMaybeDefault(s, n, this.copyNode(e.key))) : e.value = this.copyNode(e.key), e.shorthand = !0) : this.unexpected();
};
w.parsePropertyName = function(e) {
  if (this.options.ecmaVersion >= 6) {
    if (this.eat(u.bracketL))
      return e.computed = !0, e.key = this.parseMaybeAssign(), this.expect(u.bracketR), e.key;
    e.computed = !1;
  }
  return e.key = this.type === u.num || this.type === u.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
};
w.initFunction = function(e) {
  e.id = null, this.options.ecmaVersion >= 6 && (e.generator = e.expression = !1), this.options.ecmaVersion >= 8 && (e.async = !1);
};
w.parseMethod = function(e, t, i) {
  var r = this.startNode(), s = this.yieldPos, n = this.awaitPos, a = this.awaitIdentPos;
  return this.initFunction(r), this.options.ecmaVersion >= 6 && (r.generator = e), this.options.ecmaVersion >= 8 && (r.async = !!t), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(Rt(t, r.generator) | Ot | (i ? Ui : 0)), this.expect(u.parenL), r.params = this.parseBindingList(u.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(r, !1, !0, !1), this.yieldPos = s, this.awaitPos = n, this.awaitIdentPos = a, this.finishNode(r, "FunctionExpression");
};
w.parseArrowExpression = function(e, t, i, r) {
  var s = this.yieldPos, n = this.awaitPos, a = this.awaitIdentPos;
  return this.enterScope(Rt(i, !1) | Fi), this.initFunction(e), this.options.ecmaVersion >= 8 && (e.async = !!i), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, e.params = this.toAssignableList(t, !0), this.parseFunctionBody(e, !0, !1, r), this.yieldPos = s, this.awaitPos = n, this.awaitIdentPos = a, this.finishNode(e, "ArrowFunctionExpression");
};
w.parseFunctionBody = function(e, t, i, r) {
  var s = t && this.type !== u.braceL, n = this.strict, a = !1;
  if (s)
    e.body = this.parseMaybeAssign(r), e.expression = !0, this.checkParams(e, !1);
  else {
    var o = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(e.params);
    (!n || o) && (a = this.strictDirective(this.end), a && o && this.raiseRecoverable(e.start, "Illegal 'use strict' directive in function with non-simple parameter list"));
    var c = this.labels;
    this.labels = [], a && (this.strict = !0), this.checkParams(e, !n && !a && !t && !i && this.isSimpleParamList(e.params)), this.strict && e.id && this.checkLValSimple(e.id, Hi), e.body = this.parseBlock(!1, void 0, a && !n), e.expression = !1, this.adaptDirectivePrologue(e.body.body), this.labels = c;
  }
  this.exitScope();
};
w.isSimpleParamList = function(e) {
  for (var t = 0, i = e; t < i.length; t += 1) {
    var r = i[t];
    if (r.type !== "Identifier")
      return !1;
  }
  return !0;
};
w.checkParams = function(e, t) {
  for (var i = /* @__PURE__ */ Object.create(null), r = 0, s = e.params; r < s.length; r += 1) {
    var n = s[r];
    this.checkLValInnerPattern(n, Vt, t ? null : i);
  }
};
w.parseExprList = function(e, t, i, r) {
  for (var s = [], n = !0; !this.eat(e); ) {
    if (n)
      n = !1;
    else if (this.expect(u.comma), t && this.afterTrailingComma(e))
      break;
    var a = void 0;
    i && this.type === u.comma ? a = null : this.type === u.ellipsis ? (a = this.parseSpread(r), r && this.type === u.comma && r.trailingComma < 0 && (r.trailingComma = this.start)) : a = this.parseMaybeAssign(!1, r), s.push(a);
  }
  return s;
};
w.checkUnreserved = function(e) {
  var t = e.start, i = e.end, r = e.name;
  if (this.inGenerator && r === "yield" && this.raiseRecoverable(t, "Cannot use 'yield' as identifier inside a generator"), this.inAsync && r === "await" && this.raiseRecoverable(t, "Cannot use 'await' as identifier inside an async function"), this.currentThisScope().inClassFieldInit && r === "arguments" && this.raiseRecoverable(t, "Cannot use 'arguments' in class field initializer"), this.inClassStaticBlock && (r === "arguments" || r === "await") && this.raise(t, "Cannot use " + r + " in class static initialization block"), this.keywords.test(r) && this.raise(t, "Unexpected keyword '" + r + "'"), !(this.options.ecmaVersion < 6 && this.input.slice(t, i).indexOf("\\") !== -1)) {
    var s = this.strict ? this.reservedWordsStrict : this.reservedWords;
    s.test(r) && (!this.inAsync && r === "await" && this.raiseRecoverable(t, "Cannot use keyword 'await' outside an async function"), this.raiseRecoverable(t, "The keyword '" + r + "' is reserved"));
  }
};
w.parseIdent = function(e) {
  var t = this.parseIdentNode();
  return this.next(!!e), this.finishNode(t, "Identifier"), e || (this.checkUnreserved(t), t.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = t.start)), t;
};
w.parseIdentNode = function() {
  var e = this.startNode();
  return this.type === u.name ? e.name = this.value : this.type.keyword ? (e.name = this.type.keyword, (e.name === "class" || e.name === "function") && (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46) && this.context.pop(), this.type = u.name) : this.unexpected(), e;
};
w.parsePrivateIdent = function() {
  var e = this.startNode();
  return this.type === u.privateId ? e.name = this.value : this.unexpected(), this.next(), this.finishNode(e, "PrivateIdentifier"), this.options.checkPrivateFields && (this.privateNameStack.length === 0 ? this.raise(e.start, "Private field '#" + e.name + "' must be declared in an enclosing class") : this.privateNameStack[this.privateNameStack.length - 1].used.push(e)), e;
};
w.parseYield = function(e) {
  this.yieldPos || (this.yieldPos = this.start);
  var t = this.startNode();
  return this.next(), this.type === u.semi || this.canInsertSemicolon() || this.type !== u.star && !this.type.startsExpr ? (t.delegate = !1, t.argument = null) : (t.delegate = this.eat(u.star), t.argument = this.parseMaybeAssign(e)), this.finishNode(t, "YieldExpression");
};
w.parseAwait = function(e) {
  this.awaitPos || (this.awaitPos = this.start);
  var t = this.startNode();
  return this.next(), t.argument = this.parseMaybeUnary(null, !0, !1, e), this.finishNode(t, "AwaitExpression");
};
var He = N.prototype;
He.raise = function(e, t) {
  var i = Mi(this.input, e);
  t += " (" + i.line + ":" + i.column + ")";
  var r = new SyntaxError(t);
  throw r.pos = e, r.loc = i, r.raisedAt = this.pos, r;
};
He.raiseRecoverable = He.raise;
He.curPosition = function() {
  if (this.options.locations)
    return new Pe(this.curLine, this.pos - this.lineStart);
};
var se = N.prototype, ks = function(t) {
  this.flags = t, this.var = [], this.lexical = [], this.functions = [], this.inClassFieldInit = !1;
};
se.enterScope = function(e) {
  this.scopeStack.push(new ks(e));
};
se.exitScope = function() {
  this.scopeStack.pop();
};
se.treatFunctionsAsVarInScope = function(e) {
  return e.flags & _e || !this.inModule && e.flags & ke;
};
se.declareName = function(e, t, i) {
  var r = !1;
  if (t === Z) {
    var s = this.currentScope();
    r = s.lexical.indexOf(e) > -1 || s.functions.indexOf(e) > -1 || s.var.indexOf(e) > -1, s.lexical.push(e), this.inModule && s.flags & ke && delete this.undefinedExports[e];
  } else if (t === qi) {
    var n = this.currentScope();
    n.lexical.push(e);
  } else if (t === Gi) {
    var a = this.currentScope();
    this.treatFunctionsAsVar ? r = a.lexical.indexOf(e) > -1 : r = a.lexical.indexOf(e) > -1 || a.var.indexOf(e) > -1, a.functions.push(e);
  } else
    for (var o = this.scopeStack.length - 1; o >= 0; --o) {
      var c = this.scopeStack[o];
      if (c.lexical.indexOf(e) > -1 && !(c.flags & $i && c.lexical[0] === e) || !this.treatFunctionsAsVarInScope(c) && c.functions.indexOf(e) > -1) {
        r = !0;
        break;
      }
      if (c.var.push(e), this.inModule && c.flags & ke && delete this.undefinedExports[e], c.flags & Lt)
        break;
    }
  r && this.raiseRecoverable(i, "Identifier '" + e + "' has already been declared");
};
se.checkLocalExport = function(e) {
  this.scopeStack[0].lexical.indexOf(e.name) === -1 && this.scopeStack[0].var.indexOf(e.name) === -1 && (this.undefinedExports[e.name] = e);
};
se.currentScope = function() {
  return this.scopeStack[this.scopeStack.length - 1];
};
se.currentVarScope = function() {
  for (var e = this.scopeStack.length - 1; ; e--) {
    var t = this.scopeStack[e];
    if (t.flags & Lt)
      return t;
  }
};
se.currentThisScope = function() {
  for (var e = this.scopeStack.length - 1; ; e--) {
    var t = this.scopeStack[e];
    if (t.flags & Lt && !(t.flags & Fi))
      return t;
  }
};
var tt = function(t, i, r) {
  this.type = "", this.start = i, this.end = 0, t.options.locations && (this.loc = new Ze(t, r)), t.options.directSourceFile && (this.sourceFile = t.options.directSourceFile), t.options.ranges && (this.range = [i, 0]);
}, je = N.prototype;
je.startNode = function() {
  return new tt(this, this.start, this.startLoc);
};
je.startNodeAt = function(e, t) {
  return new tt(this, e, t);
};
function Ki(e, t, i, r) {
  return e.type = t, e.end = i, this.options.locations && (e.loc.end = r), this.options.ranges && (e.range[1] = i), e;
}
je.finishNode = function(e, t) {
  return Ki.call(this, e, t, this.lastTokEnd, this.lastTokEndLoc);
};
je.finishNodeAt = function(e, t, i, r) {
  return Ki.call(this, e, t, i, r);
};
je.copyNode = function(e) {
  var t = new tt(this, e.start, this.startLoc);
  for (var i in e)
    t[i] = e[i];
  return t;
};
var Qi = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS", Xi = Qi + " Extended_Pictographic", Yi = Xi, Ji = Yi + " EBase EComp EMod EPres ExtPict", Zi = Ji, Ts = Zi, Ns = {
  9: Qi,
  10: Xi,
  11: Yi,
  12: Ji,
  13: Zi,
  14: Ts
}, Os = "Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Flag_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence RGI_Emoji", Ls = {
  9: "",
  10: "",
  11: "",
  12: "",
  13: "",
  14: Os
}, ri = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu", er = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb", tr = er + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd", ir = tr + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho", rr = ir + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi", sr = rr + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith", Rs = sr + " Hrkt Katakana_Or_Hiragana Kawi Nag_Mundari Nagm Unknown Zzzz", Vs = {
  9: er,
  10: tr,
  11: ir,
  12: rr,
  13: sr,
  14: Rs
}, nr = {};
function Bs(e) {
  var t = nr[e] = {
    binary: te(Ns[e] + " " + ri),
    binaryOfStrings: te(Ls[e]),
    nonBinary: {
      General_Category: te(ri),
      Script: te(Vs[e])
    }
  };
  t.nonBinary.Script_Extensions = t.nonBinary.Script, t.nonBinary.gc = t.nonBinary.General_Category, t.nonBinary.sc = t.nonBinary.Script, t.nonBinary.scx = t.nonBinary.Script_Extensions;
}
for (var ct = 0, si = [9, 10, 11, 12, 13, 14]; ct < si.length; ct += 1) {
  var js = si[ct];
  Bs(js);
}
var x = N.prototype, We = function(t, i) {
  this.parent = t, this.base = i || this;
};
We.prototype.separatedFrom = function(t) {
  for (var i = this; i; i = i.parent)
    for (var r = t; r; r = r.parent)
      if (i.base === r.base && i !== r)
        return !0;
  return !1;
};
We.prototype.sibling = function() {
  return new We(this.parent, this.base);
};
var W = function(t) {
  this.parser = t, this.validFlags = "gim" + (t.options.ecmaVersion >= 6 ? "uy" : "") + (t.options.ecmaVersion >= 9 ? "s" : "") + (t.options.ecmaVersion >= 13 ? "d" : "") + (t.options.ecmaVersion >= 15 ? "v" : ""), this.unicodeProperties = nr[t.options.ecmaVersion >= 14 ? 14 : t.options.ecmaVersion], this.source = "", this.flags = "", this.start = 0, this.switchU = !1, this.switchV = !1, this.switchN = !1, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", this.lastAssertionIsQuantifiable = !1, this.numCapturingParens = 0, this.maxBackReference = 0, this.groupNames = /* @__PURE__ */ Object.create(null), this.backReferenceNames = [], this.branchID = null;
};
W.prototype.reset = function(t, i, r) {
  var s = r.indexOf("v") !== -1, n = r.indexOf("u") !== -1;
  this.start = t | 0, this.source = i + "", this.flags = r, s && this.parser.options.ecmaVersion >= 15 ? (this.switchU = !0, this.switchV = !0, this.switchN = !0) : (this.switchU = n && this.parser.options.ecmaVersion >= 6, this.switchV = !1, this.switchN = n && this.parser.options.ecmaVersion >= 9);
};
W.prototype.raise = function(t) {
  this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + t);
};
W.prototype.at = function(t, i) {
  i === void 0 && (i = !1);
  var r = this.source, s = r.length;
  if (t >= s)
    return -1;
  var n = r.charCodeAt(t);
  if (!(i || this.switchU) || n <= 55295 || n >= 57344 || t + 1 >= s)
    return n;
  var a = r.charCodeAt(t + 1);
  return a >= 56320 && a <= 57343 ? (n << 10) + a - 56613888 : n;
};
W.prototype.nextIndex = function(t, i) {
  i === void 0 && (i = !1);
  var r = this.source, s = r.length;
  if (t >= s)
    return s;
  var n = r.charCodeAt(t), a;
  return !(i || this.switchU) || n <= 55295 || n >= 57344 || t + 1 >= s || (a = r.charCodeAt(t + 1)) < 56320 || a > 57343 ? t + 1 : t + 2;
};
W.prototype.current = function(t) {
  return t === void 0 && (t = !1), this.at(this.pos, t);
};
W.prototype.lookahead = function(t) {
  return t === void 0 && (t = !1), this.at(this.nextIndex(this.pos, t), t);
};
W.prototype.advance = function(t) {
  t === void 0 && (t = !1), this.pos = this.nextIndex(this.pos, t);
};
W.prototype.eat = function(t, i) {
  return i === void 0 && (i = !1), this.current(i) === t ? (this.advance(i), !0) : !1;
};
W.prototype.eatChars = function(t, i) {
  i === void 0 && (i = !1);
  for (var r = this.pos, s = 0, n = t; s < n.length; s += 1) {
    var a = n[s], o = this.at(r, i);
    if (o === -1 || o !== a)
      return !1;
    r = this.nextIndex(r, i);
  }
  return this.pos = r, !0;
};
x.validateRegExpFlags = function(e) {
  for (var t = e.validFlags, i = e.flags, r = !1, s = !1, n = 0; n < i.length; n++) {
    var a = i.charAt(n);
    t.indexOf(a) === -1 && this.raise(e.start, "Invalid regular expression flag"), i.indexOf(a, n + 1) > -1 && this.raise(e.start, "Duplicate regular expression flag"), a === "u" && (r = !0), a === "v" && (s = !0);
  }
  this.options.ecmaVersion >= 15 && r && s && this.raise(e.start, "Invalid regular expression flag");
};
function Ms(e) {
  for (var t in e)
    return !0;
  return !1;
}
x.validateRegExpPattern = function(e) {
  this.regexp_pattern(e), !e.switchN && this.options.ecmaVersion >= 9 && Ms(e.groupNames) && (e.switchN = !0, this.regexp_pattern(e));
};
x.regexp_pattern = function(e) {
  e.pos = 0, e.lastIntValue = 0, e.lastStringValue = "", e.lastAssertionIsQuantifiable = !1, e.numCapturingParens = 0, e.maxBackReference = 0, e.groupNames = /* @__PURE__ */ Object.create(null), e.backReferenceNames.length = 0, e.branchID = null, this.regexp_disjunction(e), e.pos !== e.source.length && (e.eat(
    41
    /* ) */
  ) && e.raise("Unmatched ')'"), (e.eat(
    93
    /* ] */
  ) || e.eat(
    125
    /* } */
  )) && e.raise("Lone quantifier brackets")), e.maxBackReference > e.numCapturingParens && e.raise("Invalid escape");
  for (var t = 0, i = e.backReferenceNames; t < i.length; t += 1) {
    var r = i[t];
    e.groupNames[r] || e.raise("Invalid named capture referenced");
  }
};
x.regexp_disjunction = function(e) {
  var t = this.options.ecmaVersion >= 16;
  for (t && (e.branchID = new We(e.branchID, null)), this.regexp_alternative(e); e.eat(
    124
    /* | */
  ); )
    t && (e.branchID = e.branchID.sibling()), this.regexp_alternative(e);
  t && (e.branchID = e.branchID.parent), this.regexp_eatQuantifier(e, !0) && e.raise("Nothing to repeat"), e.eat(
    123
    /* { */
  ) && e.raise("Lone quantifier brackets");
};
x.regexp_alternative = function(e) {
  for (; e.pos < e.source.length && this.regexp_eatTerm(e); )
    ;
};
x.regexp_eatTerm = function(e) {
  return this.regexp_eatAssertion(e) ? (e.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(e) && e.switchU && e.raise("Invalid quantifier"), !0) : (e.switchU ? this.regexp_eatAtom(e) : this.regexp_eatExtendedAtom(e)) ? (this.regexp_eatQuantifier(e), !0) : !1;
};
x.regexp_eatAssertion = function(e) {
  var t = e.pos;
  if (e.lastAssertionIsQuantifiable = !1, e.eat(
    94
    /* ^ */
  ) || e.eat(
    36
    /* $ */
  ))
    return !0;
  if (e.eat(
    92
    /* \ */
  )) {
    if (e.eat(
      66
      /* B */
    ) || e.eat(
      98
      /* b */
    ))
      return !0;
    e.pos = t;
  }
  if (e.eat(
    40
    /* ( */
  ) && e.eat(
    63
    /* ? */
  )) {
    var i = !1;
    if (this.options.ecmaVersion >= 9 && (i = e.eat(
      60
      /* < */
    )), e.eat(
      61
      /* = */
    ) || e.eat(
      33
      /* ! */
    ))
      return this.regexp_disjunction(e), e.eat(
        41
        /* ) */
      ) || e.raise("Unterminated group"), e.lastAssertionIsQuantifiable = !i, !0;
  }
  return e.pos = t, !1;
};
x.regexp_eatQuantifier = function(e, t) {
  return t === void 0 && (t = !1), this.regexp_eatQuantifierPrefix(e, t) ? (e.eat(
    63
    /* ? */
  ), !0) : !1;
};
x.regexp_eatQuantifierPrefix = function(e, t) {
  return e.eat(
    42
    /* * */
  ) || e.eat(
    43
    /* + */
  ) || e.eat(
    63
    /* ? */
  ) || this.regexp_eatBracedQuantifier(e, t);
};
x.regexp_eatBracedQuantifier = function(e, t) {
  var i = e.pos;
  if (e.eat(
    123
    /* { */
  )) {
    var r = 0, s = -1;
    if (this.regexp_eatDecimalDigits(e) && (r = e.lastIntValue, e.eat(
      44
      /* , */
    ) && this.regexp_eatDecimalDigits(e) && (s = e.lastIntValue), e.eat(
      125
      /* } */
    )))
      return s !== -1 && s < r && !t && e.raise("numbers out of order in {} quantifier"), !0;
    e.switchU && !t && e.raise("Incomplete quantifier"), e.pos = i;
  }
  return !1;
};
x.regexp_eatAtom = function(e) {
  return this.regexp_eatPatternCharacters(e) || e.eat(
    46
    /* . */
  ) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e);
};
x.regexp_eatReverseSolidusAtomEscape = function(e) {
  var t = e.pos;
  if (e.eat(
    92
    /* \ */
  )) {
    if (this.regexp_eatAtomEscape(e))
      return !0;
    e.pos = t;
  }
  return !1;
};
x.regexp_eatUncapturingGroup = function(e) {
  var t = e.pos;
  if (e.eat(
    40
    /* ( */
  )) {
    if (e.eat(
      63
      /* ? */
    ) && e.eat(
      58
      /* : */
    )) {
      if (this.regexp_disjunction(e), e.eat(
        41
        /* ) */
      ))
        return !0;
      e.raise("Unterminated group");
    }
    e.pos = t;
  }
  return !1;
};
x.regexp_eatCapturingGroup = function(e) {
  if (e.eat(
    40
    /* ( */
  )) {
    if (this.options.ecmaVersion >= 9 ? this.regexp_groupSpecifier(e) : e.current() === 63 && e.raise("Invalid group"), this.regexp_disjunction(e), e.eat(
      41
      /* ) */
    ))
      return e.numCapturingParens += 1, !0;
    e.raise("Unterminated group");
  }
  return !1;
};
x.regexp_eatExtendedAtom = function(e) {
  return e.eat(
    46
    /* . */
  ) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e) || this.regexp_eatInvalidBracedQuantifier(e) || this.regexp_eatExtendedPatternCharacter(e);
};
x.regexp_eatInvalidBracedQuantifier = function(e) {
  return this.regexp_eatBracedQuantifier(e, !0) && e.raise("Nothing to repeat"), !1;
};
x.regexp_eatSyntaxCharacter = function(e) {
  var t = e.current();
  return ar(t) ? (e.lastIntValue = t, e.advance(), !0) : !1;
};
function ar(e) {
  return e === 36 || e >= 40 && e <= 43 || e === 46 || e === 63 || e >= 91 && e <= 94 || e >= 123 && e <= 125;
}
x.regexp_eatPatternCharacters = function(e) {
  for (var t = e.pos, i = 0; (i = e.current()) !== -1 && !ar(i); )
    e.advance();
  return e.pos !== t;
};
x.regexp_eatExtendedPatternCharacter = function(e) {
  var t = e.current();
  return t !== -1 && t !== 36 && !(t >= 40 && t <= 43) && t !== 46 && t !== 63 && t !== 91 && t !== 94 && t !== 124 ? (e.advance(), !0) : !1;
};
x.regexp_groupSpecifier = function(e) {
  if (e.eat(
    63
    /* ? */
  )) {
    this.regexp_eatGroupName(e) || e.raise("Invalid group");
    var t = this.options.ecmaVersion >= 16, i = e.groupNames[e.lastStringValue];
    if (i)
      if (t)
        for (var r = 0, s = i; r < s.length; r += 1) {
          var n = s[r];
          n.separatedFrom(e.branchID) || e.raise("Duplicate capture group name");
        }
      else
        e.raise("Duplicate capture group name");
    t ? (i || (e.groupNames[e.lastStringValue] = [])).push(e.branchID) : e.groupNames[e.lastStringValue] = !0;
  }
};
x.regexp_eatGroupName = function(e) {
  if (e.lastStringValue = "", e.eat(
    60
    /* < */
  )) {
    if (this.regexp_eatRegExpIdentifierName(e) && e.eat(
      62
      /* > */
    ))
      return !0;
    e.raise("Invalid capture group name");
  }
  return !1;
};
x.regexp_eatRegExpIdentifierName = function(e) {
  if (e.lastStringValue = "", this.regexp_eatRegExpIdentifierStart(e)) {
    for (e.lastStringValue += ie(e.lastIntValue); this.regexp_eatRegExpIdentifierPart(e); )
      e.lastStringValue += ie(e.lastIntValue);
    return !0;
  }
  return !1;
};
x.regexp_eatRegExpIdentifierStart = function(e) {
  var t = e.pos, i = this.options.ecmaVersion >= 11, r = e.current(i);
  return e.advance(i), r === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, i) && (r = e.lastIntValue), Ds(r) ? (e.lastIntValue = r, !0) : (e.pos = t, !1);
};
function Ds(e) {
  return Q(e, !0) || e === 36 || e === 95;
}
x.regexp_eatRegExpIdentifierPart = function(e) {
  var t = e.pos, i = this.options.ecmaVersion >= 11, r = e.current(i);
  return e.advance(i), r === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, i) && (r = e.lastIntValue), Fs(r) ? (e.lastIntValue = r, !0) : (e.pos = t, !1);
};
function Fs(e) {
  return ve(e, !0) || e === 36 || e === 95 || e === 8204 || e === 8205;
}
x.regexp_eatAtomEscape = function(e) {
  return this.regexp_eatBackReference(e) || this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e) || e.switchN && this.regexp_eatKGroupName(e) ? !0 : (e.switchU && (e.current() === 99 && e.raise("Invalid unicode escape"), e.raise("Invalid escape")), !1);
};
x.regexp_eatBackReference = function(e) {
  var t = e.pos;
  if (this.regexp_eatDecimalEscape(e)) {
    var i = e.lastIntValue;
    if (e.switchU)
      return i > e.maxBackReference && (e.maxBackReference = i), !0;
    if (i <= e.numCapturingParens)
      return !0;
    e.pos = t;
  }
  return !1;
};
x.regexp_eatKGroupName = function(e) {
  if (e.eat(
    107
    /* k */
  )) {
    if (this.regexp_eatGroupName(e))
      return e.backReferenceNames.push(e.lastStringValue), !0;
    e.raise("Invalid named reference");
  }
  return !1;
};
x.regexp_eatCharacterEscape = function(e) {
  return this.regexp_eatControlEscape(e) || this.regexp_eatCControlLetter(e) || this.regexp_eatZero(e) || this.regexp_eatHexEscapeSequence(e) || this.regexp_eatRegExpUnicodeEscapeSequence(e, !1) || !e.switchU && this.regexp_eatLegacyOctalEscapeSequence(e) || this.regexp_eatIdentityEscape(e);
};
x.regexp_eatCControlLetter = function(e) {
  var t = e.pos;
  if (e.eat(
    99
    /* c */
  )) {
    if (this.regexp_eatControlLetter(e))
      return !0;
    e.pos = t;
  }
  return !1;
};
x.regexp_eatZero = function(e) {
  return e.current() === 48 && !it(e.lookahead()) ? (e.lastIntValue = 0, e.advance(), !0) : !1;
};
x.regexp_eatControlEscape = function(e) {
  var t = e.current();
  return t === 116 ? (e.lastIntValue = 9, e.advance(), !0) : t === 110 ? (e.lastIntValue = 10, e.advance(), !0) : t === 118 ? (e.lastIntValue = 11, e.advance(), !0) : t === 102 ? (e.lastIntValue = 12, e.advance(), !0) : t === 114 ? (e.lastIntValue = 13, e.advance(), !0) : !1;
};
x.regexp_eatControlLetter = function(e) {
  var t = e.current();
  return or(t) ? (e.lastIntValue = t % 32, e.advance(), !0) : !1;
};
function or(e) {
  return e >= 65 && e <= 90 || e >= 97 && e <= 122;
}
x.regexp_eatRegExpUnicodeEscapeSequence = function(e, t) {
  t === void 0 && (t = !1);
  var i = e.pos, r = t || e.switchU;
  if (e.eat(
    117
    /* u */
  )) {
    if (this.regexp_eatFixedHexDigits(e, 4)) {
      var s = e.lastIntValue;
      if (r && s >= 55296 && s <= 56319) {
        var n = e.pos;
        if (e.eat(
          92
          /* \ */
        ) && e.eat(
          117
          /* u */
        ) && this.regexp_eatFixedHexDigits(e, 4)) {
          var a = e.lastIntValue;
          if (a >= 56320 && a <= 57343)
            return e.lastIntValue = (s - 55296) * 1024 + (a - 56320) + 65536, !0;
        }
        e.pos = n, e.lastIntValue = s;
      }
      return !0;
    }
    if (r && e.eat(
      123
      /* { */
    ) && this.regexp_eatHexDigits(e) && e.eat(
      125
      /* } */
    ) && $s(e.lastIntValue))
      return !0;
    r && e.raise("Invalid unicode escape"), e.pos = i;
  }
  return !1;
};
function $s(e) {
  return e >= 0 && e <= 1114111;
}
x.regexp_eatIdentityEscape = function(e) {
  if (e.switchU)
    return this.regexp_eatSyntaxCharacter(e) ? !0 : e.eat(
      47
      /* / */
    ) ? (e.lastIntValue = 47, !0) : !1;
  var t = e.current();
  return t !== 99 && (!e.switchN || t !== 107) ? (e.lastIntValue = t, e.advance(), !0) : !1;
};
x.regexp_eatDecimalEscape = function(e) {
  e.lastIntValue = 0;
  var t = e.current();
  if (t >= 49 && t <= 57) {
    do
      e.lastIntValue = 10 * e.lastIntValue + (t - 48), e.advance();
    while ((t = e.current()) >= 48 && t <= 57);
    return !0;
  }
  return !1;
};
var ur = 0, X = 1, F = 2;
x.regexp_eatCharacterClassEscape = function(e) {
  var t = e.current();
  if (Us(t))
    return e.lastIntValue = -1, e.advance(), X;
  var i = !1;
  if (e.switchU && this.options.ecmaVersion >= 9 && ((i = t === 80) || t === 112)) {
    e.lastIntValue = -1, e.advance();
    var r;
    if (e.eat(
      123
      /* { */
    ) && (r = this.regexp_eatUnicodePropertyValueExpression(e)) && e.eat(
      125
      /* } */
    ))
      return i && r === F && e.raise("Invalid property name"), r;
    e.raise("Invalid property name");
  }
  return ur;
};
function Us(e) {
  return e === 100 || e === 68 || e === 115 || e === 83 || e === 119 || e === 87;
}
x.regexp_eatUnicodePropertyValueExpression = function(e) {
  var t = e.pos;
  if (this.regexp_eatUnicodePropertyName(e) && e.eat(
    61
    /* = */
  )) {
    var i = e.lastStringValue;
    if (this.regexp_eatUnicodePropertyValue(e)) {
      var r = e.lastStringValue;
      return this.regexp_validateUnicodePropertyNameAndValue(e, i, r), X;
    }
  }
  if (e.pos = t, this.regexp_eatLoneUnicodePropertyNameOrValue(e)) {
    var s = e.lastStringValue;
    return this.regexp_validateUnicodePropertyNameOrValue(e, s);
  }
  return ur;
};
x.regexp_validateUnicodePropertyNameAndValue = function(e, t, i) {
  Ve(e.unicodeProperties.nonBinary, t) || e.raise("Invalid property name"), e.unicodeProperties.nonBinary[t].test(i) || e.raise("Invalid property value");
};
x.regexp_validateUnicodePropertyNameOrValue = function(e, t) {
  if (e.unicodeProperties.binary.test(t))
    return X;
  if (e.switchV && e.unicodeProperties.binaryOfStrings.test(t))
    return F;
  e.raise("Invalid property name");
};
x.regexp_eatUnicodePropertyName = function(e) {
  var t = 0;
  for (e.lastStringValue = ""; cr(t = e.current()); )
    e.lastStringValue += ie(t), e.advance();
  return e.lastStringValue !== "";
};
function cr(e) {
  return or(e) || e === 95;
}
x.regexp_eatUnicodePropertyValue = function(e) {
  var t = 0;
  for (e.lastStringValue = ""; Gs(t = e.current()); )
    e.lastStringValue += ie(t), e.advance();
  return e.lastStringValue !== "";
};
function Gs(e) {
  return cr(e) || it(e);
}
x.regexp_eatLoneUnicodePropertyNameOrValue = function(e) {
  return this.regexp_eatUnicodePropertyValue(e);
};
x.regexp_eatCharacterClass = function(e) {
  if (e.eat(
    91
    /* [ */
  )) {
    var t = e.eat(
      94
      /* ^ */
    ), i = this.regexp_classContents(e);
    return e.eat(
      93
      /* ] */
    ) || e.raise("Unterminated character class"), t && i === F && e.raise("Negated character class may contain strings"), !0;
  }
  return !1;
};
x.regexp_classContents = function(e) {
  return e.current() === 93 ? X : e.switchV ? this.regexp_classSetExpression(e) : (this.regexp_nonEmptyClassRanges(e), X);
};
x.regexp_nonEmptyClassRanges = function(e) {
  for (; this.regexp_eatClassAtom(e); ) {
    var t = e.lastIntValue;
    if (e.eat(
      45
      /* - */
    ) && this.regexp_eatClassAtom(e)) {
      var i = e.lastIntValue;
      e.switchU && (t === -1 || i === -1) && e.raise("Invalid character class"), t !== -1 && i !== -1 && t > i && e.raise("Range out of order in character class");
    }
  }
};
x.regexp_eatClassAtom = function(e) {
  var t = e.pos;
  if (e.eat(
    92
    /* \ */
  )) {
    if (this.regexp_eatClassEscape(e))
      return !0;
    if (e.switchU) {
      var i = e.current();
      (i === 99 || fr(i)) && e.raise("Invalid class escape"), e.raise("Invalid escape");
    }
    e.pos = t;
  }
  var r = e.current();
  return r !== 93 ? (e.lastIntValue = r, e.advance(), !0) : !1;
};
x.regexp_eatClassEscape = function(e) {
  var t = e.pos;
  if (e.eat(
    98
    /* b */
  ))
    return e.lastIntValue = 8, !0;
  if (e.switchU && e.eat(
    45
    /* - */
  ))
    return e.lastIntValue = 45, !0;
  if (!e.switchU && e.eat(
    99
    /* c */
  )) {
    if (this.regexp_eatClassControlLetter(e))
      return !0;
    e.pos = t;
  }
  return this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e);
};
x.regexp_classSetExpression = function(e) {
  var t = X, i;
  if (!this.regexp_eatClassSetRange(e))
    if (i = this.regexp_eatClassSetOperand(e)) {
      i === F && (t = F);
      for (var r = e.pos; e.eatChars(
        [38, 38]
        /* && */
      ); ) {
        if (e.current() !== 38 && (i = this.regexp_eatClassSetOperand(e))) {
          i !== F && (t = X);
          continue;
        }
        e.raise("Invalid character in character class");
      }
      if (r !== e.pos)
        return t;
      for (; e.eatChars(
        [45, 45]
        /* -- */
      ); )
        this.regexp_eatClassSetOperand(e) || e.raise("Invalid character in character class");
      if (r !== e.pos)
        return t;
    } else
      e.raise("Invalid character in character class");
  for (; ; )
    if (!this.regexp_eatClassSetRange(e)) {
      if (i = this.regexp_eatClassSetOperand(e), !i)
        return t;
      i === F && (t = F);
    }
};
x.regexp_eatClassSetRange = function(e) {
  var t = e.pos;
  if (this.regexp_eatClassSetCharacter(e)) {
    var i = e.lastIntValue;
    if (e.eat(
      45
      /* - */
    ) && this.regexp_eatClassSetCharacter(e)) {
      var r = e.lastIntValue;
      return i !== -1 && r !== -1 && i > r && e.raise("Range out of order in character class"), !0;
    }
    e.pos = t;
  }
  return !1;
};
x.regexp_eatClassSetOperand = function(e) {
  return this.regexp_eatClassSetCharacter(e) ? X : this.regexp_eatClassStringDisjunction(e) || this.regexp_eatNestedClass(e);
};
x.regexp_eatNestedClass = function(e) {
  var t = e.pos;
  if (e.eat(
    91
    /* [ */
  )) {
    var i = e.eat(
      94
      /* ^ */
    ), r = this.regexp_classContents(e);
    if (e.eat(
      93
      /* ] */
    ))
      return i && r === F && e.raise("Negated character class may contain strings"), r;
    e.pos = t;
  }
  if (e.eat(
    92
    /* \ */
  )) {
    var s = this.regexp_eatCharacterClassEscape(e);
    if (s)
      return s;
    e.pos = t;
  }
  return null;
};
x.regexp_eatClassStringDisjunction = function(e) {
  var t = e.pos;
  if (e.eatChars(
    [92, 113]
    /* \q */
  )) {
    if (e.eat(
      123
      /* { */
    )) {
      var i = this.regexp_classStringDisjunctionContents(e);
      if (e.eat(
        125
        /* } */
      ))
        return i;
    } else
      e.raise("Invalid escape");
    e.pos = t;
  }
  return null;
};
x.regexp_classStringDisjunctionContents = function(e) {
  for (var t = this.regexp_classString(e); e.eat(
    124
    /* | */
  ); )
    this.regexp_classString(e) === F && (t = F);
  return t;
};
x.regexp_classString = function(e) {
  for (var t = 0; this.regexp_eatClassSetCharacter(e); )
    t++;
  return t === 1 ? X : F;
};
x.regexp_eatClassSetCharacter = function(e) {
  var t = e.pos;
  if (e.eat(
    92
    /* \ */
  ))
    return this.regexp_eatCharacterEscape(e) || this.regexp_eatClassSetReservedPunctuator(e) ? !0 : e.eat(
      98
      /* b */
    ) ? (e.lastIntValue = 8, !0) : (e.pos = t, !1);
  var i = e.current();
  return i < 0 || i === e.lookahead() && qs(i) || Hs(i) ? !1 : (e.advance(), e.lastIntValue = i, !0);
};
function qs(e) {
  return e === 33 || e >= 35 && e <= 38 || e >= 42 && e <= 44 || e === 46 || e >= 58 && e <= 64 || e === 94 || e === 96 || e === 126;
}
function Hs(e) {
  return e === 40 || e === 41 || e === 45 || e === 47 || e >= 91 && e <= 93 || e >= 123 && e <= 125;
}
x.regexp_eatClassSetReservedPunctuator = function(e) {
  var t = e.current();
  return Ws(t) ? (e.lastIntValue = t, e.advance(), !0) : !1;
};
function Ws(e) {
  return e === 33 || e === 35 || e === 37 || e === 38 || e === 44 || e === 45 || e >= 58 && e <= 62 || e === 64 || e === 96 || e === 126;
}
x.regexp_eatClassControlLetter = function(e) {
  var t = e.current();
  return it(t) || t === 95 ? (e.lastIntValue = t % 32, e.advance(), !0) : !1;
};
x.regexp_eatHexEscapeSequence = function(e) {
  var t = e.pos;
  if (e.eat(
    120
    /* x */
  )) {
    if (this.regexp_eatFixedHexDigits(e, 2))
      return !0;
    e.switchU && e.raise("Invalid escape"), e.pos = t;
  }
  return !1;
};
x.regexp_eatDecimalDigits = function(e) {
  var t = e.pos, i = 0;
  for (e.lastIntValue = 0; it(i = e.current()); )
    e.lastIntValue = 10 * e.lastIntValue + (i - 48), e.advance();
  return e.pos !== t;
};
function it(e) {
  return e >= 48 && e <= 57;
}
x.regexp_eatHexDigits = function(e) {
  var t = e.pos, i = 0;
  for (e.lastIntValue = 0; hr(i = e.current()); )
    e.lastIntValue = 16 * e.lastIntValue + lr(i), e.advance();
  return e.pos !== t;
};
function hr(e) {
  return e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102;
}
function lr(e) {
  return e >= 65 && e <= 70 ? 10 + (e - 65) : e >= 97 && e <= 102 ? 10 + (e - 97) : e - 48;
}
x.regexp_eatLegacyOctalEscapeSequence = function(e) {
  if (this.regexp_eatOctalDigit(e)) {
    var t = e.lastIntValue;
    if (this.regexp_eatOctalDigit(e)) {
      var i = e.lastIntValue;
      t <= 3 && this.regexp_eatOctalDigit(e) ? e.lastIntValue = t * 64 + i * 8 + e.lastIntValue : e.lastIntValue = t * 8 + i;
    } else
      e.lastIntValue = t;
    return !0;
  }
  return !1;
};
x.regexp_eatOctalDigit = function(e) {
  var t = e.current();
  return fr(t) ? (e.lastIntValue = t - 48, e.advance(), !0) : (e.lastIntValue = 0, !1);
};
function fr(e) {
  return e >= 48 && e <= 55;
}
x.regexp_eatFixedHexDigits = function(e, t) {
  var i = e.pos;
  e.lastIntValue = 0;
  for (var r = 0; r < t; ++r) {
    var s = e.current();
    if (!hr(s))
      return e.pos = i, !1;
    e.lastIntValue = 16 * e.lastIntValue + lr(s), e.advance();
  }
  return !0;
};
var jt = function(t) {
  this.type = t.type, this.value = t.value, this.start = t.start, this.end = t.end, t.options.locations && (this.loc = new Ze(t, t.startLoc, t.endLoc)), t.options.ranges && (this.range = [t.start, t.end]);
}, C = N.prototype;
C.next = function(e) {
  !e && this.type.keyword && this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword), this.options.onToken && this.options.onToken(new jt(this)), this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken();
};
C.getToken = function() {
  return this.next(), new jt(this);
};
typeof Symbol < "u" && (C[Symbol.iterator] = function() {
  var e = this;
  return {
    next: function() {
      var t = e.getToken();
      return {
        done: t.type === u.eof,
        value: t
      };
    }
  };
});
C.nextToken = function() {
  var e = this.curContext();
  if ((!e || !e.preserveSpace) && this.skipSpace(), this.start = this.pos, this.options.locations && (this.startLoc = this.curPosition()), this.pos >= this.input.length)
    return this.finishToken(u.eof);
  if (e.override)
    return e.override(this);
  this.readToken(this.fullCharCodeAtPos());
};
C.readToken = function(e) {
  return Q(e, this.options.ecmaVersion >= 6) || e === 92 ? this.readWord() : this.getTokenFromCode(e);
};
C.fullCharCodeAtPos = function() {
  var e = this.input.charCodeAt(this.pos);
  if (e <= 55295 || e >= 56320)
    return e;
  var t = this.input.charCodeAt(this.pos + 1);
  return t <= 56319 || t >= 57344 ? e : (e << 10) + t - 56613888;
};
C.skipBlockComment = function() {
  var e = this.options.onComment && this.curPosition(), t = this.pos, i = this.input.indexOf("*/", this.pos += 2);
  if (i === -1 && this.raise(this.pos - 2, "Unterminated comment"), this.pos = i + 2, this.options.locations)
    for (var r = void 0, s = t; (r = Vi(this.input, s, this.pos)) > -1; )
      ++this.curLine, s = this.lineStart = r;
  this.options.onComment && this.options.onComment(
    !0,
    this.input.slice(t + 2, i),
    t,
    this.pos,
    e,
    this.curPosition()
  );
};
C.skipLineComment = function(e) {
  for (var t = this.pos, i = this.options.onComment && this.curPosition(), r = this.input.charCodeAt(this.pos += e); this.pos < this.input.length && !be(r); )
    r = this.input.charCodeAt(++this.pos);
  this.options.onComment && this.options.onComment(
    !1,
    this.input.slice(t + e, this.pos),
    t,
    this.pos,
    i,
    this.curPosition()
  );
};
C.skipSpace = function() {
  e:
    for (; this.pos < this.input.length; ) {
      var e = this.input.charCodeAt(this.pos);
      switch (e) {
        case 32:
        case 160:
          ++this.pos;
          break;
        case 13:
          this.input.charCodeAt(this.pos + 1) === 10 && ++this.pos;
        case 10:
        case 8232:
        case 8233:
          ++this.pos, this.options.locations && (++this.curLine, this.lineStart = this.pos);
          break;
        case 47:
          switch (this.input.charCodeAt(this.pos + 1)) {
            case 42:
              this.skipBlockComment();
              break;
            case 47:
              this.skipLineComment(2);
              break;
            default:
              break e;
          }
          break;
        default:
          if (e > 8 && e < 14 || e >= 5760 && Bi.test(String.fromCharCode(e)))
            ++this.pos;
          else
            break e;
      }
    }
};
C.finishToken = function(e, t) {
  this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
  var i = this.type;
  this.type = e, this.value = t, this.updateContext(i);
};
C.readToken_dot = function() {
  var e = this.input.charCodeAt(this.pos + 1);
  if (e >= 48 && e <= 57)
    return this.readNumber(!0);
  var t = this.input.charCodeAt(this.pos + 2);
  return this.options.ecmaVersion >= 6 && e === 46 && t === 46 ? (this.pos += 3, this.finishToken(u.ellipsis)) : (++this.pos, this.finishToken(u.dot));
};
C.readToken_slash = function() {
  var e = this.input.charCodeAt(this.pos + 1);
  return this.exprAllowed ? (++this.pos, this.readRegexp()) : e === 61 ? this.finishOp(u.assign, 2) : this.finishOp(u.slash, 1);
};
C.readToken_mult_modulo_exp = function(e) {
  var t = this.input.charCodeAt(this.pos + 1), i = 1, r = e === 42 ? u.star : u.modulo;
  return this.options.ecmaVersion >= 7 && e === 42 && t === 42 && (++i, r = u.starstar, t = this.input.charCodeAt(this.pos + 2)), t === 61 ? this.finishOp(u.assign, i + 1) : this.finishOp(r, i);
};
C.readToken_pipe_amp = function(e) {
  var t = this.input.charCodeAt(this.pos + 1);
  if (t === e) {
    if (this.options.ecmaVersion >= 12) {
      var i = this.input.charCodeAt(this.pos + 2);
      if (i === 61)
        return this.finishOp(u.assign, 3);
    }
    return this.finishOp(e === 124 ? u.logicalOR : u.logicalAND, 2);
  }
  return t === 61 ? this.finishOp(u.assign, 2) : this.finishOp(e === 124 ? u.bitwiseOR : u.bitwiseAND, 1);
};
C.readToken_caret = function() {
  var e = this.input.charCodeAt(this.pos + 1);
  return e === 61 ? this.finishOp(u.assign, 2) : this.finishOp(u.bitwiseXOR, 1);
};
C.readToken_plus_min = function(e) {
  var t = this.input.charCodeAt(this.pos + 1);
  return t === e ? t === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 && (this.lastTokEnd === 0 || $.test(this.input.slice(this.lastTokEnd, this.pos))) ? (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : this.finishOp(u.incDec, 2) : t === 61 ? this.finishOp(u.assign, 2) : this.finishOp(u.plusMin, 1);
};
C.readToken_lt_gt = function(e) {
  var t = this.input.charCodeAt(this.pos + 1), i = 1;
  return t === e ? (i = e === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2, this.input.charCodeAt(this.pos + i) === 61 ? this.finishOp(u.assign, i + 1) : this.finishOp(u.bitShift, i)) : t === 33 && e === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 && this.input.charCodeAt(this.pos + 3) === 45 ? (this.skipLineComment(4), this.skipSpace(), this.nextToken()) : (t === 61 && (i = 2), this.finishOp(u.relational, i));
};
C.readToken_eq_excl = function(e) {
  var t = this.input.charCodeAt(this.pos + 1);
  return t === 61 ? this.finishOp(u.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2) : e === 61 && t === 62 && this.options.ecmaVersion >= 6 ? (this.pos += 2, this.finishToken(u.arrow)) : this.finishOp(e === 61 ? u.eq : u.prefix, 1);
};
C.readToken_question = function() {
  var e = this.options.ecmaVersion;
  if (e >= 11) {
    var t = this.input.charCodeAt(this.pos + 1);
    if (t === 46) {
      var i = this.input.charCodeAt(this.pos + 2);
      if (i < 48 || i > 57)
        return this.finishOp(u.questionDot, 2);
    }
    if (t === 63) {
      if (e >= 12) {
        var r = this.input.charCodeAt(this.pos + 2);
        if (r === 61)
          return this.finishOp(u.assign, 3);
      }
      return this.finishOp(u.coalesce, 2);
    }
  }
  return this.finishOp(u.question, 1);
};
C.readToken_numberSign = function() {
  var e = this.options.ecmaVersion, t = 35;
  if (e >= 13 && (++this.pos, t = this.fullCharCodeAtPos(), Q(t, !0) || t === 92))
    return this.finishToken(u.privateId, this.readWord1());
  this.raise(this.pos, "Unexpected character '" + ie(t) + "'");
};
C.getTokenFromCode = function(e) {
  switch (e) {
    case 46:
      return this.readToken_dot();
    case 40:
      return ++this.pos, this.finishToken(u.parenL);
    case 41:
      return ++this.pos, this.finishToken(u.parenR);
    case 59:
      return ++this.pos, this.finishToken(u.semi);
    case 44:
      return ++this.pos, this.finishToken(u.comma);
    case 91:
      return ++this.pos, this.finishToken(u.bracketL);
    case 93:
      return ++this.pos, this.finishToken(u.bracketR);
    case 123:
      return ++this.pos, this.finishToken(u.braceL);
    case 125:
      return ++this.pos, this.finishToken(u.braceR);
    case 58:
      return ++this.pos, this.finishToken(u.colon);
    case 96:
      if (this.options.ecmaVersion < 6)
        break;
      return ++this.pos, this.finishToken(u.backQuote);
    case 48:
      var t = this.input.charCodeAt(this.pos + 1);
      if (t === 120 || t === 88)
        return this.readRadixNumber(16);
      if (this.options.ecmaVersion >= 6) {
        if (t === 111 || t === 79)
          return this.readRadixNumber(8);
        if (t === 98 || t === 66)
          return this.readRadixNumber(2);
      }
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      return this.readNumber(!1);
    case 34:
    case 39:
      return this.readString(e);
    case 47:
      return this.readToken_slash();
    case 37:
    case 42:
      return this.readToken_mult_modulo_exp(e);
    case 124:
    case 38:
      return this.readToken_pipe_amp(e);
    case 94:
      return this.readToken_caret();
    case 43:
    case 45:
      return this.readToken_plus_min(e);
    case 60:
    case 62:
      return this.readToken_lt_gt(e);
    case 61:
    case 33:
      return this.readToken_eq_excl(e);
    case 63:
      return this.readToken_question();
    case 126:
      return this.finishOp(u.prefix, 1);
    case 35:
      return this.readToken_numberSign();
  }
  this.raise(this.pos, "Unexpected character '" + ie(e) + "'");
};
C.finishOp = function(e, t) {
  var i = this.input.slice(this.pos, this.pos + t);
  return this.pos += t, this.finishToken(e, i);
};
C.readRegexp = function() {
  for (var e, t, i = this.pos; ; ) {
    this.pos >= this.input.length && this.raise(i, "Unterminated regular expression");
    var r = this.input.charAt(this.pos);
    if ($.test(r) && this.raise(i, "Unterminated regular expression"), e)
      e = !1;
    else {
      if (r === "[")
        t = !0;
      else if (r === "]" && t)
        t = !1;
      else if (r === "/" && !t)
        break;
      e = r === "\\";
    }
    ++this.pos;
  }
  var s = this.input.slice(i, this.pos);
  ++this.pos;
  var n = this.pos, a = this.readWord1();
  this.containsEsc && this.unexpected(n);
  var o = this.regexpState || (this.regexpState = new W(this));
  o.reset(i, s, a), this.validateRegExpFlags(o), this.validateRegExpPattern(o);
  var c = null;
  try {
    c = new RegExp(s, a);
  } catch {
  }
  return this.finishToken(u.regexp, { pattern: s, flags: a, value: c });
};
C.readInt = function(e, t, i) {
  for (var r = this.options.ecmaVersion >= 12 && t === void 0, s = i && this.input.charCodeAt(this.pos) === 48, n = this.pos, a = 0, o = 0, c = 0, h = t ?? 1 / 0; c < h; ++c, ++this.pos) {
    var l = this.input.charCodeAt(this.pos), p = void 0;
    if (r && l === 95) {
      s && this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"), o === 95 && this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"), c === 0 && this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"), o = l;
      continue;
    }
    if (l >= 97 ? p = l - 97 + 10 : l >= 65 ? p = l - 65 + 10 : l >= 48 && l <= 57 ? p = l - 48 : p = 1 / 0, p >= e)
      break;
    o = l, a = a * e + p;
  }
  return r && o === 95 && this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"), this.pos === n || t != null && this.pos - n !== t ? null : a;
};
function zs(e, t) {
  return t ? parseInt(e, 8) : parseFloat(e.replace(/_/g, ""));
}
function pr(e) {
  return typeof BigInt != "function" ? null : BigInt(e.replace(/_/g, ""));
}
C.readRadixNumber = function(e) {
  var t = this.pos;
  this.pos += 2;
  var i = this.readInt(e);
  return i == null && this.raise(this.start + 2, "Expected number in radix " + e), this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110 ? (i = pr(this.input.slice(t, this.pos)), ++this.pos) : Q(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(u.num, i);
};
C.readNumber = function(e) {
  var t = this.pos;
  !e && this.readInt(10, void 0, !0) === null && this.raise(t, "Invalid number");
  var i = this.pos - t >= 2 && this.input.charCodeAt(t) === 48;
  i && this.strict && this.raise(t, "Invalid number");
  var r = this.input.charCodeAt(this.pos);
  if (!i && !e && this.options.ecmaVersion >= 11 && r === 110) {
    var s = pr(this.input.slice(t, this.pos));
    return ++this.pos, Q(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(u.num, s);
  }
  i && /[89]/.test(this.input.slice(t, this.pos)) && (i = !1), r === 46 && !i && (++this.pos, this.readInt(10), r = this.input.charCodeAt(this.pos)), (r === 69 || r === 101) && !i && (r = this.input.charCodeAt(++this.pos), (r === 43 || r === 45) && ++this.pos, this.readInt(10) === null && this.raise(t, "Invalid number")), Q(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
  var n = zs(this.input.slice(t, this.pos), i);
  return this.finishToken(u.num, n);
};
C.readCodePoint = function() {
  var e = this.input.charCodeAt(this.pos), t;
  if (e === 123) {
    this.options.ecmaVersion < 6 && this.unexpected();
    var i = ++this.pos;
    t = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos), ++this.pos, t > 1114111 && this.invalidStringToken(i, "Code point out of bounds");
  } else
    t = this.readHexChar(4);
  return t;
};
C.readString = function(e) {
  for (var t = "", i = ++this.pos; ; ) {
    this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
    var r = this.input.charCodeAt(this.pos);
    if (r === e)
      break;
    r === 92 ? (t += this.input.slice(i, this.pos), t += this.readEscapedChar(!1), i = this.pos) : r === 8232 || r === 8233 ? (this.options.ecmaVersion < 10 && this.raise(this.start, "Unterminated string constant"), ++this.pos, this.options.locations && (this.curLine++, this.lineStart = this.pos)) : (be(r) && this.raise(this.start, "Unterminated string constant"), ++this.pos);
  }
  return t += this.input.slice(i, this.pos++), this.finishToken(u.string, t);
};
var dr = {};
C.tryReadTemplateToken = function() {
  this.inTemplateElement = !0;
  try {
    this.readTmplToken();
  } catch (e) {
    if (e === dr)
      this.readInvalidTemplateToken();
    else
      throw e;
  }
  this.inTemplateElement = !1;
};
C.invalidStringToken = function(e, t) {
  if (this.inTemplateElement && this.options.ecmaVersion >= 9)
    throw dr;
  this.raise(e, t);
};
C.readTmplToken = function() {
  for (var e = "", t = this.pos; ; ) {
    this.pos >= this.input.length && this.raise(this.start, "Unterminated template");
    var i = this.input.charCodeAt(this.pos);
    if (i === 96 || i === 36 && this.input.charCodeAt(this.pos + 1) === 123)
      return this.pos === this.start && (this.type === u.template || this.type === u.invalidTemplate) ? i === 36 ? (this.pos += 2, this.finishToken(u.dollarBraceL)) : (++this.pos, this.finishToken(u.backQuote)) : (e += this.input.slice(t, this.pos), this.finishToken(u.template, e));
    if (i === 92)
      e += this.input.slice(t, this.pos), e += this.readEscapedChar(!0), t = this.pos;
    else if (be(i)) {
      switch (e += this.input.slice(t, this.pos), ++this.pos, i) {
        case 13:
          this.input.charCodeAt(this.pos) === 10 && ++this.pos;
        case 10:
          e += `
`;
          break;
        default:
          e += String.fromCharCode(i);
          break;
      }
      this.options.locations && (++this.curLine, this.lineStart = this.pos), t = this.pos;
    } else
      ++this.pos;
  }
};
C.readInvalidTemplateToken = function() {
  for (; this.pos < this.input.length; this.pos++)
    switch (this.input[this.pos]) {
      case "\\":
        ++this.pos;
        break;
      case "$":
        if (this.input[this.pos + 1] !== "{")
          break;
      case "`":
        return this.finishToken(u.invalidTemplate, this.input.slice(this.start, this.pos));
      case "\r":
        this.input[this.pos + 1] === `
` && ++this.pos;
      case `
`:
      case "\u2028":
      case "\u2029":
        ++this.curLine, this.lineStart = this.pos + 1;
        break;
    }
  this.raise(this.start, "Unterminated template");
};
C.readEscapedChar = function(e) {
  var t = this.input.charCodeAt(++this.pos);
  switch (++this.pos, t) {
    case 110:
      return `
`;
    case 114:
      return "\r";
    case 120:
      return String.fromCharCode(this.readHexChar(2));
    case 117:
      return ie(this.readCodePoint());
    case 116:
      return "	";
    case 98:
      return "\b";
    case 118:
      return "\v";
    case 102:
      return "\f";
    case 13:
      this.input.charCodeAt(this.pos) === 10 && ++this.pos;
    case 10:
      return this.options.locations && (this.lineStart = this.pos, ++this.curLine), "";
    case 56:
    case 57:
      if (this.strict && this.invalidStringToken(
        this.pos - 1,
        "Invalid escape sequence"
      ), e) {
        var i = this.pos - 1;
        this.invalidStringToken(
          i,
          "Invalid escape sequence in template string"
        );
      }
    default:
      if (t >= 48 && t <= 55) {
        var r = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0], s = parseInt(r, 8);
        return s > 255 && (r = r.slice(0, -1), s = parseInt(r, 8)), this.pos += r.length - 1, t = this.input.charCodeAt(this.pos), (r !== "0" || t === 56 || t === 57) && (this.strict || e) && this.invalidStringToken(
          this.pos - 1 - r.length,
          e ? "Octal literal in template string" : "Octal literal in strict mode"
        ), String.fromCharCode(s);
      }
      return be(t) ? (this.options.locations && (this.lineStart = this.pos, ++this.curLine), "") : String.fromCharCode(t);
  }
};
C.readHexChar = function(e) {
  var t = this.pos, i = this.readInt(16, e);
  return i === null && this.invalidStringToken(t, "Bad character escape sequence"), i;
};
C.readWord1 = function() {
  this.containsEsc = !1;
  for (var e = "", t = !0, i = this.pos, r = this.options.ecmaVersion >= 6; this.pos < this.input.length; ) {
    var s = this.fullCharCodeAtPos();
    if (ve(s, r))
      this.pos += s <= 65535 ? 1 : 2;
    else if (s === 92) {
      this.containsEsc = !0, e += this.input.slice(i, this.pos);
      var n = this.pos;
      this.input.charCodeAt(++this.pos) !== 117 && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"), ++this.pos;
      var a = this.readCodePoint();
      (t ? Q : ve)(a, r) || this.invalidStringToken(n, "Invalid Unicode escape"), e += ie(a), i = this.pos;
    } else
      break;
    t = !1;
  }
  return e + this.input.slice(i, this.pos);
};
C.readWord = function() {
  var e = this.readWord1(), t = u.name;
  return this.keywords.test(e) && (t = Tt[e]), this.finishToken(t, e);
};
var Ks = "8.12.1";
N.acorn = {
  Parser: N,
  version: Ks,
  defaultOptions: dt,
  Position: Pe,
  SourceLocation: Ze,
  getLineInfo: Mi,
  Node: tt,
  TokenType: A,
  tokTypes: u,
  keywordTypes: Tt,
  TokContext: G,
  tokContexts: T,
  isIdentifierChar: ve,
  isIdentifierStart: Q,
  Token: jt,
  isNewLine: be,
  lineBreak: $,
  lineBreakG: xs,
  nonASCIIwhitespace: Bi
};
function mr(e, t) {
  return N.parse(e, t);
}
let ae = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, i) => (i &= 63, i < 36 ? t += i.toString(36) : i < 62 ? t += (i - 26).toString(36).toUpperCase() : i > 62 ? t += "-" : t += "_", t), "");
var Qs = typeof global == "object" && global && global.Object === Object && global;
const vr = Qs;
var Xs = typeof self == "object" && self && self.Object === Object && self, Ys = vr || Xs || Function("return this")();
const z = Ys;
var Js = z.Symbol;
const re = Js;
var gr = Object.prototype, Zs = gr.hasOwnProperty, en = gr.toString, Se = re ? re.toStringTag : void 0;
function tn(e) {
  var t = Zs.call(e, Se), i = e[Se];
  try {
    e[Se] = void 0;
    var r = !0;
  } catch {
  }
  var s = en.call(e);
  return r && (t ? e[Se] = i : delete e[Se]), s;
}
var rn = Object.prototype, sn = rn.toString;
function nn(e) {
  return sn.call(e);
}
var an = "[object Null]", on = "[object Undefined]", ni = re ? re.toStringTag : void 0;
function Me(e) {
  return e == null ? e === void 0 ? on : an : ni && ni in Object(e) ? tn(e) : nn(e);
}
function ue(e) {
  return e != null && typeof e == "object";
}
var un = Array.isArray;
const Te = un;
function De(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var cn = "[object AsyncFunction]", hn = "[object Function]", ln = "[object GeneratorFunction]", fn = "[object Proxy]";
function xr(e) {
  if (!De(e))
    return !1;
  var t = Me(e);
  return t == hn || t == ln || t == cn || t == fn;
}
var pn = z["__core-js_shared__"];
const ht = pn;
var ai = function() {
  var e = /[^.]+$/.exec(ht && ht.keys && ht.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function dn(e) {
  return !!ai && ai in e;
}
var mn = Function.prototype, vn = mn.toString;
function he(e) {
  if (e != null) {
    try {
      return vn.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var gn = /[\\^$.*+?()[\]{}|]/g, xn = /^\[object .+?Constructor\]$/, yn = Function.prototype, bn = Object.prototype, _n = yn.toString, wn = bn.hasOwnProperty, Sn = RegExp(
  "^" + _n.call(wn).replace(gn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Cn(e) {
  if (!De(e) || dn(e))
    return !1;
  var t = xr(e) ? Sn : xn;
  return t.test(he(e));
}
function En(e, t) {
  return e == null ? void 0 : e[t];
}
function le(e, t) {
  var i = En(e, t);
  return Cn(i) ? i : void 0;
}
var An = le(z, "WeakMap");
const gt = An;
var oi = Object.create, In = function() {
  function e() {
  }
  return function(t) {
    if (!De(t))
      return {};
    if (oi)
      return oi(t);
    e.prototype = t;
    var i = new e();
    return e.prototype = void 0, i;
  };
}();
const Pn = In;
function kn(e, t) {
  var i = -1, r = e.length;
  for (t || (t = Array(r)); ++i < r; )
    t[i] = e[i];
  return t;
}
var Tn = function() {
  try {
    var e = le(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const ui = Tn;
function Nn(e, t) {
  for (var i = -1, r = e == null ? 0 : e.length; ++i < r && t(e[i], i, e) !== !1; )
    ;
  return e;
}
var On = 9007199254740991, Ln = /^(?:0|[1-9]\d*)$/;
function Rn(e, t) {
  var i = typeof e;
  return t = t ?? On, !!t && (i == "number" || i != "symbol" && Ln.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function yr(e, t, i) {
  t == "__proto__" && ui ? ui(e, t, {
    configurable: !0,
    enumerable: !0,
    value: i,
    writable: !0
  }) : e[t] = i;
}
function Mt(e, t) {
  return e === t || e !== e && t !== t;
}
var Vn = Object.prototype, Bn = Vn.hasOwnProperty;
function br(e, t, i) {
  var r = e[t];
  (!(Bn.call(e, t) && Mt(r, i)) || i === void 0 && !(t in e)) && yr(e, t, i);
}
function rt(e, t, i, r) {
  var s = !i;
  i || (i = {});
  for (var n = -1, a = t.length; ++n < a; ) {
    var o = t[n], c = r ? r(i[o], e[o], o, i, e) : void 0;
    c === void 0 && (c = e[o]), s ? yr(i, o, c) : br(i, o, c);
  }
  return i;
}
var jn = 9007199254740991;
function _r(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= jn;
}
function wr(e) {
  return e != null && _r(e.length) && !xr(e);
}
var Mn = Object.prototype;
function Dt(e) {
  var t = e && e.constructor, i = typeof t == "function" && t.prototype || Mn;
  return e === i;
}
function Dn(e, t) {
  for (var i = -1, r = Array(e); ++i < e; )
    r[i] = t(i);
  return r;
}
var Fn = "[object Arguments]";
function ci(e) {
  return ue(e) && Me(e) == Fn;
}
var Sr = Object.prototype, $n = Sr.hasOwnProperty, Un = Sr.propertyIsEnumerable, Gn = ci(function() {
  return arguments;
}()) ? ci : function(e) {
  return ue(e) && $n.call(e, "callee") && !Un.call(e, "callee");
};
const qn = Gn;
function Hn() {
  return !1;
}
var Cr = typeof exports == "object" && exports && !exports.nodeType && exports, hi = Cr && typeof module == "object" && module && !module.nodeType && module, Wn = hi && hi.exports === Cr, li = Wn ? z.Buffer : void 0, zn = li ? li.isBuffer : void 0, Kn = zn || Hn;
const ze = Kn;
var Qn = "[object Arguments]", Xn = "[object Array]", Yn = "[object Boolean]", Jn = "[object Date]", Zn = "[object Error]", ea = "[object Function]", ta = "[object Map]", ia = "[object Number]", ra = "[object Object]", sa = "[object RegExp]", na = "[object Set]", aa = "[object String]", oa = "[object WeakMap]", ua = "[object ArrayBuffer]", ca = "[object DataView]", ha = "[object Float32Array]", la = "[object Float64Array]", fa = "[object Int8Array]", pa = "[object Int16Array]", da = "[object Int32Array]", ma = "[object Uint8Array]", va = "[object Uint8ClampedArray]", ga = "[object Uint16Array]", xa = "[object Uint32Array]", k = {};
k[ha] = k[la] = k[fa] = k[pa] = k[da] = k[ma] = k[va] = k[ga] = k[xa] = !0;
k[Qn] = k[Xn] = k[ua] = k[Yn] = k[ca] = k[Jn] = k[Zn] = k[ea] = k[ta] = k[ia] = k[ra] = k[sa] = k[na] = k[aa] = k[oa] = !1;
function ya(e) {
  return ue(e) && _r(e.length) && !!k[Me(e)];
}
function Ft(e) {
  return function(t) {
    return e(t);
  };
}
var Er = typeof exports == "object" && exports && !exports.nodeType && exports, Ae = Er && typeof module == "object" && module && !module.nodeType && module, ba = Ae && Ae.exports === Er, lt = ba && vr.process, _a = function() {
  try {
    var e = Ae && Ae.require && Ae.require("util").types;
    return e || lt && lt.binding && lt.binding("util");
  } catch {
  }
}();
const ge = _a;
var fi = ge && ge.isTypedArray, wa = fi ? Ft(fi) : ya;
const Ar = wa;
var Sa = Object.prototype, Ca = Sa.hasOwnProperty;
function Ir(e, t) {
  var i = Te(e), r = !i && qn(e), s = !i && !r && ze(e), n = !i && !r && !s && Ar(e), a = i || r || s || n, o = a ? Dn(e.length, String) : [], c = o.length;
  for (var h in e)
    (t || Ca.call(e, h)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (h == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (h == "offset" || h == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    n && (h == "buffer" || h == "byteLength" || h == "byteOffset") || // Skip index properties.
    Rn(h, c))) && o.push(h);
  return o;
}
function Pr(e, t) {
  return function(i) {
    return e(t(i));
  };
}
var Ea = Pr(Object.keys, Object);
const Aa = Ea;
var Ia = Object.prototype, Pa = Ia.hasOwnProperty;
function ka(e) {
  if (!Dt(e))
    return Aa(e);
  var t = [];
  for (var i in Object(e))
    Pa.call(e, i) && i != "constructor" && t.push(i);
  return t;
}
function $t(e) {
  return wr(e) ? Ir(e) : ka(e);
}
function Ta(e) {
  var t = [];
  if (e != null)
    for (var i in Object(e))
      t.push(i);
  return t;
}
var Na = Object.prototype, Oa = Na.hasOwnProperty;
function La(e) {
  if (!De(e))
    return Ta(e);
  var t = Dt(e), i = [];
  for (var r in e)
    r == "constructor" && (t || !Oa.call(e, r)) || i.push(r);
  return i;
}
function Ut(e) {
  return wr(e) ? Ir(e, !0) : La(e);
}
var Ra = le(Object, "create");
const Ne = Ra;
function Va() {
  this.__data__ = Ne ? Ne(null) : {}, this.size = 0;
}
function Ba(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var ja = "__lodash_hash_undefined__", Ma = Object.prototype, Da = Ma.hasOwnProperty;
function Fa(e) {
  var t = this.__data__;
  if (Ne) {
    var i = t[e];
    return i === ja ? void 0 : i;
  }
  return Da.call(t, e) ? t[e] : void 0;
}
var $a = Object.prototype, Ua = $a.hasOwnProperty;
function Ga(e) {
  var t = this.__data__;
  return Ne ? t[e] !== void 0 : Ua.call(t, e);
}
var qa = "__lodash_hash_undefined__";
function Ha(e, t) {
  var i = this.__data__;
  return this.size += this.has(e) ? 0 : 1, i[e] = Ne && t === void 0 ? qa : t, this;
}
function ce(e) {
  var t = -1, i = e == null ? 0 : e.length;
  for (this.clear(); ++t < i; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ce.prototype.clear = Va;
ce.prototype.delete = Ba;
ce.prototype.get = Fa;
ce.prototype.has = Ga;
ce.prototype.set = Ha;
function Wa() {
  this.__data__ = [], this.size = 0;
}
function st(e, t) {
  for (var i = e.length; i--; )
    if (Mt(e[i][0], t))
      return i;
  return -1;
}
var za = Array.prototype, Ka = za.splice;
function Qa(e) {
  var t = this.__data__, i = st(t, e);
  if (i < 0)
    return !1;
  var r = t.length - 1;
  return i == r ? t.pop() : Ka.call(t, i, 1), --this.size, !0;
}
function Xa(e) {
  var t = this.__data__, i = st(t, e);
  return i < 0 ? void 0 : t[i][1];
}
function Ya(e) {
  return st(this.__data__, e) > -1;
}
function Ja(e, t) {
  var i = this.__data__, r = st(i, e);
  return r < 0 ? (++this.size, i.push([e, t])) : i[r][1] = t, this;
}
function ee(e) {
  var t = -1, i = e == null ? 0 : e.length;
  for (this.clear(); ++t < i; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ee.prototype.clear = Wa;
ee.prototype.delete = Qa;
ee.prototype.get = Xa;
ee.prototype.has = Ya;
ee.prototype.set = Ja;
var Za = le(z, "Map");
const Oe = Za;
function eo() {
  this.size = 0, this.__data__ = {
    hash: new ce(),
    map: new (Oe || ee)(),
    string: new ce()
  };
}
function to(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function nt(e, t) {
  var i = e.__data__;
  return to(t) ? i[typeof t == "string" ? "string" : "hash"] : i.map;
}
function io(e) {
  var t = nt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function ro(e) {
  return nt(this, e).get(e);
}
function so(e) {
  return nt(this, e).has(e);
}
function no(e, t) {
  var i = nt(this, e), r = i.size;
  return i.set(e, t), this.size += i.size == r ? 0 : 1, this;
}
function fe(e) {
  var t = -1, i = e == null ? 0 : e.length;
  for (this.clear(); ++t < i; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
fe.prototype.clear = eo;
fe.prototype.delete = io;
fe.prototype.get = ro;
fe.prototype.has = so;
fe.prototype.set = no;
function kr(e, t) {
  for (var i = -1, r = t.length, s = e.length; ++i < r; )
    e[s + i] = t[i];
  return e;
}
var ao = Pr(Object.getPrototypeOf, Object);
const Tr = ao;
function oo() {
  this.__data__ = new ee(), this.size = 0;
}
function uo(e) {
  var t = this.__data__, i = t.delete(e);
  return this.size = t.size, i;
}
function co(e) {
  return this.__data__.get(e);
}
function ho(e) {
  return this.__data__.has(e);
}
var lo = 200;
function fo(e, t) {
  var i = this.__data__;
  if (i instanceof ee) {
    var r = i.__data__;
    if (!Oe || r.length < lo - 1)
      return r.push([e, t]), this.size = ++i.size, this;
    i = this.__data__ = new fe(r);
  }
  return i.set(e, t), this.size = i.size, this;
}
function K(e) {
  var t = this.__data__ = new ee(e);
  this.size = t.size;
}
K.prototype.clear = oo;
K.prototype.delete = uo;
K.prototype.get = co;
K.prototype.has = ho;
K.prototype.set = fo;
function po(e, t) {
  return e && rt(t, $t(t), e);
}
function mo(e, t) {
  return e && rt(t, Ut(t), e);
}
var Nr = typeof exports == "object" && exports && !exports.nodeType && exports, pi = Nr && typeof module == "object" && module && !module.nodeType && module, vo = pi && pi.exports === Nr, di = vo ? z.Buffer : void 0, mi = di ? di.allocUnsafe : void 0;
function go(e, t) {
  if (t)
    return e.slice();
  var i = e.length, r = mi ? mi(i) : new e.constructor(i);
  return e.copy(r), r;
}
function xo(e, t) {
  for (var i = -1, r = e == null ? 0 : e.length, s = 0, n = []; ++i < r; ) {
    var a = e[i];
    t(a, i, e) && (n[s++] = a);
  }
  return n;
}
function Or() {
  return [];
}
var yo = Object.prototype, bo = yo.propertyIsEnumerable, vi = Object.getOwnPropertySymbols, _o = vi ? function(e) {
  return e == null ? [] : (e = Object(e), xo(vi(e), function(t) {
    return bo.call(e, t);
  }));
} : Or;
const Gt = _o;
function wo(e, t) {
  return rt(e, Gt(e), t);
}
var So = Object.getOwnPropertySymbols, Co = So ? function(e) {
  for (var t = []; e; )
    kr(t, Gt(e)), e = Tr(e);
  return t;
} : Or;
const Lr = Co;
function Eo(e, t) {
  return rt(e, Lr(e), t);
}
function Rr(e, t, i) {
  var r = t(e);
  return Te(e) ? r : kr(r, i(e));
}
function xt(e) {
  return Rr(e, $t, Gt);
}
function Ao(e) {
  return Rr(e, Ut, Lr);
}
var Io = le(z, "DataView");
const yt = Io;
var Po = le(z, "Promise");
const bt = Po;
var ko = le(z, "Set");
const _t = ko;
var gi = "[object Map]", To = "[object Object]", xi = "[object Promise]", yi = "[object Set]", bi = "[object WeakMap]", _i = "[object DataView]", No = he(yt), Oo = he(Oe), Lo = he(bt), Ro = he(_t), Vo = he(gt), ne = Me;
(yt && ne(new yt(new ArrayBuffer(1))) != _i || Oe && ne(new Oe()) != gi || bt && ne(bt.resolve()) != xi || _t && ne(new _t()) != yi || gt && ne(new gt()) != bi) && (ne = function(e) {
  var t = Me(e), i = t == To ? e.constructor : void 0, r = i ? he(i) : "";
  if (r)
    switch (r) {
      case No:
        return _i;
      case Oo:
        return gi;
      case Lo:
        return xi;
      case Ro:
        return yi;
      case Vo:
        return bi;
    }
  return t;
});
const Le = ne;
var Bo = Object.prototype, jo = Bo.hasOwnProperty;
function Mo(e) {
  var t = e.length, i = new e.constructor(t);
  return t && typeof e[0] == "string" && jo.call(e, "index") && (i.index = e.index, i.input = e.input), i;
}
var Do = z.Uint8Array;
const Ke = Do;
function qt(e) {
  var t = new e.constructor(e.byteLength);
  return new Ke(t).set(new Ke(e)), t;
}
function Fo(e, t) {
  var i = t ? qt(e.buffer) : e.buffer;
  return new e.constructor(i, e.byteOffset, e.byteLength);
}
var $o = /\w*$/;
function Uo(e) {
  var t = new e.constructor(e.source, $o.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var wi = re ? re.prototype : void 0, Si = wi ? wi.valueOf : void 0;
function Go(e) {
  return Si ? Object(Si.call(e)) : {};
}
function qo(e, t) {
  var i = t ? qt(e.buffer) : e.buffer;
  return new e.constructor(i, e.byteOffset, e.length);
}
var Ho = "[object Boolean]", Wo = "[object Date]", zo = "[object Map]", Ko = "[object Number]", Qo = "[object RegExp]", Xo = "[object Set]", Yo = "[object String]", Jo = "[object Symbol]", Zo = "[object ArrayBuffer]", eu = "[object DataView]", tu = "[object Float32Array]", iu = "[object Float64Array]", ru = "[object Int8Array]", su = "[object Int16Array]", nu = "[object Int32Array]", au = "[object Uint8Array]", ou = "[object Uint8ClampedArray]", uu = "[object Uint16Array]", cu = "[object Uint32Array]";
function hu(e, t, i) {
  var r = e.constructor;
  switch (t) {
    case Zo:
      return qt(e);
    case Ho:
    case Wo:
      return new r(+e);
    case eu:
      return Fo(e, i);
    case tu:
    case iu:
    case ru:
    case su:
    case nu:
    case au:
    case ou:
    case uu:
    case cu:
      return qo(e, i);
    case zo:
      return new r();
    case Ko:
    case Yo:
      return new r(e);
    case Qo:
      return Uo(e);
    case Xo:
      return new r();
    case Jo:
      return Go(e);
  }
}
function lu(e) {
  return typeof e.constructor == "function" && !Dt(e) ? Pn(Tr(e)) : {};
}
var fu = "[object Map]";
function pu(e) {
  return ue(e) && Le(e) == fu;
}
var Ci = ge && ge.isMap, du = Ci ? Ft(Ci) : pu;
const mu = du;
var vu = "[object Set]";
function gu(e) {
  return ue(e) && Le(e) == vu;
}
var Ei = ge && ge.isSet, xu = Ei ? Ft(Ei) : gu;
const yu = xu;
var bu = 1, _u = 2, wu = 4, Vr = "[object Arguments]", Su = "[object Array]", Cu = "[object Boolean]", Eu = "[object Date]", Au = "[object Error]", Br = "[object Function]", Iu = "[object GeneratorFunction]", Pu = "[object Map]", ku = "[object Number]", jr = "[object Object]", Tu = "[object RegExp]", Nu = "[object Set]", Ou = "[object String]", Lu = "[object Symbol]", Ru = "[object WeakMap]", Vu = "[object ArrayBuffer]", Bu = "[object DataView]", ju = "[object Float32Array]", Mu = "[object Float64Array]", Du = "[object Int8Array]", Fu = "[object Int16Array]", $u = "[object Int32Array]", Uu = "[object Uint8Array]", Gu = "[object Uint8ClampedArray]", qu = "[object Uint16Array]", Hu = "[object Uint32Array]", I = {};
I[Vr] = I[Su] = I[Vu] = I[Bu] = I[Cu] = I[Eu] = I[ju] = I[Mu] = I[Du] = I[Fu] = I[$u] = I[Pu] = I[ku] = I[jr] = I[Tu] = I[Nu] = I[Ou] = I[Lu] = I[Uu] = I[Gu] = I[qu] = I[Hu] = !0;
I[Au] = I[Br] = I[Ru] = !1;
function $e(e, t, i, r, s, n) {
  var a, o = t & bu, c = t & _u, h = t & wu;
  if (i && (a = s ? i(e, r, s, n) : i(e)), a !== void 0)
    return a;
  if (!De(e))
    return e;
  var l = Te(e);
  if (l) {
    if (a = Mo(e), !o)
      return kn(e, a);
  } else {
    var p = Le(e), f = p == Br || p == Iu;
    if (ze(e))
      return go(e, o);
    if (p == jr || p == Vr || f && !s) {
      if (a = c || f ? {} : lu(e), !o)
        return c ? Eo(e, mo(a, e)) : wo(e, po(a, e));
    } else {
      if (!I[p])
        return s ? e : {};
      a = hu(e, p, o);
    }
  }
  n || (n = new K());
  var d = n.get(e);
  if (d)
    return d;
  n.set(e, a), yu(e) ? e.forEach(function(v) {
    a.add($e(v, t, i, v, e, n));
  }) : mu(e) && e.forEach(function(v, b) {
    a.set(b, $e(v, t, i, b, e, n));
  });
  var m = h ? c ? Ao : xt : c ? Ut : $t, S = l ? void 0 : m(e);
  return Nn(S || e, function(v, b) {
    S && (b = v, v = e[b]), br(a, b, $e(v, t, i, b, e, n));
  }), a;
}
var Wu = 1, zu = 4;
function xe(e) {
  return $e(e, Wu | zu);
}
var Ku = "__lodash_hash_undefined__";
function Qu(e) {
  return this.__data__.set(e, Ku), this;
}
function Xu(e) {
  return this.__data__.has(e);
}
function Qe(e) {
  var t = -1, i = e == null ? 0 : e.length;
  for (this.__data__ = new fe(); ++t < i; )
    this.add(e[t]);
}
Qe.prototype.add = Qe.prototype.push = Qu;
Qe.prototype.has = Xu;
function Yu(e, t) {
  for (var i = -1, r = e == null ? 0 : e.length; ++i < r; )
    if (t(e[i], i, e))
      return !0;
  return !1;
}
function Ju(e, t) {
  return e.has(t);
}
var Zu = 1, ec = 2;
function Mr(e, t, i, r, s, n) {
  var a = i & Zu, o = e.length, c = t.length;
  if (o != c && !(a && c > o))
    return !1;
  var h = n.get(e), l = n.get(t);
  if (h && l)
    return h == t && l == e;
  var p = -1, f = !0, d = i & ec ? new Qe() : void 0;
  for (n.set(e, t), n.set(t, e); ++p < o; ) {
    var m = e[p], S = t[p];
    if (r)
      var v = a ? r(S, m, p, t, e, n) : r(m, S, p, e, t, n);
    if (v !== void 0) {
      if (v)
        continue;
      f = !1;
      break;
    }
    if (d) {
      if (!Yu(t, function(b, O) {
        if (!Ju(d, O) && (m === b || s(m, b, i, r, n)))
          return d.push(O);
      })) {
        f = !1;
        break;
      }
    } else if (!(m === S || s(m, S, i, r, n))) {
      f = !1;
      break;
    }
  }
  return n.delete(e), n.delete(t), f;
}
function tc(e) {
  var t = -1, i = Array(e.size);
  return e.forEach(function(r, s) {
    i[++t] = [s, r];
  }), i;
}
function ic(e) {
  var t = -1, i = Array(e.size);
  return e.forEach(function(r) {
    i[++t] = r;
  }), i;
}
var rc = 1, sc = 2, nc = "[object Boolean]", ac = "[object Date]", oc = "[object Error]", uc = "[object Map]", cc = "[object Number]", hc = "[object RegExp]", lc = "[object Set]", fc = "[object String]", pc = "[object Symbol]", dc = "[object ArrayBuffer]", mc = "[object DataView]", Ai = re ? re.prototype : void 0, ft = Ai ? Ai.valueOf : void 0;
function vc(e, t, i, r, s, n, a) {
  switch (i) {
    case mc:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case dc:
      return !(e.byteLength != t.byteLength || !n(new Ke(e), new Ke(t)));
    case nc:
    case ac:
    case cc:
      return Mt(+e, +t);
    case oc:
      return e.name == t.name && e.message == t.message;
    case hc:
    case fc:
      return e == t + "";
    case uc:
      var o = tc;
    case lc:
      var c = r & rc;
      if (o || (o = ic), e.size != t.size && !c)
        return !1;
      var h = a.get(e);
      if (h)
        return h == t;
      r |= sc, a.set(e, t);
      var l = Mr(o(e), o(t), r, s, n, a);
      return a.delete(e), l;
    case pc:
      if (ft)
        return ft.call(e) == ft.call(t);
  }
  return !1;
}
var gc = 1, xc = Object.prototype, yc = xc.hasOwnProperty;
function bc(e, t, i, r, s, n) {
  var a = i & gc, o = xt(e), c = o.length, h = xt(t), l = h.length;
  if (c != l && !a)
    return !1;
  for (var p = c; p--; ) {
    var f = o[p];
    if (!(a ? f in t : yc.call(t, f)))
      return !1;
  }
  var d = n.get(e), m = n.get(t);
  if (d && m)
    return d == t && m == e;
  var S = !0;
  n.set(e, t), n.set(t, e);
  for (var v = a; ++p < c; ) {
    f = o[p];
    var b = e[f], O = t[f];
    if (r)
      var P = a ? r(O, b, f, t, e, n) : r(b, O, f, e, t, n);
    if (!(P === void 0 ? b === O || s(b, O, i, r, n) : P)) {
      S = !1;
      break;
    }
    v || (v = f == "constructor");
  }
  if (S && !v) {
    var B = e.constructor, q = t.constructor;
    B != q && "constructor" in e && "constructor" in t && !(typeof B == "function" && B instanceof B && typeof q == "function" && q instanceof q) && (S = !1);
  }
  return n.delete(e), n.delete(t), S;
}
var _c = 1, Ii = "[object Arguments]", Pi = "[object Array]", Fe = "[object Object]", wc = Object.prototype, ki = wc.hasOwnProperty;
function Sc(e, t, i, r, s, n) {
  var a = Te(e), o = Te(t), c = a ? Pi : Le(e), h = o ? Pi : Le(t);
  c = c == Ii ? Fe : c, h = h == Ii ? Fe : h;
  var l = c == Fe, p = h == Fe, f = c == h;
  if (f && ze(e)) {
    if (!ze(t))
      return !1;
    a = !0, l = !1;
  }
  if (f && !l)
    return n || (n = new K()), a || Ar(e) ? Mr(e, t, i, r, s, n) : vc(e, t, c, i, r, s, n);
  if (!(i & _c)) {
    var d = l && ki.call(e, "__wrapped__"), m = p && ki.call(t, "__wrapped__");
    if (d || m) {
      var S = d ? e.value() : e, v = m ? t.value() : t;
      return n || (n = new K()), s(S, v, i, r, n);
    }
  }
  return f ? (n || (n = new K()), bc(e, t, i, r, s, n)) : !1;
}
function Dr(e, t, i, r, s) {
  return e === t ? !0 : e == null || t == null || !ue(e) && !ue(t) ? e !== e && t !== t : Sc(e, t, i, r, Dr, s);
}
function Ht(e, t) {
  return Dr(e, t);
}
var Fr = { exports: {} };
(function(e) {
  var t = Object.prototype.hasOwnProperty, i = "~";
  function r() {
  }
  Object.create && (r.prototype = /* @__PURE__ */ Object.create(null), new r().__proto__ || (i = !1));
  function s(c, h, l) {
    this.fn = c, this.context = h, this.once = l || !1;
  }
  function n(c, h, l, p, f) {
    if (typeof l != "function")
      throw new TypeError("The listener must be a function");
    var d = new s(l, p || c, f), m = i ? i + h : h;
    return c._events[m] ? c._events[m].fn ? c._events[m] = [c._events[m], d] : c._events[m].push(d) : (c._events[m] = d, c._eventsCount++), c;
  }
  function a(c, h) {
    --c._eventsCount === 0 ? c._events = new r() : delete c._events[h];
  }
  function o() {
    this._events = new r(), this._eventsCount = 0;
  }
  o.prototype.eventNames = function() {
    var h = [], l, p;
    if (this._eventsCount === 0)
      return h;
    for (p in l = this._events)
      t.call(l, p) && h.push(i ? p.slice(1) : p);
    return Object.getOwnPropertySymbols ? h.concat(Object.getOwnPropertySymbols(l)) : h;
  }, o.prototype.listeners = function(h) {
    var l = i ? i + h : h, p = this._events[l];
    if (!p)
      return [];
    if (p.fn)
      return [p.fn];
    for (var f = 0, d = p.length, m = new Array(d); f < d; f++)
      m[f] = p[f].fn;
    return m;
  }, o.prototype.listenerCount = function(h) {
    var l = i ? i + h : h, p = this._events[l];
    return p ? p.fn ? 1 : p.length : 0;
  }, o.prototype.emit = function(h, l, p, f, d, m) {
    var S = i ? i + h : h;
    if (!this._events[S])
      return !1;
    var v = this._events[S], b = arguments.length, O, P;
    if (v.fn) {
      switch (v.once && this.removeListener(h, v.fn, void 0, !0), b) {
        case 1:
          return v.fn.call(v.context), !0;
        case 2:
          return v.fn.call(v.context, l), !0;
        case 3:
          return v.fn.call(v.context, l, p), !0;
        case 4:
          return v.fn.call(v.context, l, p, f), !0;
        case 5:
          return v.fn.call(v.context, l, p, f, d), !0;
        case 6:
          return v.fn.call(v.context, l, p, f, d, m), !0;
      }
      for (P = 1, O = new Array(b - 1); P < b; P++)
        O[P - 1] = arguments[P];
      v.fn.apply(v.context, O);
    } else {
      var B = v.length, q;
      for (P = 0; P < B; P++)
        switch (v[P].once && this.removeListener(h, v[P].fn, void 0, !0), b) {
          case 1:
            v[P].fn.call(v[P].context);
            break;
          case 2:
            v[P].fn.call(v[P].context, l);
            break;
          case 3:
            v[P].fn.call(v[P].context, l, p);
            break;
          case 4:
            v[P].fn.call(v[P].context, l, p, f);
            break;
          default:
            if (!O)
              for (q = 1, O = new Array(b - 1); q < b; q++)
                O[q - 1] = arguments[q];
            v[P].fn.apply(v[P].context, O);
        }
    }
    return !0;
  }, o.prototype.on = function(h, l, p) {
    return n(this, h, l, p, !1);
  }, o.prototype.once = function(h, l, p) {
    return n(this, h, l, p, !0);
  }, o.prototype.removeListener = function(h, l, p, f) {
    var d = i ? i + h : h;
    if (!this._events[d])
      return this;
    if (!l)
      return a(this, d), this;
    var m = this._events[d];
    if (m.fn)
      m.fn === l && (!f || m.once) && (!p || m.context === p) && a(this, d);
    else {
      for (var S = 0, v = [], b = m.length; S < b; S++)
        (m[S].fn !== l || f && !m[S].once || p && m[S].context !== p) && v.push(m[S]);
      v.length ? this._events[d] = v.length === 1 ? v[0] : v : a(this, d);
    }
    return this;
  }, o.prototype.removeAllListeners = function(h) {
    var l;
    return h ? (l = i ? i + h : h, this._events[l] && a(this, l)) : (this._events = new r(), this._eventsCount = 0), this;
  }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prefixed = i, o.EventEmitter = o, e.exports = o;
})(Fr);
var Cc = Fr.exports;
const $r = /* @__PURE__ */ ss(Cc);
var Ec = Object.create, Wt = Object.defineProperty, Ac = Object.getOwnPropertyDescriptor, Ur = Object.getOwnPropertyNames, Ic = Object.getPrototypeOf, Pc = Object.prototype.hasOwnProperty, g = (e, t) => Wt(e, "name", { value: t, configurable: !0 }), kc = (e, t) => function() {
  return t || (0, e[Ur(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, Tc = (e, t, i, r) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let s of Ur(t))
      !Pc.call(e, s) && s !== i && Wt(e, s, { get: () => t[s], enumerable: !(r = Ac(t, s)) || r.enumerable });
  return e;
}, Nc = (e, t, i) => (i = e != null ? Ec(Ic(e)) : {}, Tc(
  t || !e || !e.__esModule ? Wt(i, "default", { value: e, enumerable: !0 }) : i,
  e
)), Oc = kc({
  "../../node_modules/.pnpm/path-browserify@1.0.1/node_modules/path-browserify/index.js"(e, t) {
    function i(a) {
      if (typeof a != "string")
        throw new TypeError("Path must be a string. Received " + JSON.stringify(a));
    }
    g(i, "assertPath");
    function r(a, o) {
      for (var c = "", h = 0, l = -1, p = 0, f, d = 0; d <= a.length; ++d) {
        if (d < a.length)
          f = a.charCodeAt(d);
        else {
          if (f === 47)
            break;
          f = 47;
        }
        if (f === 47) {
          if (!(l === d - 1 || p === 1))
            if (l !== d - 1 && p === 2) {
              if (c.length < 2 || h !== 2 || c.charCodeAt(c.length - 1) !== 46 || c.charCodeAt(c.length - 2) !== 46) {
                if (c.length > 2) {
                  var m = c.lastIndexOf("/");
                  if (m !== c.length - 1) {
                    m === -1 ? (c = "", h = 0) : (c = c.slice(0, m), h = c.length - 1 - c.lastIndexOf("/")), l = d, p = 0;
                    continue;
                  }
                } else if (c.length === 2 || c.length === 1) {
                  c = "", h = 0, l = d, p = 0;
                  continue;
                }
              }
              o && (c.length > 0 ? c += "/.." : c = "..", h = 2);
            } else
              c.length > 0 ? c += "/" + a.slice(l + 1, d) : c = a.slice(l + 1, d), h = d - l - 1;
          l = d, p = 0;
        } else
          f === 46 && p !== -1 ? ++p : p = -1;
      }
      return c;
    }
    g(r, "normalizeStringPosix");
    function s(a, o) {
      var c = o.dir || o.root, h = o.base || (o.name || "") + (o.ext || "");
      return c ? c === o.root ? c + h : c + a + h : h;
    }
    g(s, "_format");
    var n = {
      resolve: /* @__PURE__ */ g(function() {
        for (var o = "", c = !1, h, l = arguments.length - 1; l >= -1 && !c; l--) {
          var p;
          l >= 0 ? p = arguments[l] : (h === void 0 && (h = process.cwd()), p = h), i(p), p.length !== 0 && (o = p + "/" + o, c = p.charCodeAt(0) === 47);
        }
        return o = r(o, !c), c ? o.length > 0 ? "/" + o : "/" : o.length > 0 ? o : ".";
      }, "resolve"),
      normalize: /* @__PURE__ */ g(function(o) {
        if (i(o), o.length === 0)
          return ".";
        var c = o.charCodeAt(0) === 47, h = o.charCodeAt(o.length - 1) === 47;
        return o = r(o, !c), o.length === 0 && !c && (o = "."), o.length > 0 && h && (o += "/"), c ? "/" + o : o;
      }, "normalize"),
      isAbsolute: /* @__PURE__ */ g(function(o) {
        return i(o), o.length > 0 && o.charCodeAt(0) === 47;
      }, "isAbsolute"),
      join: /* @__PURE__ */ g(function() {
        if (arguments.length === 0)
          return ".";
        for (var o, c = 0; c < arguments.length; ++c) {
          var h = arguments[c];
          i(h), h.length > 0 && (o === void 0 ? o = h : o += "/" + h);
        }
        return o === void 0 ? "." : n.normalize(o);
      }, "join"),
      relative: /* @__PURE__ */ g(function(o, c) {
        if (i(o), i(c), o === c || (o = n.resolve(o), c = n.resolve(c), o === c))
          return "";
        for (var h = 1; h < o.length && o.charCodeAt(h) === 47; ++h)
          ;
        for (var l = o.length, p = l - h, f = 1; f < c.length && c.charCodeAt(f) === 47; ++f)
          ;
        for (var d = c.length, m = d - f, S = p < m ? p : m, v = -1, b = 0; b <= S; ++b) {
          if (b === S) {
            if (m > S) {
              if (c.charCodeAt(f + b) === 47)
                return c.slice(f + b + 1);
              if (b === 0)
                return c.slice(f + b);
            } else
              p > S && (o.charCodeAt(h + b) === 47 ? v = b : b === 0 && (v = 0));
            break;
          }
          var O = o.charCodeAt(h + b), P = c.charCodeAt(f + b);
          if (O !== P)
            break;
          O === 47 && (v = b);
        }
        var B = "";
        for (b = h + v + 1; b <= l; ++b)
          (b === l || o.charCodeAt(b) === 47) && (B.length === 0 ? B += ".." : B += "/..");
        return B.length > 0 ? B + c.slice(f + v) : (f += v, c.charCodeAt(f) === 47 && ++f, c.slice(f));
      }, "relative"),
      _makeLong: /* @__PURE__ */ g(function(o) {
        return o;
      }, "_makeLong"),
      dirname: /* @__PURE__ */ g(function(o) {
        if (i(o), o.length === 0)
          return ".";
        for (var c = o.charCodeAt(0), h = c === 47, l = -1, p = !0, f = o.length - 1; f >= 1; --f)
          if (c = o.charCodeAt(f), c === 47) {
            if (!p) {
              l = f;
              break;
            }
          } else
            p = !1;
        return l === -1 ? h ? "/" : "." : h && l === 1 ? "//" : o.slice(0, l);
      }, "dirname"),
      basename: /* @__PURE__ */ g(function(o, c) {
        if (c !== void 0 && typeof c != "string")
          throw new TypeError('"ext" argument must be a string');
        i(o);
        var h = 0, l = -1, p = !0, f;
        if (c !== void 0 && c.length > 0 && c.length <= o.length) {
          if (c.length === o.length && c === o)
            return "";
          var d = c.length - 1, m = -1;
          for (f = o.length - 1; f >= 0; --f) {
            var S = o.charCodeAt(f);
            if (S === 47) {
              if (!p) {
                h = f + 1;
                break;
              }
            } else
              m === -1 && (p = !1, m = f + 1), d >= 0 && (S === c.charCodeAt(d) ? --d === -1 && (l = f) : (d = -1, l = m));
          }
          return h === l ? l = m : l === -1 && (l = o.length), o.slice(h, l);
        } else {
          for (f = o.length - 1; f >= 0; --f)
            if (o.charCodeAt(f) === 47) {
              if (!p) {
                h = f + 1;
                break;
              }
            } else
              l === -1 && (p = !1, l = f + 1);
          return l === -1 ? "" : o.slice(h, l);
        }
      }, "basename"),
      extname: /* @__PURE__ */ g(function(o) {
        i(o);
        for (var c = -1, h = 0, l = -1, p = !0, f = 0, d = o.length - 1; d >= 0; --d) {
          var m = o.charCodeAt(d);
          if (m === 47) {
            if (!p) {
              h = d + 1;
              break;
            }
            continue;
          }
          l === -1 && (p = !1, l = d + 1), m === 46 ? c === -1 ? c = d : f !== 1 && (f = 1) : c !== -1 && (f = -1);
        }
        return c === -1 || l === -1 || f === 0 || f === 1 && c === l - 1 && c === h + 1 ? "" : o.slice(c, l);
      }, "extname"),
      format: /* @__PURE__ */ g(function(o) {
        if (o === null || typeof o != "object")
          throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof o);
        return s("/", o);
      }, "format"),
      parse: /* @__PURE__ */ g(function(o) {
        i(o);
        var c = {
          root: "",
          dir: "",
          base: "",
          ext: "",
          name: ""
        };
        if (o.length === 0)
          return c;
        var h = o.charCodeAt(0), l = h === 47, p;
        l ? (c.root = "/", p = 1) : p = 0;
        for (var f = -1, d = 0, m = -1, S = !0, v = o.length - 1, b = 0; v >= p; --v) {
          if (h = o.charCodeAt(v), h === 47) {
            if (!S) {
              d = v + 1;
              break;
            }
            continue;
          }
          m === -1 && (S = !1, m = v + 1), h === 46 ? f === -1 ? f = v : b !== 1 && (b = 1) : f !== -1 && (b = -1);
        }
        return f === -1 || m === -1 || b === 0 || b === 1 && f === m - 1 && f === d + 1 ? m !== -1 && (d === 0 && l ? c.base = c.name = o.slice(1, m) : c.base = c.name = o.slice(d, m)) : (d === 0 && l ? (c.name = o.slice(1, f), c.base = o.slice(1, m)) : (c.name = o.slice(d, f), c.base = o.slice(d, m)), c.ext = o.slice(f, m)), d > 0 ? c.dir = o.slice(0, d - 1) : l && (c.dir = "/"), c;
      }, "parse"),
      sep: "/",
      delimiter: ":",
      win32: null,
      posix: null
    };
    n.posix = n, t.exports = n;
  }
}), oe = /\{\{([^}]+)\}\}/g;
function Gr(e) {
  const t = mr(e, {
    ecmaVersion: "latest"
  }), i = /* @__PURE__ */ new Set();
  function r(s) {
    if (s.type === "Identifier")
      i.add(s.name);
    else if (s.type === "MemberExpression")
      r(s.object);
    else
      for (const n in s)
        s[n] && typeof s[n] == "object" && r(s[n]);
  }
  return g(r, "visit"), r(t), Array.from(i);
}
g(Gr, "extractVariables");
function Lc(e, t, i) {
  const r = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set(), n = {}, a = [];
  function o(c) {
    for (const h in c) {
      if (typeof c[h] == "object") {
        o(c[h]);
        continue;
      }
      typeof c[h] == "string" && oe.test(c[h]) && c[h].match(oe).map((l) => l.slice(2, -2)).forEach((l) => {
        Gr(l).forEach((f) => s.add(f));
      });
    }
  }
  g(o, "parseAttrs"), e.nodes.forEach((c) => {
    c.attrs.key && r.add(c.attrs.key), o(c.attrs);
  });
  for (const c in t) {
    if (c.endsWith(".css")) {
      a.push(c);
      continue;
    }
    n[c] || (n[c] = []);
    for (const h in t[c]) {
      const l = t[c][h];
      typeof l == "object" && l.alioth && (l.alioth === "setRenderFn" && l.data.mode === "runtime" && n[c].push(h), l.alioth === "widget" && r.has(l.data.key) && (!l.data.mode || l.data.mode === "runtime") && n[c].push(h), l.alioth === "state" && s.has(l.data.key) && n[c].push(h));
    }
  }
  return Object.entries(n).reduce((c, [h, l]) => l.length === 0 ? c : `${c}export {${l.join(",")}} from '.${h.replace(i, "")}'
`, "") + a.map((c) => `import '${c.replace(i, "")}'`).join(`
`);
}
g(Lc, "createEntryCode");
function Rc(e, t = window) {
  let i;
  const r = /* @__PURE__ */ g((n) => {
    var a;
    (a = e.move) == null || a.call(e, n);
  }, "moveEvent"), s = /* @__PURE__ */ g((n) => {
    var a;
    (a = e.up) == null || a.call(e, n), i.removeEventListener("mousemove", r), i.removeEventListener("mouseup", s);
  }, "upEvent");
  typeof t == "string" ? i = document.querySelector(t) : i = t, i.addEventListener("mousemove", r), i.addEventListener("mouseup", s);
}
g(Rc, "draggable");
function Vc(e) {
  return new URLSearchParams(location.search).get(e);
}
g(Vc, "getQuery");
async function Bc(e) {
  return (await fetch(e)).json();
}
g(Bc, "loadJSON");
function jc(e) {
  return Promise.all(e.map((t) => {
    if (t.endsWith(".css")) {
      const i = document.createElement("link");
      return i.href = t, i.rel = "stylesheet", i.type = "text/css", document.head.appendChild(i), new Promise((r, s) => {
        i.onload = r, i.onerror = s;
      });
    } else
      return new Promise(async (i, r) => {
        var s;
        try {
          const n = await import(t);
          for (const a in n) {
            const o = n[a];
            typeof o == "object" && o.alioth && ((s = window[`$alioth_${o.alioth}`]) == null || s.call(window, o.data));
          }
          i(n);
        } catch (n) {
          r(n);
        }
      });
  }));
}
g(jc, "loadPresets");
function qr(e) {
  if (e.endsWith(".css")) {
    const t = document.createElement("link");
    return t.href = e, t.rel = "stylesheet", t.type = "text/css", document.head.appendChild(t), new Promise((i, r) => {
      t.onload = i, t.onerror = r;
    });
  } else
    return import(e);
}
g(qr, "loadStyleOrScript");
function zt(e, t, i = "") {
  const r = {
    get(s, n, a) {
      const o = i ? `${i}.${n}` : n, c = Reflect.get(s, n, a);
      return typeof c == "object" && c !== null ? zt(c, t, o) : t.get ? t.get(s, n, a, o) : c;
    },
    set(s, n, a, o) {
      const c = i ? `${i}.${n}` : n;
      return t.set ? t.set(s, n, a, o, c) : Reflect.set(s, n, a, o);
    }
  };
  return new Proxy(e, r);
}
g(zt, "createDeepProxy");
var nh = /{{(.*)}}/;
function Hr() {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  async function i(s) {
    if (t.has(s))
      return;
    t.set(s, null);
    const a = await (await fetch(new URL("/alioth", s).href)).json(), { project: o, entry: c } = a;
    if (e.has(o))
      return;
    const h = document.createElement("script");
    h.src = new URL("/@vite/client", s).href, h.type = "module", document.body.appendChild(h);
    for (const l in c)
      c[l] = new URL(c[l], s).href, t.set(c[l], o);
    e.set(o, c), t.set(s, o);
  }
  g(i, "connect");
  async function r(s, n, a) {
    const o = e.get(s);
    if (!o || !(n in o))
      return;
    const c = o[n], h = await import(c);
    return {
      module: h,
      data: a && h[a],
      url: c
    };
  }
  return g(r, "dynamicImport"), {
    connect: i,
    projectMap: e,
    dynamicImport: r,
    urlMap: t
  };
}
g(Hr, "createViteConnector");
var Kt = class {
  constructor(e = {}) {
    _(this, "data");
    this.data = e;
  }
  parse(e) {
    return zt(e, {
      get: (t, i, r) => {
        if (typeof t[i] == "string" && oe.test(t[i])) {
          const [s] = t[i].match(oe);
          return s === t[i] ? new Function(...this.keys, `return ${s.slice(2, -2)}`)(...this.values) : t[i].replace(oe, (n, a) => new Function(...this.keys, `return ${a}`)(...this.values));
        }
        return Reflect.get(t, i, r);
      }
    });
  }
  add(e, t) {
    this.data[e] = t;
  }
  get keys() {
    return Object.keys(this.data);
  }
  get values() {
    return Object.values(this.data);
  }
  extend(e = {}) {
    return new Kt({
      ...this.data,
      ...e
    });
  }
};
g(Kt, "Scope");
var Wr = class {
  constructor(e) {
    _(this, "name");
    _(this, "record");
    this.name = e, this.record = {};
  }
  get data() {
    return new Proxy(this.record, {
      get(e, t) {
        return e.hasOwnProperty(t) ? e[t].data : e[t];
      }
    });
  }
  get meta() {
    return new Proxy(this.record, {
      get(e, t) {
        return e.hasOwnProperty(t) ? e[t].meta : e[t];
      }
    });
  }
  set(e, t, i) {
    this.record[e] = {
      data: t,
      meta: i
    };
  }
  has(e) {
    return e in this.record;
  }
  filter(e) {
    return this.list().filter((t) => e(this.getMeta(t)));
  }
  get(e) {
    return this.record[e];
  }
  list() {
    return Object.keys(this.record);
  }
  values() {
    return Object.values(this.record);
  }
  getData(e) {
    return this.get(e).data;
  }
  getMeta(e) {
    return this.get(e).meta;
  }
  del(e) {
    delete this.record[e];
  }
};
g(Wr, "Store");
var Ie = class {
  constructor(e = {}, t = ae()) {
    _(this, "attrs");
    _(this, "id");
    _(this, "parent");
    _(this, "index");
    _(this, "doc");
    _(this, "oldAttrs");
    this.attrs = e, this.id = t, this.oldAttrs = xe(e);
  }
  toJSON() {
    return {
      id: this.id,
      attrs: this.attrs,
      index: this.index,
      parent: this.parent
    };
  }
};
g(Ie, "VirtualNode");
var at = class extends $r {
  constructor() {
    super();
    _(this, "nodeSet", /* @__PURE__ */ new Set());
    _(this, "root", new Ie({}, "root"));
    _(this, "currentEventId");
    _(this, "seed", 0);
  }
  createNode(t) {
    const i = new Ie(t);
    return i.doc = this, i;
  }
  createEventId() {
    return this.currentEventId || ae();
  }
  get nodes() {
    return [
      ...this.nodeSet
    ];
  }
  setSeed(t) {
    if (t > 0.1)
      throw new Error("seed should less than 0.1");
    this.seed = t;
  }
  load(t) {
    t.forEach(({ id: i, attrs: r, index: s, parent: n }) => {
      const a = new Ie(r, i);
      a.index = s, a.parent = n, a.doc = this, this.nodeSet.add(a);
    });
  }
  store() {
    return this.nodes.map((t) => t.toJSON());
  }
  flat(t) {
    const i = this, r = /* @__PURE__ */ g((s, n = []) => (n.push(s), i.findChildrens(s).map((a) => r(a, n)), n), "traverse");
    return r(t);
  }
  findById(t) {
    return t === "root" ? this.root : this.nodes.find((i) => i.id === t);
  }
  findChildrens(t) {
    return this.nodes.filter((i) => i.parent === t.id).sort((i, r) => i.index - r.index);
  }
  findAllChildrens(t) {
    const i = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ g((s) => {
      this.findChildrens(s).forEach((n) => {
        i.add(n), r(n);
      });
    }, "traverse");
    return r(t), [
      ...i
    ];
  }
  findParent(t) {
    return this.nodes.find((i) => i.id === t.parent);
  }
  findBrothers(t) {
    return this.nodes.filter((i) => t.parent === i.parent);
  }
  index(t) {
    return this.findBrothers(t).findIndex((i) => i.id === t.id);
  }
  insert(t, i, r = 0) {
    var h, l;
    const s = this.findChildrens(i), n = ((h = s[r - 1]) == null ? void 0 : h.index) || 0, a = ((l = s[r]) == null ? void 0 : l.index) || 1, { parent: o, index: c } = t;
    t.parent = i.id, t.index = (a + n) / 2 + this.seed, this.findById(t.id) ? this.emit("swap", {
      node: t,
      lastParentId: o,
      lastIndex: c
    }) : (this.nodeSet.add(t), this.emit("insert", {
      node: t,
      index: t.index
    }));
  }
  remove(t) {
    this.emit("remove", {
      node: t
    }), this.nodeSet.delete(t), this.removeChilds(t);
  }
  removeChilds(t) {
    this.nodes.forEach((i) => {
      i.parent === t.id && (this.nodeSet.delete(i), this.removeChilds(i));
    });
  }
  set(t, i, r) {
    this.emit("set", {
      node: t,
      key: i,
      value: r,
      oldValue: t.oldAttrs[i]
    }), this._set(t, i, r);
  }
  _set(t, i, r) {
    t.oldAttrs[i] = xe(r), t.attrs[i] = r;
  }
};
g(at, "VirtualDocument");
var zr = class extends $r {
  constructor(t, i = {}) {
    super();
    _(this, "doc");
    _(this, "options");
    _(this, "undoStack");
    _(this, "redoStack");
    _(this, "currentEventId");
    this.doc = t, this.undoStack = [], this.redoStack = [], this.options = {
      length: 300,
      ...i
    }, t.on("insert", ({ node: r }) => {
      this.redoStack = [], this.addEvent({
        records: t.flat(r).map(({ attrs: s, id: n, parent: a, index: o }) => ({
          attrs: s,
          parentId: a,
          index: o,
          nodeId: n
        })),
        type: "insert",
        eventId: this.currentEventId || ae()
      });
    }), t.on("swap", ({ node: r, lastParentId: s, lastIndex: n }) => {
      this.redoStack = [], this.addEvent({
        parentId: r.parent,
        type: "swap",
        lastParentId: s,
        index: r.index,
        lastIndex: n,
        nodeId: r.id,
        eventId: this.currentEventId || ae()
      });
    }), t.on("remove", ({ node: r }) => {
      this.redoStack = [], this.addEvent({
        type: "remove",
        eventId: this.currentEventId || ae(),
        records: t.flat(r).map(({ attrs: s, id: n, parent: a, index: o }) => ({
          attrs: s,
          parentId: a,
          index: o,
          nodeId: n
        }))
      });
    }), t.on("set", ({ node: r, key: s, value: n, oldValue: a }) => {
      this.redoStack = [], this.addEvent({
        key: s,
        value: xe(n),
        type: "set",
        oldValue: xe(a),
        nodeId: r.id,
        eventId: this.currentEventId || ae()
      });
    });
  }
  invokeBridge(t) {
  }
  refresh() {
    this.redoStack = [], this.undoStack = [], this.currentEventId = void 0;
  }
  transact(t) {
    this.currentEventId = ae(), t(), this.currentEventId = void 0;
  }
  addEvent(t, i = "undoStack") {
    this[i].length >= this.options.length && this[i].shift(), this.invokeBridge(t), this[i].push(t);
  }
  undo() {
    var i;
    const t = this.undoStack.pop();
    if (t) {
      const { event: r, isWork: s } = this.handleUndoEvent(t);
      return this.addEvent(r, "redoStack"), ((i = this.undoStack[this.undoStack.length - 1]) == null ? void 0 : i.eventId) === t.eventId && this.undo(), s;
    }
    return !1;
  }
  redo() {
    var i;
    const t = this.redoStack.pop();
    if (t) {
      const { event: r, isWork: s } = this.handleUndoEvent(t);
      return this.addEvent(r, "undoStack"), ((i = this.undoStack[this.redoStack.length - 1]) == null ? void 0 : i.eventId) === t.eventId && this.redo(), s;
    }
    return !1;
  }
  applyEvent(t) {
    Qt(this.doc, t) ? this.emit("success", t) : this.emit("error", t);
  }
  handleUndoEvent(t) {
    switch (t.type) {
      case "insert":
        t = {
          type: "remove",
          eventId: t.eventId,
          records: t.records
        };
        break;
      case "remove":
        t = {
          type: "insert",
          eventId: t.eventId,
          records: t.records
        };
        break;
      case "swap":
        t = {
          type: "swap",
          eventId: t.eventId,
          index: t.lastIndex,
          lastIndex: t.index,
          lastParentId: t.parentId,
          parentId: t.lastParentId,
          nodeId: t.nodeId
        };
        break;
      case "set":
        t = {
          type: "set",
          eventId: t.eventId,
          nodeId: t.nodeId,
          key: t.key,
          value: t.oldValue,
          oldValue: t.value
        };
    }
    return {
      isWork: this.applyEvent(t),
      event: t
    };
  }
};
g(zr, "Controller");
function Qt(e, t) {
  if (t.type === "insert")
    return e.findById(t.records[0].parentId) ? (t.records.forEach(({ attrs: r, nodeId: s, parentId: n, index: a }) => {
      const o = new Ie(r, s);
      o.parent = n, o.index = a, e.nodeSet.add(o);
    }), !0) : !1;
  if (t.type === "remove")
    return !e.findById(t.records[0].parentId) || !e.findById(t.records[0].nodeId) ? !1 : (t.records.forEach(({ nodeId: s }) => {
      const n = e.findById(s);
      n && e.nodeSet.delete(n);
    }), !0);
  if (t.type === "swap") {
    const i = e.findById(t.parentId), r = e.findById(t.nodeId);
    return !r || !i ? !1 : (r.parent !== t.lastParentId && (t.lastParentId = r.parent), r.index !== t.lastIndex && (t.lastIndex = r.index), r.parent = t.parentId, r.index = t.index, !0);
  }
  if (t.type === "set") {
    const i = e.findById(t.nodeId);
    if (!i)
      return !1;
    const r = i.attrs[t.key];
    return Ht(r, t.oldValue) || (t.oldValue = xe(r)), i.attrs[t.key] = t.value, !0;
  }
  return !1;
}
g(Qt, "applyEventToNode");
function Kr(e, t) {
  const i = [], r = [], s = [], n = [];
  for (const a of e) {
    const o = t.find((c) => c.id === a.id);
    if (!o)
      i.push({
        nodeId: a.id,
        parentId: a.parent,
        attrs: a.attrs,
        index: a.index
      });
    else {
      (o.index !== a.index || o.parent !== a.parent) && s.push({
        nodeId: a.id,
        lastParentId: a.parent,
        lastIndex: a.index,
        index: o.index,
        parentId: o.parent
      });
      for (const c in a.attrs)
        Ht(a.attrs[c], o.attrs[c]) || n.push({
          key: c,
          nodeId: a.id,
          oldValue: a.attrs[c],
          value: o.attrs[c]
        });
    }
  }
  for (const a of t)
    e.find((c) => c.id === a.id) || r.push({
      nodeId: a.id,
      parentId: a.parent,
      attrs: a.attrs,
      index: a.index
    });
  return {
    insertRecords: r,
    removeRecords: i,
    swapRecords: s,
    setRecords: n
  };
}
g(Kr, "diff");
function Mc(e, t, i) {
  const { insertRecords: r, removeRecords: s, swapRecords: n, setRecords: a } = Kr(e, i), o = [], c = xe(t.filter((h) => s.find((l) => h.id === l.nodeId)));
  return r.forEach((h) => {
    const { nodeId: l, parentId: p } = h, f = i.find((m) => m.id === l);
    c.find((m) => m.id === p) ? c.push(f) : o.push(h);
  }), a.forEach((h) => {
    const { nodeId: l, key: p, value: f, oldValue: d } = h, m = c.find((S) => S.id === l);
    Ht(d, m.attrs[p]) ? m.attrs[p] = f : o.push(h);
  }), n.forEach(({ nodeId: h, parentId: l, index: p }) => {
    const f = c.find((d) => d.id === h);
    f.parent = l, f.index = p;
  }), i = i.filter((h) => s.find((l) => h.id === l.nodeId)), {
    branch: t,
    conflict: o
  };
}
g(Mc, "merge");
var Dc = class extends at {
  constructor() {
    super();
    _(this, "_memory", /* @__PURE__ */ new Map());
  }
  handle(t) {
    if (t.type === "init") {
      this.load(t.data);
      return;
    }
    if (t.type === "set") {
      const i = this._memory.get(`set-${t.nodeId}-${t.key}`);
      if (i && i > t.time)
        return !1;
      this._memory.set(`set-${t.nodeId}-${t.key}`, t.time);
    }
    if (t.type === "swap") {
      const i = this._memory.get(`swap-${t.nodeId}`);
      if (i && i > t.time)
        return !1;
      this._memory.set(`swap-${t.nodeId}`, t.time);
    }
    return Qt(this, t);
  }
};
g(Dc, "ServerBridge");
var Qr = class {
  constructor(e) {
    _(this, "controller");
    _(this, "_memory");
    this.controller = e, this._memory = /* @__PURE__ */ new Map(), e.invokeBridge = (t) => {
      const i = Date.now();
      t.type === "set" && this._memory.set(`set-${t.nodeId}-${t.key}`, i), t.type === "swap" && this._memory.set(`swap-${t.nodeId}`, i), this.send({
        ...t,
        time: i
      });
    };
  }
  handle(e) {
    if (e.type === "init") {
      this.controller.refresh(), this.controller.doc.load(e.data);
      return;
    }
    if (e.type === "set") {
      const t = this._memory.get(`set-${e.nodeId}-${e.key}`);
      if (t && t > e.time)
        return;
    }
    if (e.type === "swap") {
      const t = this._memory.get(`swap-${e.nodeId}`);
      if (t && t > e.time)
        return;
    }
    this.controller.applyEvent(e);
  }
};
g(Qr, "ClientBridge");
var Fc = class extends Qr {
  constructor(t, i) {
    super(t);
    _(this, "url");
    _(this, "socket");
    this.url = i, this.socket = new WebSocket(i), this.socket.addEventListener("message", (r) => {
      const { data: s } = r;
      s === "true" ? this.send({
        type: "init",
        data: this.controller.doc.store()
      }) : this.handle(JSON.parse(s));
    });
  }
  send(t) {
    this.socket.send(JSON.stringify(t));
  }
};
g(Fc, "WsClientBridge");
function Xr(e, t, i, r) {
  var s = arguments.length, n = s < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    n = Reflect.decorate(e, t, i, r);
  else
    for (var o = e.length - 1; o >= 0; o--)
      (a = e[o]) && (n = (s < 3 ? a(n) : s > 3 ? a(t, i, n) : a(t, i)) || n);
  return s > 3 && n && Object.defineProperty(t, i, n), n;
}
g(Xr, "_ts_decorate");
function wt(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
g(wt, "_ts_metadata");
var Re = class extends at {
  constructor() {
    super();
    _(this, "activeId");
    _(this, "controller");
    this.controller = new zr(this);
  }
  get pages() {
    return this.findChildrens(this.root);
  }
  addPage() {
    const t = this.createNode({
      key: "page"
    });
    return this.insert(t, this.root), t;
  }
  removePage(t) {
    this.remove(this.findById(t));
  }
  findPage(t) {
    return this.pages.find((i) => i.id === t);
  }
};
g(Re, "BaseDocModel");
Re = Xr([
  Y,
  J("doc"),
  wt("design:type", Function),
  wt("design:paramtypes", [])
], Re);
var Ti = Nc(Oc(), 1);
function Xt(e, t, i, r) {
  var s = arguments.length, n = s < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    n = Reflect.decorate(e, t, i, r);
  else
    for (var o = e.length - 1; o >= 0; o--)
      (a = e[o]) && (n = (s < 3 ? a(n) : s > 3 ? a(t, i, n) : a(t, i)) || n);
  return s > 3 && n && Object.defineProperty(t, i, n), n;
}
g(Xt, "_ts_decorate");
function Ue(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
g(Ue, "_ts_metadata");
var V = class {
  constructor() {
    _(this, "stores", {});
    _(this, "methods", {});
    _(this, "importer", {});
    _(this, "_importSet", /* @__PURE__ */ new WeakSet());
    _(this, "document", new at());
  }
  _init() {
    window.__ALIOTH__ = this;
  }
  store(e) {
    return this.stores[e] || (this.stores[e] = new Wr(e)), this.stores[e];
  }
  registerMethod(e, t) {
    this.methods[e] = t;
  }
  invoke(e, ...t) {
    return this.methods[e] && this.methods[e](...t);
  }
  import(e, t) {
    if (this._importSet.has(t))
      return;
    this._importSet.add(t);
    const { key: i, data: r, meta: s } = t;
    if (this.importer[e]) {
      this.importer[e]({
        key: i,
        data: r,
        meta: s
      });
      return;
    }
    this.store(e).set(i, r, s);
  }
  registerImporter(e, t) {
    this.importer[e] = t;
  }
};
g(V, "Internal");
Xt([
  Je,
  Ue("design:type", Function),
  Ue("design:paramtypes", []),
  Ue("design:returntype", void 0)
], V.prototype, "_init", null);
V = Xt([
  Y,
  J("internal")
], V);
function Yt(e, t, i, r) {
  var s = arguments.length, n = s < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    n = Reflect.decorate(e, t, i, r);
  else
    for (var o = e.length - 1; o >= 0; o--)
      (a = e[o]) && (n = (s < 3 ? a(n) : s > 3 ? a(t, i, n) : a(t, i)) || n);
  return s > 3 && n && Object.defineProperty(t, i, n), n;
}
g(Yt, "_ts_decorate");
function pe(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
g(pe, "_ts_metadata");
function Yr(e) {
  const t = mr(e, {
    ecmaVersion: "latest"
  }), i = /* @__PURE__ */ new Set();
  function r(s) {
    if (s.type === "Identifier")
      i.add(s.name);
    else if (s.type === "MemberExpression")
      r(s.object);
    else
      for (const n in s)
        s[n] && typeof s[n] == "object" && r(s[n]);
  }
  return g(r, "visit"), r(t), Array.from(i);
}
g(Yr, "extractVariables");
var { connect: $c, dynamicImport: Uc, urlMap: ah, projectMap: Gc } = Hr(), ye = class {
  constructor(e) {
    _(this, "internal");
    _(this, "record");
    _(this, "viteUrl");
    _(this, "presets");
    this.internal = e, this.record = {};
  }
  async _init() {
    this.internal.registerMethod("hmr", (e, t) => {
      this.record[e.split("?")[0]] = this.importModule(t);
    });
  }
  async connectVite(e) {
    if (!this.viteUrl)
      try {
        this.viteUrl = e, await $c(e);
        for (const [t, i] of Gc.entries())
          for (const r in i) {
            const { module: s, url: n } = await Uc(t, r);
            this.record[n] = this.importModule(s);
          }
      } catch {
        this.viteUrl = "";
      }
  }
  async connectPresets(e) {
    return Promise.all(e.map(async (t) => {
      try {
        if (this.presets.includes(t))
          return;
        this.presets.push(t);
        const i = await qr(t);
        t.endsWith(".css") ? this.record[t] = {} : this.record[t] = this.importModule(i);
      } catch {
        this.internal.invoke("error", `load dependence "${t}" failed`);
      }
    }));
  }
  importModule(e) {
    const t = {};
    for (const i in e)
      if (typeof e[i] == "object" && e[i].alioth) {
        const { alioth: r, ...s } = e[i];
        this.internal.import(r, s), t[i] = e[i];
      }
    return t;
  }
  async execWriteFiles(e) {
    if (!this.viteUrl)
      throw new Error("must connect vite dev server before execWriteFiles");
    await fetch(new URL("/alioth/action", this.viteUrl).href, {
      method: "POST",
      body: JSON.stringify({
        type: "geneateFiles",
        data: e
      })
    });
  }
  async execBundle(e) {
    if (!this.viteUrl)
      throw new Error("must connect vite dev server before execBundle");
    await fetch(new URL("/alioth/action", this.viteUrl).href, {
      method: "POST",
      body: JSON.stringify({
        type: "bundle",
        data: e
      })
    });
  }
  async analyseImport(e, t = () => !0) {
    const i = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), s = {}, n = [];
    function a(o) {
      for (const c in o) {
        if (typeof o[c] == "object") {
          a(o[c]);
          continue;
        }
        typeof o[c] == "string" && oe.test(o[c]) && o[c].match(oe).map((h) => h.slice(2, -2)).forEach((h) => {
          Yr(h).forEach((p) => r.add(p));
        });
      }
    }
    g(a, "parseAttrs"), e.forEach((o) => {
      i.add(o.attrs.key), a(o.attrs);
    });
    for (const o in this.record) {
      const c = o.replace(this.viteUrl, "");
      if (o.endsWith(".css")) {
        n.push(o);
        continue;
      }
      s[c] || (s[c] = []);
      for (const h in this.record[o]) {
        const l = this.record[o][h];
        if (typeof l == "object" && l.alioth) {
          if (!t(l))
            continue;
          l.alioth === "renderer" && s[c].push(h), l.alioth === "widget" && i.has(l.key) && s[c].push(h), l.alioth === "state" && r.has(l.key) && s[c].push(h);
        }
      }
    }
    return {
      dependences: s,
      effects: n
    };
  }
};
g(ye, "BaseConnectModel");
Yt([
  Je,
  pe("design:type", Function),
  pe("design:paramtypes", []),
  pe("design:returntype", Promise)
], ye.prototype, "_init", null);
ye = Yt([
  Y,
  J("connect"),
  pe("design:type", Function),
  pe("design:paramtypes", [
    typeof V > "u" ? Object : V
  ])
], ye);
function Jr(e, t, i, r) {
  var s = arguments.length, n = s < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    n = Reflect.decorate(e, t, i, r);
  else
    for (var o = e.length - 1; o >= 0; o--)
      (a = e[o]) && (n = (s < 3 ? a(n) : s > 3 ? a(t, i, n) : a(t, i)) || n);
  return s > 3 && n && Object.defineProperty(t, i, n), n;
}
g(Jr, "_ts_decorate");
function St(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
g(St, "_ts_metadata");
var Ct = class {
  constructor(e, t) {
    _(this, "connect");
    _(this, "doc");
    _(this, "outputDir");
    this.connect = e, this.doc = t, this.outputDir = ".alioth";
  }
  async generateComponent(e, t = () => !0) {
    const i = [
      e,
      ...this.doc.findAllChildrens(e)
    ], { dependences: r, effects: s } = await this.connect.analyseImport(i, t);
    let n = `
 import {defineComponent,h} from 'vue'
 import {Internal,AliothRenderer} from 'alioth-vue'
 import {useR} from 'phecda-vue'

const _nodes=${JSON.stringify(i.map((a) => a.toJSON()))}

 export default defineComponent({
 setup(){
 const internal=useR(Internal)
 internal.document.load(_nodes)
 const state={}
 __INTERNAL_IMPORT__
 return ()=>h(AliothRenderer,{node:internal.document.findById(_nodes[0].id),state,renderer:'development'})
 }
 })
 
 `;
    n = s.map((a) => `import '${a}'`).join(`
`) + n;
    for (const a in r)
      n = `import {${r[a].join(",")}} from '${a}'
${n}`;
    return n = n.replace("__INTERNAL_IMPORT__", () => `
        [${Object.values(r).flat().join(",")}].forEach((data)=>{
        internal.import(data.alioth,data)
       if(data.alioth==='state') state[data.key]=data.value
        })
        
        `), n;
  }
  async generateCode(e, t = () => !0) {
    const { dependences: i, effects: r } = await this.connect.analyseImport(e, t);
    return Object.entries(i).reduce((s, [n, a]) => a.length === 0 ? s : `${s}export {${a.join(",")}} from '${(0, Ti.relative)(this.outputDir, n)}'
`, "") + r.map((s) => `import '${(0, Ti.relative)(this.outputDir, s)}'`).join(`
`);
  }
};
g(Ct, "BaseCodeModel");
Ct = Jr([
  Y,
  J("code"),
  St("design:type", Function),
  St("design:paramtypes", [
    typeof ye > "u" ? Object : ye,
    typeof Re > "u" ? Object : Re
  ])
], Ct);
function Zr(e, t, i, r) {
  var s = arguments.length, n = s < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    n = Reflect.decorate(e, t, i, r);
  else
    for (var o = e.length - 1; o >= 0; o--)
      (a = e[o]) && (n = (s < 3 ? a(n) : s > 3 ? a(t, i, n) : a(t, i)) || n);
  return s > 3 && n && Object.defineProperty(t, i, n), n;
}
g(Zr, "_ts_decorate");
var qc = /* @__PURE__ */ g((e) => {
  e.dataTransfer.dropEffect = "move";
}, "dragenter"), Hc = /* @__PURE__ */ g((e) => {
  e.preventDefault();
}, "dragover"), Wc = /* @__PURE__ */ g((e) => {
  e.dataTransfer.dropEffect = "none";
}, "dragleave"), Et = class {
  constructor() {
    _(this, "moduleMap", /* @__PURE__ */ new Map());
    _(this, "data", {});
    _(this, "listenController");
  }
  add(e, t) {
    this.moduleMap.set(e, t);
  }
  del(e) {
    this.moduleMap.delete(e);
  }
  execCb(e, t, i) {
    var r;
    (r = this.moduleMap.get(e)) == null || r(t, i);
  }
  dragStart(e) {
    this.listenController = new AbortController();
    const { signal: t } = this.listenController;
    for (const [i] of this.moduleMap)
      i.addEventListener("dragenter", qc, {
        signal: t
      }), i.addEventListener("dragover", Hc, {
        signal: t
      }), i.addEventListener("dragleave", Wc, {
        signal: t
      }), i.addEventListener("drop", (r) => {
        this.execCb(i, e, r);
      }, {
        signal: t
      });
  }
  dragEnd() {
    this.listenController.abort(), this.listenController = void 0;
  }
};
g(Et, "BaseDragModel");
Et = Zr([
  Y,
  J("drag")
], Et);
function Jt(e, t, i, r) {
  var s = arguments.length, n = s < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    n = Reflect.decorate(e, t, i, r);
  else
    for (var o = e.length - 1; o >= 0; o--)
      (a = e[o]) && (n = (s < 3 ? a(n) : s > 3 ? a(t, i, n) : a(t, i)) || n);
  return s > 3 && n && Object.defineProperty(t, i, n), n;
}
g(Jt, "_ts_decorate");
function de(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
g(de, "_ts_metadata");
var Xe = class {
  constructor(e) {
    _(this, "internal");
    _(this, "initialized");
    _(this, "state");
    _(this, "redo");
    _(this, "undo");
    this.internal = e, this.initialized = !1, this.state = {
      isActive: !0,
      current: -1,
      queue: [],
      commands: {},
      commandArray: [],
      destroyArray: []
    }, this.redo = !0, this.undo = !0;
    const { state: t } = this;
    this.redo && this.register({
      name: "redo",
      keyboard: "ctrl+y",
      execute() {
        const r = t.queue[t.current + 1];
        r && (r.redo && r.redo(), t.current++);
      }
    }), this.undo && this.register({
      name: "undo",
      keyboard: "ctrl+z",
      execute() {
        if (t.current === -1)
          return;
        const r = t.queue[t.current];
        r && (r.undo && r.undo(), t.current--);
      }
    });
    const i = (() => {
      const r = /* @__PURE__ */ g((n) => {
        const { ctrlKey: a, key: o, altKey: c, shiftKey: h } = n;
        let l = [];
        c && l.push("alt"), a && l.push("ctrl"), h && l.push("shift"), l.push(o.toLowerCase()), l = l.join("+"), t.commandArray.forEach(({ keyboard: p, name: f }) => {
          p && p === l && (t.commands[f](), n.preventDefault());
        });
      }, "onKeydowm");
      return /* @__PURE__ */ g(() => (window.addEventListener("keydown", r), () => {
        window.removeEventListener("keydown", r);
      }), "init");
    })();
    t.destroyArray.push(i()), e.registerImporter("command", ({ key: r, data: s }) => {
      this.register({
        ...s,
        name: r
      });
    });
  }
  _init() {
    if (this.initialized)
      return;
    this.initialized = !0;
    const { state: e } = this;
    this.state.commandArray.forEach((t) => t.init && e.destroyArray.push(t.init()));
  }
  register(e) {
    const { state: t } = this;
    e.name in t.commands || (this.initialized && e.init && t.destroyArray.push(e.init()), t.commandArray.push(e), t.commands[e.name] = () => {
      const { redo: i, undo: r } = e.execute() || {};
      if (!e.pushQueue)
        return;
      let { queue: s, current: n } = t;
      s.length > 0 && (s = s.slice(0, n + 1), t.queue = s), s.push({
        redo: i,
        undo: r
      }), t.current = n + 1;
    });
  }
  destroy() {
    const { state: e } = this;
    e.isActive && e.destroyArray.forEach((t) => t && t());
  }
};
g(Xe, "BaseCommandModel");
Jt([
  Je,
  de("design:type", Function),
  de("design:paramtypes", []),
  de("design:returntype", void 0)
], Xe.prototype, "_init", null);
Xe = Jt([
  Y,
  J("command"),
  de("design:type", Function),
  de("design:paramtypes", [
    typeof V > "u" ? Object : V
  ])
], Xe);
function es(e, t, i, r) {
  var s = arguments.length, n = s < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    n = Reflect.decorate(e, t, i, r);
  else
    for (var o = e.length - 1; o >= 0; o--)
      (a = e[o]) && (n = (s < 3 ? a(n) : s > 3 ? a(t, i, n) : a(t, i)) || n);
  return s > 3 && n && Object.defineProperty(t, i, n), n;
}
g(es, "_ts_decorate");
var At = class {
  constructor() {
    _(this, "selectedNode");
    _(this, "hoverNode");
    _(this, "selectedPage");
    _(this, "activeNodeSet", /* @__PURE__ */ new Set());
  }
  selectNode(e) {
    this.selectedNode = e;
  }
  switchPage(e) {
    if (e.parent !== "root")
      throw new Error("page parent should be 'root' ");
    this.selectedPage = e;
  }
  get activeNodes() {
    return [
      ...this.activeNodeSet
    ];
  }
  clearActiveNodes() {
    this.activeNodeSet.clear();
  }
  deactiveNode(e) {
    this.activeNodeSet.delete(e);
  }
  activeNode(e) {
    this.activeNodeSet.add(e);
  }
  toggleNode(e) {
    this.isActiveNode(e) ? this.deactiveNode(e) : this.activeNode(e);
  }
  isActiveNode(e) {
    return this.activeNodeSet.has(e);
  }
};
g(At, "BaseSelectionModel");
At = es([
  Y,
  J("selection")
], At);
function Zt(e, t, i, r) {
  var s = arguments.length, n = s < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    n = Reflect.decorate(e, t, i, r);
  else
    for (var o = e.length - 1; o >= 0; o--)
      (a = e[o]) && (n = (s < 3 ? a(n) : s > 3 ? a(t, i, n) : a(t, i)) || n);
  return s > 3 && n && Object.defineProperty(t, i, n), n;
}
g(Zt, "_ts_decorate");
function me(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
g(me, "_ts_metadata");
var Ye = class {
  constructor(e) {
    _(this, "internal");
    this.internal = e;
  }
  _init() {
    [
      "error",
      "warn",
      "debug",
      "log",
      "info"
    ].forEach((e) => {
      this.internal.registerMethod(e, (...t) => {
        this[e](...t);
      });
    });
  }
  error(e) {
  }
  warn(e) {
  }
  log(e) {
  }
  info(e) {
  }
  debug(e) {
  }
};
g(Ye, "BaseFeedbackModel");
Zt([
  Je,
  me("design:type", Function),
  me("design:paramtypes", []),
  me("design:returntype", void 0)
], Ye.prototype, "_init", null);
Ye = Zt([
  Y,
  J("feedback"),
  me("design:type", Function),
  me("design:paramtypes", [
    typeof V > "u" ? Object : V
  ])
], Ye);
function ts(e, t, i, r) {
  var s = arguments.length, n = s < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    n = Reflect.decorate(e, t, i, r);
  else
    for (var o = e.length - 1; o >= 0; o--)
      (a = e[o]) && (n = (s < 3 ? a(n) : s > 3 ? a(t, i, n) : a(t, i)) || n);
  return s > 3 && n && Object.defineProperty(t, i, n), n;
}
g(ts, "_ts_decorate");
function It(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
g(It, "_ts_metadata");
var Pt = class {
  constructor(e) {
    _(this, "internal");
    this.internal = e;
  }
  list() {
    return this.internal.store("zone").list();
  }
  zone(e) {
    const t = this.internal.store("zone");
    return t.list().filter((r) => t.getMeta(r).zone === e).map((r) => ({
      component: t.getData(r),
      props: t.getMeta(r).props
    }));
  }
};
g(Pt, "BaseZoneModel");
Pt = ts([
  Y,
  J("zone"),
  It("design:type", Function),
  It("design:paramtypes", [
    typeof V > "u" ? Object : V
  ])
], Pt);
var zc = kt({
  name: "AliothRenderer",
  inheritAttrs: !1,
  props: {
    node: {
      type: Object,
      required: !0
    },
    renderer: {
      type: String,
      required: !0
    },
    state: {
      type: Object
    },
    environment: {
      type: String,
      default: "production"
    }
  },
  setup(e) {
    as("alioth", e);
    const { store: t } = ns(V), i = os().appContext;
    return () => {
      const r = e.node.attrs.key, s = t("widget").getData(r);
      return t("renderer").getData(e.renderer)({ node: e.node, widget: s, scope: new Kt(e.state || t("state").data), renderer: e.renderer, environment: e.environment, appContext: i });
    };
  }
}), oh = class {
  constructor(e) {
    this.node = e.node, this.widget = e.widget, this.environment = e.environment, this.scope = e.scope, this.renderer = e.renderer, this.appContext = e.appContext, this.doc = this.node.doc;
  }
  exec() {
    return this.vnode;
  }
  wrap(e, t) {
    return this.vnode = Ce(e, t, this.vnode), this;
  }
  slot(e) {
    const t = this.doc.findChildrens(this.node);
    if (!t.length)
      return this;
    const i = {};
    return e.forEach((r) => {
      i[r] = (s) => t.map((n) => {
        if ((n.attrs.slot || "default") === r)
          return Ce(zc, { node: n, environment: this.environment, scope: this.scope.extend(s), renderer: n.attrs.renderer || this.renderer });
      });
    }), this.vnode = i, this;
  }
  mount(e = document.body) {
    return this.vnode ? (Oi(this.vnode, e), this) : this;
  }
  useDragger(e, t) {
    return this.vnode.props.ondragenter = (i) => e(i, this.node), this.vnode.props.ondragover = (i) => t(i, this.node), this;
  }
  addClass(e) {
    return this.vnode ? (this.vnode.props.class || (this.vnode.props.class = ""), this.vnode.props.class += ` ${e} `, this) : this;
  }
  setClass(e) {
    return this.vnode.props.class = e, this;
  }
  addStyle(e) {
    return this.vnode ? (this.vnode.props.style || (this.vnode.props.style = e), this.vnode.props.style = Object.assign(this.vnode.props.style, e), this) : this;
  }
  setStyle(e) {
    return this.vnode.props.style = e, this;
  }
  setID(e) {
    return this.vnode.props.id = e, this;
  }
  main() {
    return this.vnode = Ce(
      this.widget,
      { ...this.scope.parse(this.node.attrs) },
      this.vnode
    ), this;
  }
};
function Kc() {
  const e = [], t = document.getElementsByTagName("style");
  for (let r = 0; r < t.length; r++) {
    const s = t[r].cloneNode();
    s.innerHTML = t[r].innerHTML, e.push(s);
  }
  const i = document.getElementsByTagName("link");
  for (let r = 0; r < i.length; r++)
    i[r].rel === "stylesheet" && e.push(i[r].cloneNode());
  return e;
}
function Qc(e) {
  e.contentWindow.document.documentElement.classList.add("al-canvas");
}
function Xc(e, t) {
  const i = e.contentWindow.document;
  if (t) {
    const r = document.createElement("style");
    r.innerHTML = t, i.head.append(r);
  }
  i.head.append(...Kc());
}
function Yc(e) {
  const t = e.contentWindow.document, i = document.querySelectorAll("script[data-alioth]");
  for (let r = 0; r < i.length; r++) {
    const s = document.createElement("script");
    s.src = i[r].src, t.head.append(s);
  }
}
function Jc(e) {
  const t = e.contentWindow, { x: i, y: r } = e.getBoundingClientRect();
  ["pointerdown", "pointermove", "pointerup", "pointercancel", "pointerenter", "pointerleave", "pointerover", "pointerout", "gotpointercapture", "lostpointercapture", "click", "contextmenu"].forEach((s) => {
    t.addEventListener(s, (n) => {
      const a = Zc(n);
      a.clientX += i, a.clientY += r;
      const o = new MouseEvent(s, a);
      window.dispatchEvent(o);
    });
  }), ["keydown", "keyup"].forEach((s) => {
    t.addEventListener(s, (n) => {
      const a = eh(n), o = new KeyboardEvent(s, a);
      window.dispatchEvent(o);
    });
  });
}
var uh = kt({
  props: {},
  setup(e, { slots: t, attrs: i, expose: r }) {
    if (!t.default)
      return null;
    let s = !1, n;
    const a = Ni();
    r({ el: a });
    const o = t.default();
    us(() => {
      n && Object.defineProperty(document, "body", n);
    });
    async function c() {
      var l;
      const h = this;
      if (a.value = h, Yc(h), Xc(h), Qc(h), Jc(h), !s) {
        n = Object.getOwnPropertyDescriptor(document, "body"), Object.defineProperty(document, "body", {
          configurable: !0,
          get() {
            var d;
            return (d = h.contentWindow) == null ? void 0 : d.document.body;
          }
        });
        const p = document.head.appendChild.bind(document.head), f = document.head.removeChild.bind(document.head);
        Object.defineProperty(document.head, "appendChild", {
          configurable: !0,
          get() {
            return (d) => {
              var m;
              d instanceof HTMLStyleElement && d.getAttribute("data-vite-dev-id") ? (m = h.contentWindow) == null || m.document.head.appendChild(d) : p(d);
            };
          }
        }), Object.defineProperty(document.head, "removeChild", {
          configurable: !0,
          get() {
            return (d) => {
              var m;
              d instanceof HTMLStyleElement && d.getAttribute("data-vite-dev-id") ? (m = h.contentWindow) == null || m.document.head.removeChild(d) : f(d);
            };
          }
        }), s = !0;
      }
      Oi(o[0], (l = h.contentWindow) == null ? void 0 : l.document.body);
    }
    return () => Ce("iframe", {
      onload: c,
      ...i
    });
  }
});
function Zc(e) {
  const t = {};
  return ["clientY", "clientX", "screenX", "screenY", "ctrlKey", "shiftKey", "altKey", "metaKey", "button"].forEach((r) => {
    t[r] = e[r];
  }), t;
}
function eh(e) {
  const t = {};
  return ["key", "code", "location", "ctrlKey", "shiftKey", "altKey", "metaKey", "repeat", "isComposing", "charCode", "keyCode", "which"].forEach((r) => {
    t[r] = e[r];
  }), t;
}
var ch = kt({
  setup(e, { attrs: t, slots: i }) {
    const r = cs({
      scale: 1,
      x: 0,
      y: 0
    });
    let s = !1, n, a;
    const o = Ni(null);
    function c(f) {
      f.button === 2 && (s = !0, n = f.clientX, a = f.clientY);
    }
    function h(f) {
      if (s) {
        f.preventDefault();
        const d = f.clientX - n, m = f.clientY - a;
        r.y += m, r.x += d, n = f.clientX;
      }
    }
    function l(f) {
      f.button === 2 && (s = !1);
    }
    function p(f) {
      f.preventDefault();
      const d = f.deltaY || f.detail;
      r.scale += d;
    }
    return hs(() => {
      o.value.addEventListener("mousedown", c), o.value.addEventListener("wheel", p), document.addEventListener("mouseup", l), document.addEventListener("mousemove", h);
    }), ls(() => {
      o.value.removeEventListener("mousedown", c), o.value.removeEventListener("wheel", p), document.removeEventListener("mouseup", l), document.removeEventListener("mousemove", h);
    }), () => Ce("div", { ...t, ref: o }, i.default(r));
  }
});
export {
  zc as AliothRenderer,
  ch as Background,
  Ct as BaseCodeModel,
  Xe as BaseCommandModel,
  ye as BaseConnectModel,
  Re as BaseDocModel,
  Et as BaseDragModel,
  Ye as BaseFeedbackModel,
  oh as BaseRenderer,
  At as BaseSelectionModel,
  Pt as BaseZoneModel,
  Qr as ClientBridge,
  zr as Controller,
  uh as IframeCanvas,
  V as Internal,
  nh as STATE_REGEX,
  Kt as Scope,
  Dc as ServerBridge,
  Wr as Store,
  at as VirtualDocument,
  Ie as VirtualNode,
  Fc as WsClientBridge,
  Qt as applyEventToNode,
  $c as connect,
  zt as createDeepProxy,
  Lc as createEntryCode,
  Hr as createViteConnector,
  Kr as diff,
  Rc as draggable,
  Uc as dynamicImport,
  Yr as extractVariables,
  Vc as getQuery,
  eh as keyBoardProxy,
  Bc as loadJSON,
  jc as loadPresets,
  qr as loadStyleOrScript,
  Mc as merge,
  Zc as mouseProxy,
  Gc as projectMap,
  ah as urlMap
};
