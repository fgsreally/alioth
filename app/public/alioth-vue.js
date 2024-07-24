var _i = Object.defineProperty;
var wi = (e, t, i) => t in e ? _i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var b = (e, t, i) => (wi(e, typeof t != "symbol" ? t + "" : t, i), i);
import { Init as xe, Global as K, Tag as Q } from "phecda-core";
import { defineComponent as Ye, provide as Si, getCurrentInstance as Ci, ref as Xe, onBeforeUnmount as ki, h as fe, reactive as Ei, onMounted as Ii, onBeforeMount as Ai, render as bt, watch as Oe } from "vue";
import { useR as _t, useV as Pi } from "phecda-vue";
var Ni = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 81, 2, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 9, 5351, 0, 7, 14, 13835, 9, 87, 9, 39, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4706, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 983, 6, 110, 6, 6, 9, 4759, 9, 787719, 239], wt = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 4026, 582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 757, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 4191], Ri = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࢘-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-ᫎᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‌‍‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯・꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿･", St = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟊꟐꟑꟓꟕ-ꟙꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", Be = {
  3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
  5: "class enum extends super const export import",
  6: "enum",
  strict: "implements interface let package private protected public static yield",
  strictBind: "eval arguments"
}, De = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this", Vi = {
  5: De,
  "5module": De + " export import",
  6: De + " const class extends export import super"
}, Li = /^in(stanceof)?$/, Ti = new RegExp("[" + St + "]"), Oi = new RegExp("[" + St + Ri + "]");
function Fe(e, t) {
  for (var i = 65536, r = 0; r < t.length; r += 2) {
    if (i += t[r], i > e)
      return !1;
    if (i += t[r + 1], i >= e)
      return !0;
  }
  return !1;
}
function W(e, t) {
  return e < 65 ? e === 36 : e < 91 ? !0 : e < 97 ? e === 95 : e < 123 ? !0 : e <= 65535 ? e >= 170 && Ti.test(String.fromCharCode(e)) : t === !1 ? !1 : Fe(e, wt);
}
function ae(e, t) {
  return e < 48 ? e === 36 : e < 58 ? !0 : e < 65 ? !1 : e < 91 ? !0 : e < 97 ? e === 95 : e < 123 ? !0 : e <= 65535 ? e >= 170 && Oi.test(String.fromCharCode(e)) : t === !1 ? !1 : Fe(e, wt) || Fe(e, Ni);
}
var k = function(t, i) {
  i === void 0 && (i = {}), this.label = t, this.keyword = i.keyword, this.beforeExpr = !!i.beforeExpr, this.startsExpr = !!i.startsExpr, this.isLoop = !!i.isLoop, this.isAssign = !!i.isAssign, this.prefix = !!i.prefix, this.postfix = !!i.postfix, this.binop = i.binop || null, this.updateContext = null;
};
function L(e, t) {
  return new k(e, { beforeExpr: !0, binop: t });
}
var T = { beforeExpr: !0 }, R = { startsExpr: !0 }, $e = {};
function C(e, t) {
  return t === void 0 && (t = {}), t.keyword = e, $e[e] = new k(e, t);
}
var a = {
  num: new k("num", R),
  regexp: new k("regexp", R),
  string: new k("string", R),
  name: new k("name", R),
  privateId: new k("privateId", R),
  eof: new k("eof"),
  // Punctuation token types.
  bracketL: new k("[", { beforeExpr: !0, startsExpr: !0 }),
  bracketR: new k("]"),
  braceL: new k("{", { beforeExpr: !0, startsExpr: !0 }),
  braceR: new k("}"),
  parenL: new k("(", { beforeExpr: !0, startsExpr: !0 }),
  parenR: new k(")"),
  comma: new k(",", T),
  semi: new k(";", T),
  colon: new k(":", T),
  dot: new k("."),
  question: new k("?", T),
  questionDot: new k("?."),
  arrow: new k("=>", T),
  template: new k("template"),
  invalidTemplate: new k("invalidTemplate"),
  ellipsis: new k("...", T),
  backQuote: new k("`", R),
  dollarBraceL: new k("${", { beforeExpr: !0, startsExpr: !0 }),
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
  eq: new k("=", { beforeExpr: !0, isAssign: !0 }),
  assign: new k("_=", { beforeExpr: !0, isAssign: !0 }),
  incDec: new k("++/--", { prefix: !0, postfix: !0, startsExpr: !0 }),
  prefix: new k("!/~", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  logicalOR: L("||", 1),
  logicalAND: L("&&", 2),
  bitwiseOR: L("|", 3),
  bitwiseXOR: L("^", 4),
  bitwiseAND: L("&", 5),
  equality: L("==/!=/===/!==", 6),
  relational: L("</>/<=/>=", 7),
  bitShift: L("<</>>/>>>", 8),
  plusMin: new k("+/-", { beforeExpr: !0, binop: 9, prefix: !0, startsExpr: !0 }),
  modulo: L("%", 10),
  star: L("*", 10),
  slash: L("/", 10),
  starstar: new k("**", { beforeExpr: !0 }),
  coalesce: L("??", 1),
  // Keyword token types.
  _break: C("break"),
  _case: C("case", T),
  _catch: C("catch"),
  _continue: C("continue"),
  _debugger: C("debugger"),
  _default: C("default", T),
  _do: C("do", { isLoop: !0, beforeExpr: !0 }),
  _else: C("else", T),
  _finally: C("finally"),
  _for: C("for", { isLoop: !0 }),
  _function: C("function", R),
  _if: C("if"),
  _return: C("return", T),
  _switch: C("switch"),
  _throw: C("throw", T),
  _try: C("try"),
  _var: C("var"),
  _const: C("const"),
  _while: C("while", { isLoop: !0 }),
  _with: C("with"),
  _new: C("new", { beforeExpr: !0, startsExpr: !0 }),
  _this: C("this", R),
  _super: C("super", R),
  _class: C("class", R),
  _extends: C("extends", T),
  _export: C("export"),
  _import: C("import", R),
  _null: C("null", R),
  _true: C("true", R),
  _false: C("false", R),
  _in: C("in", { beforeExpr: !0, binop: 7 }),
  _instanceof: C("instanceof", { beforeExpr: !0, binop: 7 }),
  _typeof: C("typeof", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  _void: C("void", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  _delete: C("delete", { beforeExpr: !0, prefix: !0, startsExpr: !0 })
}, D = /\r\n?|\n|\u2028|\u2029/, Bi = new RegExp(D.source, "g");
function ue(e) {
  return e === 10 || e === 13 || e === 8232 || e === 8233;
}
function Ct(e, t, i) {
  i === void 0 && (i = e.length);
  for (var r = t; r < i; r++) {
    var s = e.charCodeAt(r);
    if (ue(s))
      return r < i - 1 && s === 13 && e.charCodeAt(r + 1) === 10 ? r + 2 : r + 1;
  }
  return -1;
}
var kt = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/, O = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g, Et = Object.prototype, Di = Et.hasOwnProperty, Mi = Et.toString, ge = Object.hasOwn || function(e, t) {
  return Di.call(e, t);
}, dt = Array.isArray || function(e) {
  return Mi.call(e) === "[object Array]";
}, mt = /* @__PURE__ */ Object.create(null);
function X(e) {
  return mt[e] || (mt[e] = new RegExp("^(?:" + e.replace(/ /g, "|") + ")$"));
}
function $(e) {
  return e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320));
}
var Fi = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/, me = function(t, i) {
  this.line = t, this.column = i;
};
me.prototype.offset = function(t) {
  return new me(this.line, this.column + t);
};
var Pe = function(t, i, r) {
  this.start = i, this.end = r, t.sourceFile !== null && (this.source = t.sourceFile);
};
function It(e, t) {
  for (var i = 1, r = 0; ; ) {
    var s = Ct(e, r, t);
    if (s < 0)
      return new me(i, t - r);
    ++i, r = s;
  }
}
var je = {
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
}, vt = !1;
function ji(e) {
  var t = {};
  for (var i in je)
    t[i] = e && ge(e, i) ? e[i] : je[i];
  if (t.ecmaVersion === "latest" ? t.ecmaVersion = 1e8 : t.ecmaVersion == null ? (!vt && typeof console == "object" && console.warn && (vt = !0, console.warn(`Since Acorn 8.0.0, options.ecmaVersion is required.
Defaulting to 2020, but this will stop working in the future.`)), t.ecmaVersion = 11) : t.ecmaVersion >= 2015 && (t.ecmaVersion -= 2009), t.allowReserved == null && (t.allowReserved = t.ecmaVersion < 5), (!e || e.allowHashBang == null) && (t.allowHashBang = t.ecmaVersion >= 14), dt(t.onToken)) {
    var r = t.onToken;
    t.onToken = function(s) {
      return r.push(s);
    };
  }
  return dt(t.onComment) && (t.onComment = Ui(t, t.onComment)), t;
}
function Ui(e, t) {
  return function(i, r, s, n, o, u) {
    var h = {
      type: i ? "Block" : "Line",
      value: r,
      start: s,
      end: n
    };
    e.locations && (h.loc = new Pe(this, o, u)), e.ranges && (h.range = [s, n]), t.push(h);
  };
}
var ve = 1, he = 2, Je = 4, At = 8, Pt = 16, Nt = 32, Ze = 64, Rt = 128, ye = 256, et = ve | he | ye;
function tt(e, t) {
  return he | (e ? Je : 0) | (t ? At : 0);
}
var we = 0, it = 1, Y = 2, Vt = 3, Lt = 4, Tt = 5, P = function(t, i, r) {
  this.options = t = ji(t), this.sourceFile = t.sourceFile, this.keywords = X(Vi[t.ecmaVersion >= 6 ? 6 : t.sourceType === "module" ? "5module" : 5]);
  var s = "";
  t.allowReserved !== !0 && (s = Be[t.ecmaVersion >= 6 ? 6 : t.ecmaVersion === 5 ? 5 : 3], t.sourceType === "module" && (s += " await")), this.reservedWords = X(s);
  var n = (s ? s + " " : "") + Be.strict;
  this.reservedWordsStrict = X(n), this.reservedWordsStrictBind = X(n + " " + Be.strictBind), this.input = String(i), this.containsEsc = !1, r ? (this.pos = r, this.lineStart = this.input.lastIndexOf(`
`, r - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split(D).length) : (this.pos = this.lineStart = 0, this.curLine = 1), this.type = a.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = !0, this.inModule = t.sourceType === "module", this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.potentialArrowInForAwait = !1, this.yieldPos = this.awaitPos = this.awaitIdentPos = 0, this.labels = [], this.undefinedExports = /* @__PURE__ */ Object.create(null), this.pos === 0 && t.allowHashBang && this.input.slice(0, 2) === "#!" && this.skipLineComment(2), this.scopeStack = [], this.enterScope(ve), this.regexpState = null, this.privateNameStack = [];
}, U = { inFunction: { configurable: !0 }, inGenerator: { configurable: !0 }, inAsync: { configurable: !0 }, canAwait: { configurable: !0 }, allowSuper: { configurable: !0 }, allowDirectSuper: { configurable: !0 }, treatFunctionsAsVar: { configurable: !0 }, allowNewDotTarget: { configurable: !0 }, inClassStaticBlock: { configurable: !0 } };
P.prototype.parse = function() {
  var t = this.options.program || this.startNode();
  return this.nextToken(), this.parseTopLevel(t);
};
U.inFunction.get = function() {
  return (this.currentVarScope().flags & he) > 0;
};
U.inGenerator.get = function() {
  return (this.currentVarScope().flags & At) > 0 && !this.currentVarScope().inClassFieldInit;
};
U.inAsync.get = function() {
  return (this.currentVarScope().flags & Je) > 0 && !this.currentVarScope().inClassFieldInit;
};
U.canAwait.get = function() {
  for (var e = this.scopeStack.length - 1; e >= 0; e--) {
    var t = this.scopeStack[e];
    if (t.inClassFieldInit || t.flags & ye)
      return !1;
    if (t.flags & he)
      return (t.flags & Je) > 0;
  }
  return this.inModule && this.options.ecmaVersion >= 13 || this.options.allowAwaitOutsideFunction;
};
U.allowSuper.get = function() {
  var e = this.currentThisScope(), t = e.flags, i = e.inClassFieldInit;
  return (t & Ze) > 0 || i || this.options.allowSuperOutsideMethod;
};
U.allowDirectSuper.get = function() {
  return (this.currentThisScope().flags & Rt) > 0;
};
U.treatFunctionsAsVar.get = function() {
  return this.treatFunctionsAsVarInScope(this.currentScope());
};
U.allowNewDotTarget.get = function() {
  var e = this.currentThisScope(), t = e.flags, i = e.inClassFieldInit;
  return (t & (he | ye)) > 0 || i;
};
U.inClassStaticBlock.get = function() {
  return (this.currentVarScope().flags & ye) > 0;
};
P.extend = function() {
  for (var t = [], i = arguments.length; i--; )
    t[i] = arguments[i];
  for (var r = this, s = 0; s < t.length; s++)
    r = t[s](r);
  return r;
};
P.parse = function(t, i) {
  return new this(i, t).parse();
};
P.parseExpressionAt = function(t, i, r) {
  var s = new this(r, t, i);
  return s.nextToken(), s.parseExpression();
};
P.tokenizer = function(t, i) {
  return new this(i, t);
};
Object.defineProperties(P.prototype, U);
var N = P.prototype, qi = /^(?:'((?:\\[^]|[^'\\])*?)'|"((?:\\[^]|[^"\\])*?)")/;
N.strictDirective = function(e) {
  if (this.options.ecmaVersion < 5)
    return !1;
  for (; ; ) {
    O.lastIndex = e, e += O.exec(this.input)[0].length;
    var t = qi.exec(this.input.slice(e));
    if (!t)
      return !1;
    if ((t[1] || t[2]) === "use strict") {
      O.lastIndex = e + t[0].length;
      var i = O.exec(this.input), r = i.index + i[0].length, s = this.input.charAt(r);
      return s === ";" || s === "}" || D.test(i[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(s) || s === "!" && this.input.charAt(r + 1) === "=");
    }
    e += t[0].length, O.lastIndex = e, e += O.exec(this.input)[0].length, this.input[e] === ";" && e++;
  }
};
N.eat = function(e) {
  return this.type === e ? (this.next(), !0) : !1;
};
N.isContextual = function(e) {
  return this.type === a.name && this.value === e && !this.containsEsc;
};
N.eatContextual = function(e) {
  return this.isContextual(e) ? (this.next(), !0) : !1;
};
N.expectContextual = function(e) {
  this.eatContextual(e) || this.unexpected();
};
N.canInsertSemicolon = function() {
  return this.type === a.eof || this.type === a.braceR || D.test(this.input.slice(this.lastTokEnd, this.start));
};
N.insertSemicolon = function() {
  if (this.canInsertSemicolon())
    return this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), !0;
};
N.semicolon = function() {
  !this.eat(a.semi) && !this.insertSemicolon() && this.unexpected();
};
N.afterTrailingComma = function(e, t) {
  if (this.type === e)
    return this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc), t || this.next(), !0;
};
N.expect = function(e) {
  this.eat(e) || this.unexpected();
};
N.unexpected = function(e) {
  this.raise(e ?? this.start, "Unexpected token");
};
var Ne = function() {
  this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
};
N.checkPatternErrors = function(e, t) {
  if (e) {
    e.trailingComma > -1 && this.raiseRecoverable(e.trailingComma, "Comma is not permitted after the rest element");
    var i = t ? e.parenthesizedAssign : e.parenthesizedBind;
    i > -1 && this.raiseRecoverable(i, t ? "Assigning to rvalue" : "Parenthesized pattern");
  }
};
N.checkExpressionErrors = function(e, t) {
  if (!e)
    return !1;
  var i = e.shorthandAssign, r = e.doubleProto;
  if (!t)
    return i >= 0 || r >= 0;
  i >= 0 && this.raise(i, "Shorthand property assignments are valid only in destructuring patterns"), r >= 0 && this.raiseRecoverable(r, "Redefinition of __proto__ property");
};
N.checkYieldAwaitInDefaultParams = function() {
  this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value"), this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value");
};
N.isSimpleAssignTarget = function(e) {
  return e.type === "ParenthesizedExpression" ? this.isSimpleAssignTarget(e.expression) : e.type === "Identifier" || e.type === "MemberExpression";
};
var y = P.prototype;
y.parseTopLevel = function(e) {
  var t = /* @__PURE__ */ Object.create(null);
  for (e.body || (e.body = []); this.type !== a.eof; ) {
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
var rt = { kind: "loop" }, Wi = { kind: "switch" };
y.isLet = function(e) {
  if (this.options.ecmaVersion < 6 || !this.isContextual("let"))
    return !1;
  O.lastIndex = this.pos;
  var t = O.exec(this.input), i = this.pos + t[0].length, r = this.input.charCodeAt(i);
  if (r === 91 || r === 92)
    return !0;
  if (e)
    return !1;
  if (r === 123 || r > 55295 && r < 56320)
    return !0;
  if (W(r, !0)) {
    for (var s = i + 1; ae(r = this.input.charCodeAt(s), !0); )
      ++s;
    if (r === 92 || r > 55295 && r < 56320)
      return !0;
    var n = this.input.slice(i, s);
    if (!Li.test(n))
      return !0;
  }
  return !1;
};
y.isAsyncFunction = function() {
  if (this.options.ecmaVersion < 8 || !this.isContextual("async"))
    return !1;
  O.lastIndex = this.pos;
  var e = O.exec(this.input), t = this.pos + e[0].length, i;
  return !D.test(this.input.slice(this.pos, t)) && this.input.slice(t, t + 8) === "function" && (t + 8 === this.input.length || !(ae(i = this.input.charCodeAt(t + 8)) || i > 55295 && i < 56320));
};
y.parseStatement = function(e, t, i) {
  var r = this.type, s = this.startNode(), n;
  switch (this.isLet(e) && (r = a._var, n = "let"), r) {
    case a._break:
    case a._continue:
      return this.parseBreakContinueStatement(s, r.keyword);
    case a._debugger:
      return this.parseDebuggerStatement(s);
    case a._do:
      return this.parseDoStatement(s);
    case a._for:
      return this.parseForStatement(s);
    case a._function:
      return e && (this.strict || e !== "if" && e !== "label") && this.options.ecmaVersion >= 6 && this.unexpected(), this.parseFunctionStatement(s, !1, !e);
    case a._class:
      return e && this.unexpected(), this.parseClass(s, !0);
    case a._if:
      return this.parseIfStatement(s);
    case a._return:
      return this.parseReturnStatement(s);
    case a._switch:
      return this.parseSwitchStatement(s);
    case a._throw:
      return this.parseThrowStatement(s);
    case a._try:
      return this.parseTryStatement(s);
    case a._const:
    case a._var:
      return n = n || this.value, e && n !== "var" && this.unexpected(), this.parseVarStatement(s, n);
    case a._while:
      return this.parseWhileStatement(s);
    case a._with:
      return this.parseWithStatement(s);
    case a.braceL:
      return this.parseBlock(!0, s);
    case a.semi:
      return this.parseEmptyStatement(s);
    case a._export:
    case a._import:
      if (this.options.ecmaVersion > 10 && r === a._import) {
        O.lastIndex = this.pos;
        var o = O.exec(this.input), u = this.pos + o[0].length, h = this.input.charCodeAt(u);
        if (h === 40 || h === 46)
          return this.parseExpressionStatement(s, this.parseExpression());
      }
      return this.options.allowImportExportEverywhere || (t || this.raise(this.start, "'import' and 'export' may only appear at the top level"), this.inModule || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")), r === a._import ? this.parseImport(s) : this.parseExport(s, i);
    default:
      if (this.isAsyncFunction())
        return e && this.unexpected(), this.next(), this.parseFunctionStatement(s, !0, !e);
      var l = this.value, c = this.parseExpression();
      return r === a.name && c.type === "Identifier" && this.eat(a.colon) ? this.parseLabeledStatement(s, l, c, e) : this.parseExpressionStatement(s, c);
  }
};
y.parseBreakContinueStatement = function(e, t) {
  var i = t === "break";
  this.next(), this.eat(a.semi) || this.insertSemicolon() ? e.label = null : this.type !== a.name ? this.unexpected() : (e.label = this.parseIdent(), this.semicolon());
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
  return this.next(), this.labels.push(rt), e.body = this.parseStatement("do"), this.labels.pop(), this.expect(a._while), e.test = this.parseParenExpression(), this.options.ecmaVersion >= 6 ? this.eat(a.semi) : this.semicolon(), this.finishNode(e, "DoWhileStatement");
};
y.parseForStatement = function(e) {
  this.next();
  var t = this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await") ? this.lastTokStart : -1;
  if (this.labels.push(rt), this.enterScope(0), this.expect(a.parenL), this.type === a.semi)
    return t > -1 && this.unexpected(t), this.parseFor(e, null);
  var i = this.isLet();
  if (this.type === a._var || this.type === a._const || i) {
    var r = this.startNode(), s = i ? "let" : this.value;
    return this.next(), this.parseVar(r, !0, s), this.finishNode(r, "VariableDeclaration"), (this.type === a._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && r.declarations.length === 1 ? (this.options.ecmaVersion >= 9 && (this.type === a._in ? t > -1 && this.unexpected(t) : e.await = t > -1), this.parseForIn(e, r)) : (t > -1 && this.unexpected(t), this.parseFor(e, r));
  }
  var n = this.isContextual("let"), o = !1, u = this.containsEsc, h = new Ne(), l = this.start, c = t > -1 ? this.parseExprSubscripts(h, "await") : this.parseExpression(!0, h);
  return this.type === a._in || (o = this.options.ecmaVersion >= 6 && this.isContextual("of")) ? (t > -1 ? (this.type === a._in && this.unexpected(t), e.await = !0) : o && this.options.ecmaVersion >= 8 && (c.start === l && !u && c.type === "Identifier" && c.name === "async" ? this.unexpected() : this.options.ecmaVersion >= 9 && (e.await = !1)), n && o && this.raise(c.start, "The left-hand side of a for-of loop may not start with 'let'."), this.toAssignable(c, !1, h), this.checkLValPattern(c), this.parseForIn(e, c)) : (this.checkExpressionErrors(h, !0), t > -1 && this.unexpected(t), this.parseFor(e, c));
};
y.parseFunctionStatement = function(e, t, i) {
  return this.next(), this.parseFunction(e, pe | (i ? 0 : Ue), !1, t);
};
y.parseIfStatement = function(e) {
  return this.next(), e.test = this.parseParenExpression(), e.consequent = this.parseStatement("if"), e.alternate = this.eat(a._else) ? this.parseStatement("if") : null, this.finishNode(e, "IfStatement");
};
y.parseReturnStatement = function(e) {
  return !this.inFunction && !this.options.allowReturnOutsideFunction && this.raise(this.start, "'return' outside of function"), this.next(), this.eat(a.semi) || this.insertSemicolon() ? e.argument = null : (e.argument = this.parseExpression(), this.semicolon()), this.finishNode(e, "ReturnStatement");
};
y.parseSwitchStatement = function(e) {
  this.next(), e.discriminant = this.parseParenExpression(), e.cases = [], this.expect(a.braceL), this.labels.push(Wi), this.enterScope(0);
  for (var t, i = !1; this.type !== a.braceR; )
    if (this.type === a._case || this.type === a._default) {
      var r = this.type === a._case;
      t && this.finishNode(t, "SwitchCase"), e.cases.push(t = this.startNode()), t.consequent = [], this.next(), r ? t.test = this.parseExpression() : (i && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), i = !0, t.test = null), this.expect(a.colon);
    } else
      t || this.unexpected(), t.consequent.push(this.parseStatement(null));
  return this.exitScope(), t && this.finishNode(t, "SwitchCase"), this.next(), this.labels.pop(), this.finishNode(e, "SwitchStatement");
};
y.parseThrowStatement = function(e) {
  return this.next(), D.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"), e.argument = this.parseExpression(), this.semicolon(), this.finishNode(e, "ThrowStatement");
};
var Hi = [];
y.parseCatchClauseParam = function() {
  var e = this.parseBindingAtom(), t = e.type === "Identifier";
  return this.enterScope(t ? Nt : 0), this.checkLValPattern(e, t ? Lt : Y), this.expect(a.parenR), e;
};
y.parseTryStatement = function(e) {
  if (this.next(), e.block = this.parseBlock(), e.handler = null, this.type === a._catch) {
    var t = this.startNode();
    this.next(), this.eat(a.parenL) ? t.param = this.parseCatchClauseParam() : (this.options.ecmaVersion < 10 && this.unexpected(), t.param = null, this.enterScope(0)), t.body = this.parseBlock(!1), this.exitScope(), e.handler = this.finishNode(t, "CatchClause");
  }
  return e.finalizer = this.eat(a._finally) ? this.parseBlock() : null, !e.handler && !e.finalizer && this.raise(e.start, "Missing catch or finally clause"), this.finishNode(e, "TryStatement");
};
y.parseVarStatement = function(e, t, i) {
  return this.next(), this.parseVar(e, !1, t, i), this.semicolon(), this.finishNode(e, "VariableDeclaration");
};
y.parseWhileStatement = function(e) {
  return this.next(), e.test = this.parseParenExpression(), this.labels.push(rt), e.body = this.parseStatement("while"), this.labels.pop(), this.finishNode(e, "WhileStatement");
};
y.parseWithStatement = function(e) {
  return this.strict && this.raise(this.start, "'with' in strict mode"), this.next(), e.object = this.parseParenExpression(), e.body = this.parseStatement("with"), this.finishNode(e, "WithStatement");
};
y.parseEmptyStatement = function(e) {
  return this.next(), this.finishNode(e, "EmptyStatement");
};
y.parseLabeledStatement = function(e, t, i, r) {
  for (var s = 0, n = this.labels; s < n.length; s += 1) {
    var o = n[s];
    o.name === t && this.raise(i.start, "Label '" + t + "' is already declared");
  }
  for (var u = this.type.isLoop ? "loop" : this.type === a._switch ? "switch" : null, h = this.labels.length - 1; h >= 0; h--) {
    var l = this.labels[h];
    if (l.statementStart === e.start)
      l.statementStart = this.start, l.kind = u;
    else
      break;
  }
  return this.labels.push({ name: t, kind: u, statementStart: this.start }), e.body = this.parseStatement(r ? r.indexOf("label") === -1 ? r + "label" : r : "label"), this.labels.pop(), e.label = i, this.finishNode(e, "LabeledStatement");
};
y.parseExpressionStatement = function(e, t) {
  return e.expression = t, this.semicolon(), this.finishNode(e, "ExpressionStatement");
};
y.parseBlock = function(e, t, i) {
  for (e === void 0 && (e = !0), t === void 0 && (t = this.startNode()), t.body = [], this.expect(a.braceL), e && this.enterScope(0); this.type !== a.braceR; ) {
    var r = this.parseStatement(null);
    t.body.push(r);
  }
  return i && (this.strict = !1), this.next(), e && this.exitScope(), this.finishNode(t, "BlockStatement");
};
y.parseFor = function(e, t) {
  return e.init = t, this.expect(a.semi), e.test = this.type === a.semi ? null : this.parseExpression(), this.expect(a.semi), e.update = this.type === a.parenR ? null : this.parseExpression(), this.expect(a.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e, "ForStatement");
};
y.parseForIn = function(e, t) {
  var i = this.type === a._in;
  return this.next(), t.type === "VariableDeclaration" && t.declarations[0].init != null && (!i || this.options.ecmaVersion < 8 || this.strict || t.kind !== "var" || t.declarations[0].id.type !== "Identifier") && this.raise(
    t.start,
    (i ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"
  ), e.left = t, e.right = i ? this.parseExpression() : this.parseMaybeAssign(), this.expect(a.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e, i ? "ForInStatement" : "ForOfStatement");
};
y.parseVar = function(e, t, i, r) {
  for (e.declarations = [], e.kind = i; ; ) {
    var s = this.startNode();
    if (this.parseVarId(s, i), this.eat(a.eq) ? s.init = this.parseMaybeAssign(t) : !r && i === "const" && !(this.type === a._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) ? this.unexpected() : !r && s.id.type !== "Identifier" && !(t && (this.type === a._in || this.isContextual("of"))) ? this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value") : s.init = null, e.declarations.push(this.finishNode(s, "VariableDeclarator")), !this.eat(a.comma))
      break;
  }
  return e;
};
y.parseVarId = function(e, t) {
  e.id = this.parseBindingAtom(), this.checkLValPattern(e.id, t === "var" ? it : Y, !1);
};
var pe = 1, Ue = 2, Ot = 4;
y.parseFunction = function(e, t, i, r, s) {
  this.initFunction(e), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !r) && (this.type === a.star && t & Ue && this.unexpected(), e.generator = this.eat(a.star)), this.options.ecmaVersion >= 8 && (e.async = !!r), t & pe && (e.id = t & Ot && this.type !== a.name ? null : this.parseIdent(), e.id && !(t & Ue) && this.checkLValSimple(e.id, this.strict || e.generator || e.async ? this.treatFunctionsAsVar ? it : Y : Vt));
  var n = this.yieldPos, o = this.awaitPos, u = this.awaitIdentPos;
  return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(tt(e.async, e.generator)), t & pe || (e.id = this.type === a.name ? this.parseIdent() : null), this.parseFunctionParams(e), this.parseFunctionBody(e, i, !1, s), this.yieldPos = n, this.awaitPos = o, this.awaitIdentPos = u, this.finishNode(e, t & pe ? "FunctionDeclaration" : "FunctionExpression");
};
y.parseFunctionParams = function(e) {
  this.expect(a.parenL), e.params = this.parseBindingList(a.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams();
};
y.parseClass = function(e, t) {
  this.next();
  var i = this.strict;
  this.strict = !0, this.parseClassId(e, t), this.parseClassSuper(e);
  var r = this.enterClassBody(), s = this.startNode(), n = !1;
  for (s.body = [], this.expect(a.braceL); this.type !== a.braceR; ) {
    var o = this.parseClassElement(e.superClass !== null);
    o && (s.body.push(o), o.type === "MethodDefinition" && o.kind === "constructor" ? (n && this.raiseRecoverable(o.start, "Duplicate constructor in the same class"), n = !0) : o.key && o.key.type === "PrivateIdentifier" && zi(r, o) && this.raiseRecoverable(o.key.start, "Identifier '#" + o.key.name + "' has already been declared"));
  }
  return this.strict = i, this.next(), e.body = this.finishNode(s, "ClassBody"), this.exitClassBody(), this.finishNode(e, t ? "ClassDeclaration" : "ClassExpression");
};
y.parseClassElement = function(e) {
  if (this.eat(a.semi))
    return null;
  var t = this.options.ecmaVersion, i = this.startNode(), r = "", s = !1, n = !1, o = "method", u = !1;
  if (this.eatContextual("static")) {
    if (t >= 13 && this.eat(a.braceL))
      return this.parseClassStaticBlock(i), i;
    this.isClassElementNameStart() || this.type === a.star ? u = !0 : r = "static";
  }
  if (i.static = u, !r && t >= 8 && this.eatContextual("async") && ((this.isClassElementNameStart() || this.type === a.star) && !this.canInsertSemicolon() ? n = !0 : r = "async"), !r && (t >= 9 || !n) && this.eat(a.star) && (s = !0), !r && !n && !s) {
    var h = this.value;
    (this.eatContextual("get") || this.eatContextual("set")) && (this.isClassElementNameStart() ? o = h : r = h);
  }
  if (r ? (i.computed = !1, i.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc), i.key.name = r, this.finishNode(i.key, "Identifier")) : this.parseClassElementName(i), t < 13 || this.type === a.parenL || o !== "method" || s || n) {
    var l = !i.static && Se(i, "constructor"), c = l && e;
    l && o !== "method" && this.raise(i.key.start, "Constructor can't have get/set modifier"), i.kind = l ? "constructor" : o, this.parseClassMethod(i, s, n, c);
  } else
    this.parseClassField(i);
  return i;
};
y.isClassElementNameStart = function() {
  return this.type === a.name || this.type === a.privateId || this.type === a.num || this.type === a.string || this.type === a.bracketL || this.type.keyword;
};
y.parseClassElementName = function(e) {
  this.type === a.privateId ? (this.value === "constructor" && this.raise(this.start, "Classes can't have an element named '#constructor'"), e.computed = !1, e.key = this.parsePrivateIdent()) : this.parsePropertyName(e);
};
y.parseClassMethod = function(e, t, i, r) {
  var s = e.key;
  e.kind === "constructor" ? (t && this.raise(s.start, "Constructor can't be a generator"), i && this.raise(s.start, "Constructor can't be an async method")) : e.static && Se(e, "prototype") && this.raise(s.start, "Classes may not have a static property named prototype");
  var n = e.value = this.parseMethod(t, i, r);
  return e.kind === "get" && n.params.length !== 0 && this.raiseRecoverable(n.start, "getter should have no params"), e.kind === "set" && n.params.length !== 1 && this.raiseRecoverable(n.start, "setter should have exactly one param"), e.kind === "set" && n.params[0].type === "RestElement" && this.raiseRecoverable(n.params[0].start, "Setter cannot use rest params"), this.finishNode(e, "MethodDefinition");
};
y.parseClassField = function(e) {
  if (Se(e, "constructor") ? this.raise(e.key.start, "Classes can't have a field named 'constructor'") : e.static && Se(e, "prototype") && this.raise(e.key.start, "Classes can't have a static field named 'prototype'"), this.eat(a.eq)) {
    var t = this.currentThisScope(), i = t.inClassFieldInit;
    t.inClassFieldInit = !0, e.value = this.parseMaybeAssign(), t.inClassFieldInit = i;
  } else
    e.value = null;
  return this.semicolon(), this.finishNode(e, "PropertyDefinition");
};
y.parseClassStaticBlock = function(e) {
  e.body = [];
  var t = this.labels;
  for (this.labels = [], this.enterScope(ye | Ze); this.type !== a.braceR; ) {
    var i = this.parseStatement(null);
    e.body.push(i);
  }
  return this.next(), this.exitScope(), this.labels = t, this.finishNode(e, "StaticBlock");
};
y.parseClassId = function(e, t) {
  this.type === a.name ? (e.id = this.parseIdent(), t && this.checkLValSimple(e.id, Y, !1)) : (t === !0 && this.unexpected(), e.id = null);
};
y.parseClassSuper = function(e) {
  e.superClass = this.eat(a._extends) ? this.parseExprSubscripts(null, !1) : null;
};
y.enterClassBody = function() {
  var e = { declared: /* @__PURE__ */ Object.create(null), used: [] };
  return this.privateNameStack.push(e), e.declared;
};
y.exitClassBody = function() {
  var e = this.privateNameStack.pop(), t = e.declared, i = e.used;
  if (this.options.checkPrivateFields)
    for (var r = this.privateNameStack.length, s = r === 0 ? null : this.privateNameStack[r - 1], n = 0; n < i.length; ++n) {
      var o = i[n];
      ge(t, o.name) || (s ? s.used.push(o) : this.raiseRecoverable(o.start, "Private field '#" + o.name + "' must be declared in an enclosing class"));
    }
};
function zi(e, t) {
  var i = t.key.name, r = e[i], s = "true";
  return t.type === "MethodDefinition" && (t.kind === "get" || t.kind === "set") && (s = (t.static ? "s" : "i") + t.kind), r === "iget" && s === "iset" || r === "iset" && s === "iget" || r === "sget" && s === "sset" || r === "sset" && s === "sget" ? (e[i] = "true", !1) : r ? !0 : (e[i] = s, !1);
}
function Se(e, t) {
  var i = e.computed, r = e.key;
  return !i && (r.type === "Identifier" && r.name === t || r.type === "Literal" && r.value === t);
}
y.parseExportAllDeclaration = function(e, t) {
  return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (e.exported = this.parseModuleExportName(), this.checkExport(t, e.exported, this.lastTokStart)) : e.exported = null), this.expectContextual("from"), this.type !== a.string && this.unexpected(), e.source = this.parseExprAtom(), this.semicolon(), this.finishNode(e, "ExportAllDeclaration");
};
y.parseExport = function(e, t) {
  if (this.next(), this.eat(a.star))
    return this.parseExportAllDeclaration(e, t);
  if (this.eat(a._default))
    return this.checkExport(t, "default", this.lastTokStart), e.declaration = this.parseExportDefaultDeclaration(), this.finishNode(e, "ExportDefaultDeclaration");
  if (this.shouldParseExportStatement())
    e.declaration = this.parseExportDeclaration(e), e.declaration.type === "VariableDeclaration" ? this.checkVariableExport(t, e.declaration.declarations) : this.checkExport(t, e.declaration.id, e.declaration.id.start), e.specifiers = [], e.source = null;
  else {
    if (e.declaration = null, e.specifiers = this.parseExportSpecifiers(t), this.eatContextual("from"))
      this.type !== a.string && this.unexpected(), e.source = this.parseExprAtom();
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
  if (this.type === a._function || (e = this.isAsyncFunction())) {
    var t = this.startNode();
    return this.next(), e && this.next(), this.parseFunction(t, pe | Ot, !1, e);
  } else if (this.type === a._class) {
    var i = this.startNode();
    return this.parseClass(i, "nullableID");
  } else {
    var r = this.parseMaybeAssign();
    return this.semicolon(), r;
  }
};
y.checkExport = function(e, t, i) {
  e && (typeof t != "string" && (t = t.type === "Identifier" ? t.name : t.value), ge(e, t) && this.raiseRecoverable(i, "Duplicate export '" + t + "'"), e[t] = !0);
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
    for (var o = 0, u = t.elements; o < u.length; o += 1) {
      var h = u[o];
      h && this.checkPatternExport(e, h);
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
  for (this.expect(a.braceL); !this.eat(a.braceR); ) {
    if (i)
      i = !1;
    else if (this.expect(a.comma), this.afterTrailingComma(a.braceR))
      break;
    t.push(this.parseExportSpecifier(e));
  }
  return t;
};
y.parseImport = function(e) {
  return this.next(), this.type === a.string ? (e.specifiers = Hi, e.source = this.parseExprAtom()) : (e.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), e.source = this.type === a.string ? this.parseExprAtom() : this.unexpected()), this.semicolon(), this.finishNode(e, "ImportDeclaration");
};
y.parseImportSpecifier = function() {
  var e = this.startNode();
  return e.imported = this.parseModuleExportName(), this.eatContextual("as") ? e.local = this.parseIdent() : (this.checkUnreserved(e.imported), e.local = e.imported), this.checkLValSimple(e.local, Y), this.finishNode(e, "ImportSpecifier");
};
y.parseImportDefaultSpecifier = function() {
  var e = this.startNode();
  return e.local = this.parseIdent(), this.checkLValSimple(e.local, Y), this.finishNode(e, "ImportDefaultSpecifier");
};
y.parseImportNamespaceSpecifier = function() {
  var e = this.startNode();
  return this.next(), this.expectContextual("as"), e.local = this.parseIdent(), this.checkLValSimple(e.local, Y), this.finishNode(e, "ImportNamespaceSpecifier");
};
y.parseImportSpecifiers = function() {
  var e = [], t = !0;
  if (this.type === a.name && (e.push(this.parseImportDefaultSpecifier()), !this.eat(a.comma)))
    return e;
  if (this.type === a.star)
    return e.push(this.parseImportNamespaceSpecifier()), e;
  for (this.expect(a.braceL); !this.eat(a.braceR); ) {
    if (t)
      t = !1;
    else if (this.expect(a.comma), this.afterTrailingComma(a.braceR))
      break;
    e.push(this.parseImportSpecifier());
  }
  return e;
};
y.parseModuleExportName = function() {
  if (this.options.ecmaVersion >= 13 && this.type === a.string) {
    var e = this.parseLiteral(this.value);
    return Fi.test(e.value) && this.raise(e.start, "An export name cannot include a lone surrogate."), e;
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
var M = P.prototype;
M.toAssignable = function(e, t, i) {
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
M.toAssignableList = function(e, t) {
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
M.parseSpread = function(e) {
  var t = this.startNode();
  return this.next(), t.argument = this.parseMaybeAssign(!1, e), this.finishNode(t, "SpreadElement");
};
M.parseRestBinding = function() {
  var e = this.startNode();
  return this.next(), this.options.ecmaVersion === 6 && this.type !== a.name && this.unexpected(), e.argument = this.parseBindingAtom(), this.finishNode(e, "RestElement");
};
M.parseBindingAtom = function() {
  if (this.options.ecmaVersion >= 6)
    switch (this.type) {
      case a.bracketL:
        var e = this.startNode();
        return this.next(), e.elements = this.parseBindingList(a.bracketR, !0, !0), this.finishNode(e, "ArrayPattern");
      case a.braceL:
        return this.parseObj(!0);
    }
  return this.parseIdent();
};
M.parseBindingList = function(e, t, i, r) {
  for (var s = [], n = !0; !this.eat(e); )
    if (n ? n = !1 : this.expect(a.comma), t && this.type === a.comma)
      s.push(null);
    else {
      if (i && this.afterTrailingComma(e))
        break;
      if (this.type === a.ellipsis) {
        var o = this.parseRestBinding();
        this.parseBindingListItem(o), s.push(o), this.type === a.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.expect(e);
        break;
      } else
        s.push(this.parseAssignableListItem(r));
    }
  return s;
};
M.parseAssignableListItem = function(e) {
  var t = this.parseMaybeDefault(this.start, this.startLoc);
  return this.parseBindingListItem(t), t;
};
M.parseBindingListItem = function(e) {
  return e;
};
M.parseMaybeDefault = function(e, t, i) {
  if (i = i || this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(a.eq))
    return i;
  var r = this.startNodeAt(e, t);
  return r.left = i, r.right = this.parseMaybeAssign(), this.finishNode(r, "AssignmentPattern");
};
M.checkLValSimple = function(e, t, i) {
  t === void 0 && (t = we);
  var r = t !== we;
  switch (e.type) {
    case "Identifier":
      this.strict && this.reservedWordsStrictBind.test(e.name) && this.raiseRecoverable(e.start, (r ? "Binding " : "Assigning to ") + e.name + " in strict mode"), r && (t === Y && e.name === "let" && this.raiseRecoverable(e.start, "let is disallowed as a lexically bound name"), i && (ge(i, e.name) && this.raiseRecoverable(e.start, "Argument name clash"), i[e.name] = !0), t !== Tt && this.declareName(e.name, t, e.start));
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
M.checkLValPattern = function(e, t, i) {
  switch (t === void 0 && (t = we), e.type) {
    case "ObjectPattern":
      for (var r = 0, s = e.properties; r < s.length; r += 1) {
        var n = s[r];
        this.checkLValInnerPattern(n, t, i);
      }
      break;
    case "ArrayPattern":
      for (var o = 0, u = e.elements; o < u.length; o += 1) {
        var h = u[o];
        h && this.checkLValInnerPattern(h, t, i);
      }
      break;
    default:
      this.checkLValSimple(e, t, i);
  }
};
M.checkLValInnerPattern = function(e, t, i) {
  switch (t === void 0 && (t = we), e.type) {
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
var F = function(t, i, r, s, n) {
  this.token = t, this.isExpr = !!i, this.preserveSpace = !!r, this.override = s, this.generator = !!n;
}, I = {
  b_stat: new F("{", !1),
  b_expr: new F("{", !0),
  b_tmpl: new F("${", !1),
  p_stat: new F("(", !1),
  p_expr: new F("(", !0),
  q_tmpl: new F("`", !0, !0, function(e) {
    return e.tryReadTemplateToken();
  }),
  f_stat: new F("function", !1),
  f_expr: new F("function", !0),
  f_expr_gen: new F("function", !0, !1, null, !0),
  f_gen: new F("function", !1, !1, null, !0)
}, ce = P.prototype;
ce.initialContext = function() {
  return [I.b_stat];
};
ce.curContext = function() {
  return this.context[this.context.length - 1];
};
ce.braceIsBlock = function(e) {
  var t = this.curContext();
  return t === I.f_expr || t === I.f_stat ? !0 : e === a.colon && (t === I.b_stat || t === I.b_expr) ? !t.isExpr : e === a._return || e === a.name && this.exprAllowed ? D.test(this.input.slice(this.lastTokEnd, this.start)) : e === a._else || e === a.semi || e === a.eof || e === a.parenR || e === a.arrow ? !0 : e === a.braceL ? t === I.b_stat : e === a._var || e === a._const || e === a.name ? !1 : !this.exprAllowed;
};
ce.inGeneratorContext = function() {
  for (var e = this.context.length - 1; e >= 1; e--) {
    var t = this.context[e];
    if (t.token === "function")
      return t.generator;
  }
  return !1;
};
ce.updateContext = function(e) {
  var t, i = this.type;
  i.keyword && e === a.dot ? this.exprAllowed = !1 : (t = i.updateContext) ? t.call(this, e) : this.exprAllowed = i.beforeExpr;
};
ce.overrideContext = function(e) {
  this.curContext() !== e && (this.context[this.context.length - 1] = e);
};
a.parenR.updateContext = a.braceR.updateContext = function() {
  if (this.context.length === 1) {
    this.exprAllowed = !0;
    return;
  }
  var e = this.context.pop();
  e === I.b_stat && this.curContext().token === "function" && (e = this.context.pop()), this.exprAllowed = !e.isExpr;
};
a.braceL.updateContext = function(e) {
  this.context.push(this.braceIsBlock(e) ? I.b_stat : I.b_expr), this.exprAllowed = !0;
};
a.dollarBraceL.updateContext = function() {
  this.context.push(I.b_tmpl), this.exprAllowed = !0;
};
a.parenL.updateContext = function(e) {
  var t = e === a._if || e === a._for || e === a._with || e === a._while;
  this.context.push(t ? I.p_stat : I.p_expr), this.exprAllowed = !0;
};
a.incDec.updateContext = function() {
};
a._function.updateContext = a._class.updateContext = function(e) {
  e.beforeExpr && e !== a._else && !(e === a.semi && this.curContext() !== I.p_stat) && !(e === a._return && D.test(this.input.slice(this.lastTokEnd, this.start))) && !((e === a.colon || e === a.braceL) && this.curContext() === I.b_stat) ? this.context.push(I.f_expr) : this.context.push(I.f_stat), this.exprAllowed = !1;
};
a.colon.updateContext = function() {
  this.curContext().token === "function" && this.context.pop(), this.exprAllowed = !0;
};
a.backQuote.updateContext = function() {
  this.curContext() === I.q_tmpl ? this.context.pop() : this.context.push(I.q_tmpl), this.exprAllowed = !1;
};
a.star.updateContext = function(e) {
  if (e === a._function) {
    var t = this.context.length - 1;
    this.context[t] === I.f_expr ? this.context[t] = I.f_expr_gen : this.context[t] = I.f_gen;
  }
  this.exprAllowed = !0;
};
a.name.updateContext = function(e) {
  var t = !1;
  this.options.ecmaVersion >= 6 && e !== a.dot && (this.value === "of" && !this.exprAllowed || this.value === "yield" && this.inGeneratorContext()) && (t = !0), this.exprAllowed = t;
};
var _ = P.prototype;
_.checkPropClash = function(e, t, i) {
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
    var o = t[s];
    if (o) {
      var u;
      n === "init" ? u = this.strict && o.init || o.get || o.set : u = o.init || o[n], u && this.raiseRecoverable(r.start, "Redefinition of property");
    } else
      o = t[s] = {
        init: !1,
        get: !1,
        set: !1
      };
    o[n] = !0;
  }
};
_.parseExpression = function(e, t) {
  var i = this.start, r = this.startLoc, s = this.parseMaybeAssign(e, t);
  if (this.type === a.comma) {
    var n = this.startNodeAt(i, r);
    for (n.expressions = [s]; this.eat(a.comma); )
      n.expressions.push(this.parseMaybeAssign(e, t));
    return this.finishNode(n, "SequenceExpression");
  }
  return s;
};
_.parseMaybeAssign = function(e, t, i) {
  if (this.isContextual("yield")) {
    if (this.inGenerator)
      return this.parseYield(e);
    this.exprAllowed = !1;
  }
  var r = !1, s = -1, n = -1, o = -1;
  t ? (s = t.parenthesizedAssign, n = t.trailingComma, o = t.doubleProto, t.parenthesizedAssign = t.trailingComma = -1) : (t = new Ne(), r = !0);
  var u = this.start, h = this.startLoc;
  (this.type === a.parenL || this.type === a.name) && (this.potentialArrowAt = this.start, this.potentialArrowInForAwait = e === "await");
  var l = this.parseMaybeConditional(e, t);
  if (i && (l = i.call(this, l, u, h)), this.type.isAssign) {
    var c = this.startNodeAt(u, h);
    return c.operator = this.value, this.type === a.eq && (l = this.toAssignable(l, !1, t)), r || (t.parenthesizedAssign = t.trailingComma = t.doubleProto = -1), t.shorthandAssign >= l.start && (t.shorthandAssign = -1), this.type === a.eq ? this.checkLValPattern(l) : this.checkLValSimple(l), c.left = l, this.next(), c.right = this.parseMaybeAssign(e), o > -1 && (t.doubleProto = o), this.finishNode(c, "AssignmentExpression");
  } else
    r && this.checkExpressionErrors(t, !0);
  return s > -1 && (t.parenthesizedAssign = s), n > -1 && (t.trailingComma = n), l;
};
_.parseMaybeConditional = function(e, t) {
  var i = this.start, r = this.startLoc, s = this.parseExprOps(e, t);
  if (this.checkExpressionErrors(t))
    return s;
  if (this.eat(a.question)) {
    var n = this.startNodeAt(i, r);
    return n.test = s, n.consequent = this.parseMaybeAssign(), this.expect(a.colon), n.alternate = this.parseMaybeAssign(e), this.finishNode(n, "ConditionalExpression");
  }
  return s;
};
_.parseExprOps = function(e, t) {
  var i = this.start, r = this.startLoc, s = this.parseMaybeUnary(t, !1, !1, e);
  return this.checkExpressionErrors(t) || s.start === i && s.type === "ArrowFunctionExpression" ? s : this.parseExprOp(s, i, r, -1, e);
};
_.parseExprOp = function(e, t, i, r, s) {
  var n = this.type.binop;
  if (n != null && (!s || this.type !== a._in) && n > r) {
    var o = this.type === a.logicalOR || this.type === a.logicalAND, u = this.type === a.coalesce;
    u && (n = a.logicalAND.binop);
    var h = this.value;
    this.next();
    var l = this.start, c = this.startLoc, f = this.parseExprOp(this.parseMaybeUnary(null, !1, !1, s), l, c, n, s), p = this.buildBinary(t, i, e, f, h, o || u);
    return (o && this.type === a.coalesce || u && (this.type === a.logicalOR || this.type === a.logicalAND)) && this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"), this.parseExprOp(p, t, i, r, s);
  }
  return e;
};
_.buildBinary = function(e, t, i, r, s, n) {
  r.type === "PrivateIdentifier" && this.raise(r.start, "Private identifier can only be left side of binary expression");
  var o = this.startNodeAt(e, t);
  return o.left = i, o.operator = s, o.right = r, this.finishNode(o, n ? "LogicalExpression" : "BinaryExpression");
};
_.parseMaybeUnary = function(e, t, i, r) {
  var s = this.start, n = this.startLoc, o;
  if (this.isContextual("await") && this.canAwait)
    o = this.parseAwait(r), t = !0;
  else if (this.type.prefix) {
    var u = this.startNode(), h = this.type === a.incDec;
    u.operator = this.value, u.prefix = !0, this.next(), u.argument = this.parseMaybeUnary(null, !0, h, r), this.checkExpressionErrors(e, !0), h ? this.checkLValSimple(u.argument) : this.strict && u.operator === "delete" && Bt(u.argument) ? this.raiseRecoverable(u.start, "Deleting local variable in strict mode") : u.operator === "delete" && qe(u.argument) ? this.raiseRecoverable(u.start, "Private fields can not be deleted") : t = !0, o = this.finishNode(u, h ? "UpdateExpression" : "UnaryExpression");
  } else if (!t && this.type === a.privateId)
    (r || this.privateNameStack.length === 0) && this.options.checkPrivateFields && this.unexpected(), o = this.parsePrivateIdent(), this.type !== a._in && this.unexpected();
  else {
    if (o = this.parseExprSubscripts(e, r), this.checkExpressionErrors(e))
      return o;
    for (; this.type.postfix && !this.canInsertSemicolon(); ) {
      var l = this.startNodeAt(s, n);
      l.operator = this.value, l.prefix = !1, l.argument = o, this.checkLValSimple(o), this.next(), o = this.finishNode(l, "UpdateExpression");
    }
  }
  if (!i && this.eat(a.starstar))
    if (t)
      this.unexpected(this.lastTokStart);
    else
      return this.buildBinary(s, n, o, this.parseMaybeUnary(null, !1, !1, r), "**", !1);
  else
    return o;
};
function Bt(e) {
  return e.type === "Identifier" || e.type === "ParenthesizedExpression" && Bt(e.expression);
}
function qe(e) {
  return e.type === "MemberExpression" && e.property.type === "PrivateIdentifier" || e.type === "ChainExpression" && qe(e.expression) || e.type === "ParenthesizedExpression" && qe(e.expression);
}
_.parseExprSubscripts = function(e, t) {
  var i = this.start, r = this.startLoc, s = this.parseExprAtom(e, t);
  if (s.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")")
    return s;
  var n = this.parseSubscripts(s, i, r, !1, t);
  return e && n.type === "MemberExpression" && (e.parenthesizedAssign >= n.start && (e.parenthesizedAssign = -1), e.parenthesizedBind >= n.start && (e.parenthesizedBind = -1), e.trailingComma >= n.start && (e.trailingComma = -1)), n;
};
_.parseSubscripts = function(e, t, i, r, s) {
  for (var n = this.options.ecmaVersion >= 8 && e.type === "Identifier" && e.name === "async" && this.lastTokEnd === e.end && !this.canInsertSemicolon() && e.end - e.start === 5 && this.potentialArrowAt === e.start, o = !1; ; ) {
    var u = this.parseSubscript(e, t, i, r, n, o, s);
    if (u.optional && (o = !0), u === e || u.type === "ArrowFunctionExpression") {
      if (o) {
        var h = this.startNodeAt(t, i);
        h.expression = u, u = this.finishNode(h, "ChainExpression");
      }
      return u;
    }
    e = u;
  }
};
_.shouldParseAsyncArrow = function() {
  return !this.canInsertSemicolon() && this.eat(a.arrow);
};
_.parseSubscriptAsyncArrow = function(e, t, i, r) {
  return this.parseArrowExpression(this.startNodeAt(e, t), i, !0, r);
};
_.parseSubscript = function(e, t, i, r, s, n, o) {
  var u = this.options.ecmaVersion >= 11, h = u && this.eat(a.questionDot);
  r && h && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
  var l = this.eat(a.bracketL);
  if (l || h && this.type !== a.parenL && this.type !== a.backQuote || this.eat(a.dot)) {
    var c = this.startNodeAt(t, i);
    c.object = e, l ? (c.property = this.parseExpression(), this.expect(a.bracketR)) : this.type === a.privateId && e.type !== "Super" ? c.property = this.parsePrivateIdent() : c.property = this.parseIdent(this.options.allowReserved !== "never"), c.computed = !!l, u && (c.optional = h), e = this.finishNode(c, "MemberExpression");
  } else if (!r && this.eat(a.parenL)) {
    var f = new Ne(), p = this.yieldPos, m = this.awaitPos, v = this.awaitIdentPos;
    this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
    var E = this.parseExprList(a.parenR, this.options.ecmaVersion >= 8, !1, f);
    if (s && !h && this.shouldParseAsyncArrow())
      return this.checkPatternErrors(f, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = p, this.awaitPos = m, this.awaitIdentPos = v, this.parseSubscriptAsyncArrow(t, i, E, o);
    this.checkExpressionErrors(f, !0), this.yieldPos = p || this.yieldPos, this.awaitPos = m || this.awaitPos, this.awaitIdentPos = v || this.awaitIdentPos;
    var g = this.startNodeAt(t, i);
    g.callee = e, g.arguments = E, u && (g.optional = h), e = this.finishNode(g, "CallExpression");
  } else if (this.type === a.backQuote) {
    (h || n) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
    var w = this.startNodeAt(t, i);
    w.tag = e, w.quasi = this.parseTemplate({ isTagged: !0 }), e = this.finishNode(w, "TaggedTemplateExpression");
  }
  return e;
};
_.parseExprAtom = function(e, t, i) {
  this.type === a.slash && this.readRegexp();
  var r, s = this.potentialArrowAt === this.start;
  switch (this.type) {
    case a._super:
      return this.allowSuper || this.raise(this.start, "'super' keyword outside a method"), r = this.startNode(), this.next(), this.type === a.parenL && !this.allowDirectSuper && this.raise(r.start, "super() call outside constructor of a subclass"), this.type !== a.dot && this.type !== a.bracketL && this.type !== a.parenL && this.unexpected(), this.finishNode(r, "Super");
    case a._this:
      return r = this.startNode(), this.next(), this.finishNode(r, "ThisExpression");
    case a.name:
      var n = this.start, o = this.startLoc, u = this.containsEsc, h = this.parseIdent(!1);
      if (this.options.ecmaVersion >= 8 && !u && h.name === "async" && !this.canInsertSemicolon() && this.eat(a._function))
        return this.overrideContext(I.f_expr), this.parseFunction(this.startNodeAt(n, o), 0, !1, !0, t);
      if (s && !this.canInsertSemicolon()) {
        if (this.eat(a.arrow))
          return this.parseArrowExpression(this.startNodeAt(n, o), [h], !1, t);
        if (this.options.ecmaVersion >= 8 && h.name === "async" && this.type === a.name && !u && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc))
          return h = this.parseIdent(!1), (this.canInsertSemicolon() || !this.eat(a.arrow)) && this.unexpected(), this.parseArrowExpression(this.startNodeAt(n, o), [h], !0, t);
      }
      return h;
    case a.regexp:
      var l = this.value;
      return r = this.parseLiteral(l.value), r.regex = { pattern: l.pattern, flags: l.flags }, r;
    case a.num:
    case a.string:
      return this.parseLiteral(this.value);
    case a._null:
    case a._true:
    case a._false:
      return r = this.startNode(), r.value = this.type === a._null ? null : this.type === a._true, r.raw = this.type.keyword, this.next(), this.finishNode(r, "Literal");
    case a.parenL:
      var c = this.start, f = this.parseParenAndDistinguishExpression(s, t);
      return e && (e.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(f) && (e.parenthesizedAssign = c), e.parenthesizedBind < 0 && (e.parenthesizedBind = c)), f;
    case a.bracketL:
      return r = this.startNode(), this.next(), r.elements = this.parseExprList(a.bracketR, !0, !0, e), this.finishNode(r, "ArrayExpression");
    case a.braceL:
      return this.overrideContext(I.b_expr), this.parseObj(!1, e);
    case a._function:
      return r = this.startNode(), this.next(), this.parseFunction(r, 0);
    case a._class:
      return this.parseClass(this.startNode(), !1);
    case a._new:
      return this.parseNew();
    case a.backQuote:
      return this.parseTemplate();
    case a._import:
      return this.options.ecmaVersion >= 11 ? this.parseExprImport(i) : this.unexpected();
    default:
      return this.parseExprAtomDefault();
  }
};
_.parseExprAtomDefault = function() {
  this.unexpected();
};
_.parseExprImport = function(e) {
  var t = this.startNode();
  if (this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword import"), this.next(), this.type === a.parenL && !e)
    return this.parseDynamicImport(t);
  if (this.type === a.dot) {
    var i = this.startNodeAt(t.start, t.loc && t.loc.start);
    return i.name = "import", t.meta = this.finishNode(i, "Identifier"), this.parseImportMeta(t);
  } else
    this.unexpected();
};
_.parseDynamicImport = function(e) {
  if (this.next(), e.source = this.parseMaybeAssign(), !this.eat(a.parenR)) {
    var t = this.start;
    this.eat(a.comma) && this.eat(a.parenR) ? this.raiseRecoverable(t, "Trailing comma is not allowed in import()") : this.unexpected(t);
  }
  return this.finishNode(e, "ImportExpression");
};
_.parseImportMeta = function(e) {
  this.next();
  var t = this.containsEsc;
  return e.property = this.parseIdent(!0), e.property.name !== "meta" && this.raiseRecoverable(e.property.start, "The only valid meta property for import is 'import.meta'"), t && this.raiseRecoverable(e.start, "'import.meta' must not contain escaped characters"), this.options.sourceType !== "module" && !this.options.allowImportExportEverywhere && this.raiseRecoverable(e.start, "Cannot use 'import.meta' outside a module"), this.finishNode(e, "MetaProperty");
};
_.parseLiteral = function(e) {
  var t = this.startNode();
  return t.value = e, t.raw = this.input.slice(this.start, this.end), t.raw.charCodeAt(t.raw.length - 1) === 110 && (t.bigint = t.raw.slice(0, -1).replace(/_/g, "")), this.next(), this.finishNode(t, "Literal");
};
_.parseParenExpression = function() {
  this.expect(a.parenL);
  var e = this.parseExpression();
  return this.expect(a.parenR), e;
};
_.shouldParseArrow = function(e) {
  return !this.canInsertSemicolon();
};
_.parseParenAndDistinguishExpression = function(e, t) {
  var i = this.start, r = this.startLoc, s, n = this.options.ecmaVersion >= 8;
  if (this.options.ecmaVersion >= 6) {
    this.next();
    var o = this.start, u = this.startLoc, h = [], l = !0, c = !1, f = new Ne(), p = this.yieldPos, m = this.awaitPos, v;
    for (this.yieldPos = 0, this.awaitPos = 0; this.type !== a.parenR; )
      if (l ? l = !1 : this.expect(a.comma), n && this.afterTrailingComma(a.parenR, !0)) {
        c = !0;
        break;
      } else if (this.type === a.ellipsis) {
        v = this.start, h.push(this.parseParenItem(this.parseRestBinding())), this.type === a.comma && this.raiseRecoverable(
          this.start,
          "Comma is not permitted after the rest element"
        );
        break;
      } else
        h.push(this.parseMaybeAssign(!1, f, this.parseParenItem));
    var E = this.lastTokEnd, g = this.lastTokEndLoc;
    if (this.expect(a.parenR), e && this.shouldParseArrow(h) && this.eat(a.arrow))
      return this.checkPatternErrors(f, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = p, this.awaitPos = m, this.parseParenArrowList(i, r, h, t);
    (!h.length || c) && this.unexpected(this.lastTokStart), v && this.unexpected(v), this.checkExpressionErrors(f, !0), this.yieldPos = p || this.yieldPos, this.awaitPos = m || this.awaitPos, h.length > 1 ? (s = this.startNodeAt(o, u), s.expressions = h, this.finishNodeAt(s, "SequenceExpression", E, g)) : s = h[0];
  } else
    s = this.parseParenExpression();
  if (this.options.preserveParens) {
    var w = this.startNodeAt(i, r);
    return w.expression = s, this.finishNode(w, "ParenthesizedExpression");
  } else
    return s;
};
_.parseParenItem = function(e) {
  return e;
};
_.parseParenArrowList = function(e, t, i, r) {
  return this.parseArrowExpression(this.startNodeAt(e, t), i, !1, r);
};
var Gi = [];
_.parseNew = function() {
  this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
  var e = this.startNode();
  if (this.next(), this.options.ecmaVersion >= 6 && this.type === a.dot) {
    var t = this.startNodeAt(e.start, e.loc && e.loc.start);
    t.name = "new", e.meta = this.finishNode(t, "Identifier"), this.next();
    var i = this.containsEsc;
    return e.property = this.parseIdent(!0), e.property.name !== "target" && this.raiseRecoverable(e.property.start, "The only valid meta property for new is 'new.target'"), i && this.raiseRecoverable(e.start, "'new.target' must not contain escaped characters"), this.allowNewDotTarget || this.raiseRecoverable(e.start, "'new.target' can only be used in functions and class static block"), this.finishNode(e, "MetaProperty");
  }
  var r = this.start, s = this.startLoc;
  return e.callee = this.parseSubscripts(this.parseExprAtom(null, !1, !0), r, s, !0, !1), this.eat(a.parenL) ? e.arguments = this.parseExprList(a.parenR, this.options.ecmaVersion >= 8, !1) : e.arguments = Gi, this.finishNode(e, "NewExpression");
};
_.parseTemplateElement = function(e) {
  var t = e.isTagged, i = this.startNode();
  return this.type === a.invalidTemplate ? (t || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"), i.value = {
    raw: this.value.replace(/\r\n?/g, `
`),
    cooked: null
  }) : i.value = {
    raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, `
`),
    cooked: this.value
  }, this.next(), i.tail = this.type === a.backQuote, this.finishNode(i, "TemplateElement");
};
_.parseTemplate = function(e) {
  e === void 0 && (e = {});
  var t = e.isTagged;
  t === void 0 && (t = !1);
  var i = this.startNode();
  this.next(), i.expressions = [];
  var r = this.parseTemplateElement({ isTagged: t });
  for (i.quasis = [r]; !r.tail; )
    this.type === a.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(a.dollarBraceL), i.expressions.push(this.parseExpression()), this.expect(a.braceR), i.quasis.push(r = this.parseTemplateElement({ isTagged: t }));
  return this.next(), this.finishNode(i, "TemplateLiteral");
};
_.isAsyncProp = function(e) {
  return !e.computed && e.key.type === "Identifier" && e.key.name === "async" && (this.type === a.name || this.type === a.num || this.type === a.string || this.type === a.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === a.star) && !D.test(this.input.slice(this.lastTokEnd, this.start));
};
_.parseObj = function(e, t) {
  var i = this.startNode(), r = !0, s = {};
  for (i.properties = [], this.next(); !this.eat(a.braceR); ) {
    if (r)
      r = !1;
    else if (this.expect(a.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(a.braceR))
      break;
    var n = this.parseProperty(e, t);
    e || this.checkPropClash(n, s, t), i.properties.push(n);
  }
  return this.finishNode(i, e ? "ObjectPattern" : "ObjectExpression");
};
_.parseProperty = function(e, t) {
  var i = this.startNode(), r, s, n, o;
  if (this.options.ecmaVersion >= 9 && this.eat(a.ellipsis))
    return e ? (i.argument = this.parseIdent(!1), this.type === a.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.finishNode(i, "RestElement")) : (i.argument = this.parseMaybeAssign(!1, t), this.type === a.comma && t && t.trailingComma < 0 && (t.trailingComma = this.start), this.finishNode(i, "SpreadElement"));
  this.options.ecmaVersion >= 6 && (i.method = !1, i.shorthand = !1, (e || t) && (n = this.start, o = this.startLoc), e || (r = this.eat(a.star)));
  var u = this.containsEsc;
  return this.parsePropertyName(i), !e && !u && this.options.ecmaVersion >= 8 && !r && this.isAsyncProp(i) ? (s = !0, r = this.options.ecmaVersion >= 9 && this.eat(a.star), this.parsePropertyName(i)) : s = !1, this.parsePropertyValue(i, e, r, s, n, o, t, u), this.finishNode(i, "Property");
};
_.parseGetterSetter = function(e) {
  e.kind = e.key.name, this.parsePropertyName(e), e.value = this.parseMethod(!1);
  var t = e.kind === "get" ? 0 : 1;
  if (e.value.params.length !== t) {
    var i = e.value.start;
    e.kind === "get" ? this.raiseRecoverable(i, "getter should have no params") : this.raiseRecoverable(i, "setter should have exactly one param");
  } else
    e.kind === "set" && e.value.params[0].type === "RestElement" && this.raiseRecoverable(e.value.params[0].start, "Setter cannot use rest params");
};
_.parsePropertyValue = function(e, t, i, r, s, n, o, u) {
  (i || r) && this.type === a.colon && this.unexpected(), this.eat(a.colon) ? (e.value = t ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, o), e.kind = "init") : this.options.ecmaVersion >= 6 && this.type === a.parenL ? (t && this.unexpected(), e.kind = "init", e.method = !0, e.value = this.parseMethod(i, r)) : !t && !u && this.options.ecmaVersion >= 5 && !e.computed && e.key.type === "Identifier" && (e.key.name === "get" || e.key.name === "set") && this.type !== a.comma && this.type !== a.braceR && this.type !== a.eq ? ((i || r) && this.unexpected(), this.parseGetterSetter(e)) : this.options.ecmaVersion >= 6 && !e.computed && e.key.type === "Identifier" ? ((i || r) && this.unexpected(), this.checkUnreserved(e.key), e.key.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = s), e.kind = "init", t ? e.value = this.parseMaybeDefault(s, n, this.copyNode(e.key)) : this.type === a.eq && o ? (o.shorthandAssign < 0 && (o.shorthandAssign = this.start), e.value = this.parseMaybeDefault(s, n, this.copyNode(e.key))) : e.value = this.copyNode(e.key), e.shorthand = !0) : this.unexpected();
};
_.parsePropertyName = function(e) {
  if (this.options.ecmaVersion >= 6) {
    if (this.eat(a.bracketL))
      return e.computed = !0, e.key = this.parseMaybeAssign(), this.expect(a.bracketR), e.key;
    e.computed = !1;
  }
  return e.key = this.type === a.num || this.type === a.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
};
_.initFunction = function(e) {
  e.id = null, this.options.ecmaVersion >= 6 && (e.generator = e.expression = !1), this.options.ecmaVersion >= 8 && (e.async = !1);
};
_.parseMethod = function(e, t, i) {
  var r = this.startNode(), s = this.yieldPos, n = this.awaitPos, o = this.awaitIdentPos;
  return this.initFunction(r), this.options.ecmaVersion >= 6 && (r.generator = e), this.options.ecmaVersion >= 8 && (r.async = !!t), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(tt(t, r.generator) | Ze | (i ? Rt : 0)), this.expect(a.parenL), r.params = this.parseBindingList(a.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(r, !1, !0, !1), this.yieldPos = s, this.awaitPos = n, this.awaitIdentPos = o, this.finishNode(r, "FunctionExpression");
};
_.parseArrowExpression = function(e, t, i, r) {
  var s = this.yieldPos, n = this.awaitPos, o = this.awaitIdentPos;
  return this.enterScope(tt(i, !1) | Pt), this.initFunction(e), this.options.ecmaVersion >= 8 && (e.async = !!i), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, e.params = this.toAssignableList(t, !0), this.parseFunctionBody(e, !0, !1, r), this.yieldPos = s, this.awaitPos = n, this.awaitIdentPos = o, this.finishNode(e, "ArrowFunctionExpression");
};
_.parseFunctionBody = function(e, t, i, r) {
  var s = t && this.type !== a.braceL, n = this.strict, o = !1;
  if (s)
    e.body = this.parseMaybeAssign(r), e.expression = !0, this.checkParams(e, !1);
  else {
    var u = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(e.params);
    (!n || u) && (o = this.strictDirective(this.end), o && u && this.raiseRecoverable(e.start, "Illegal 'use strict' directive in function with non-simple parameter list"));
    var h = this.labels;
    this.labels = [], o && (this.strict = !0), this.checkParams(e, !n && !o && !t && !i && this.isSimpleParamList(e.params)), this.strict && e.id && this.checkLValSimple(e.id, Tt), e.body = this.parseBlock(!1, void 0, o && !n), e.expression = !1, this.adaptDirectivePrologue(e.body.body), this.labels = h;
  }
  this.exitScope();
};
_.isSimpleParamList = function(e) {
  for (var t = 0, i = e; t < i.length; t += 1) {
    var r = i[t];
    if (r.type !== "Identifier")
      return !1;
  }
  return !0;
};
_.checkParams = function(e, t) {
  for (var i = /* @__PURE__ */ Object.create(null), r = 0, s = e.params; r < s.length; r += 1) {
    var n = s[r];
    this.checkLValInnerPattern(n, it, t ? null : i);
  }
};
_.parseExprList = function(e, t, i, r) {
  for (var s = [], n = !0; !this.eat(e); ) {
    if (n)
      n = !1;
    else if (this.expect(a.comma), t && this.afterTrailingComma(e))
      break;
    var o = void 0;
    i && this.type === a.comma ? o = null : this.type === a.ellipsis ? (o = this.parseSpread(r), r && this.type === a.comma && r.trailingComma < 0 && (r.trailingComma = this.start)) : o = this.parseMaybeAssign(!1, r), s.push(o);
  }
  return s;
};
_.checkUnreserved = function(e) {
  var t = e.start, i = e.end, r = e.name;
  if (this.inGenerator && r === "yield" && this.raiseRecoverable(t, "Cannot use 'yield' as identifier inside a generator"), this.inAsync && r === "await" && this.raiseRecoverable(t, "Cannot use 'await' as identifier inside an async function"), this.currentThisScope().inClassFieldInit && r === "arguments" && this.raiseRecoverable(t, "Cannot use 'arguments' in class field initializer"), this.inClassStaticBlock && (r === "arguments" || r === "await") && this.raise(t, "Cannot use " + r + " in class static initialization block"), this.keywords.test(r) && this.raise(t, "Unexpected keyword '" + r + "'"), !(this.options.ecmaVersion < 6 && this.input.slice(t, i).indexOf("\\") !== -1)) {
    var s = this.strict ? this.reservedWordsStrict : this.reservedWords;
    s.test(r) && (!this.inAsync && r === "await" && this.raiseRecoverable(t, "Cannot use keyword 'await' outside an async function"), this.raiseRecoverable(t, "The keyword '" + r + "' is reserved"));
  }
};
_.parseIdent = function(e) {
  var t = this.parseIdentNode();
  return this.next(!!e), this.finishNode(t, "Identifier"), e || (this.checkUnreserved(t), t.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = t.start)), t;
};
_.parseIdentNode = function() {
  var e = this.startNode();
  return this.type === a.name ? e.name = this.value : this.type.keyword ? (e.name = this.type.keyword, (e.name === "class" || e.name === "function") && (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46) && this.context.pop(), this.type = a.name) : this.unexpected(), e;
};
_.parsePrivateIdent = function() {
  var e = this.startNode();
  return this.type === a.privateId ? e.name = this.value : this.unexpected(), this.next(), this.finishNode(e, "PrivateIdentifier"), this.options.checkPrivateFields && (this.privateNameStack.length === 0 ? this.raise(e.start, "Private field '#" + e.name + "' must be declared in an enclosing class") : this.privateNameStack[this.privateNameStack.length - 1].used.push(e)), e;
};
_.parseYield = function(e) {
  this.yieldPos || (this.yieldPos = this.start);
  var t = this.startNode();
  return this.next(), this.type === a.semi || this.canInsertSemicolon() || this.type !== a.star && !this.type.startsExpr ? (t.delegate = !1, t.argument = null) : (t.delegate = this.eat(a.star), t.argument = this.parseMaybeAssign(e)), this.finishNode(t, "YieldExpression");
};
_.parseAwait = function(e) {
  this.awaitPos || (this.awaitPos = this.start);
  var t = this.startNode();
  return this.next(), t.argument = this.parseMaybeUnary(null, !0, !1, e), this.finishNode(t, "AwaitExpression");
};
var Ce = P.prototype;
Ce.raise = function(e, t) {
  var i = It(this.input, e);
  t += " (" + i.line + ":" + i.column + ")";
  var r = new SyntaxError(t);
  throw r.pos = e, r.loc = i, r.raisedAt = this.pos, r;
};
Ce.raiseRecoverable = Ce.raise;
Ce.curPosition = function() {
  if (this.options.locations)
    return new me(this.curLine, this.pos - this.lineStart);
};
var J = P.prototype, Ki = function(t) {
  this.flags = t, this.var = [], this.lexical = [], this.functions = [], this.inClassFieldInit = !1;
};
J.enterScope = function(e) {
  this.scopeStack.push(new Ki(e));
};
J.exitScope = function() {
  this.scopeStack.pop();
};
J.treatFunctionsAsVarInScope = function(e) {
  return e.flags & he || !this.inModule && e.flags & ve;
};
J.declareName = function(e, t, i) {
  var r = !1;
  if (t === Y) {
    var s = this.currentScope();
    r = s.lexical.indexOf(e) > -1 || s.functions.indexOf(e) > -1 || s.var.indexOf(e) > -1, s.lexical.push(e), this.inModule && s.flags & ve && delete this.undefinedExports[e];
  } else if (t === Lt) {
    var n = this.currentScope();
    n.lexical.push(e);
  } else if (t === Vt) {
    var o = this.currentScope();
    this.treatFunctionsAsVar ? r = o.lexical.indexOf(e) > -1 : r = o.lexical.indexOf(e) > -1 || o.var.indexOf(e) > -1, o.functions.push(e);
  } else
    for (var u = this.scopeStack.length - 1; u >= 0; --u) {
      var h = this.scopeStack[u];
      if (h.lexical.indexOf(e) > -1 && !(h.flags & Nt && h.lexical[0] === e) || !this.treatFunctionsAsVarInScope(h) && h.functions.indexOf(e) > -1) {
        r = !0;
        break;
      }
      if (h.var.push(e), this.inModule && h.flags & ve && delete this.undefinedExports[e], h.flags & et)
        break;
    }
  r && this.raiseRecoverable(i, "Identifier '" + e + "' has already been declared");
};
J.checkLocalExport = function(e) {
  this.scopeStack[0].lexical.indexOf(e.name) === -1 && this.scopeStack[0].var.indexOf(e.name) === -1 && (this.undefinedExports[e.name] = e);
};
J.currentScope = function() {
  return this.scopeStack[this.scopeStack.length - 1];
};
J.currentVarScope = function() {
  for (var e = this.scopeStack.length - 1; ; e--) {
    var t = this.scopeStack[e];
    if (t.flags & et)
      return t;
  }
};
J.currentThisScope = function() {
  for (var e = this.scopeStack.length - 1; ; e--) {
    var t = this.scopeStack[e];
    if (t.flags & et && !(t.flags & Pt))
      return t;
  }
};
var Re = function(t, i, r) {
  this.type = "", this.start = i, this.end = 0, t.options.locations && (this.loc = new Pe(t, r)), t.options.directSourceFile && (this.sourceFile = t.options.directSourceFile), t.options.ranges && (this.range = [i, 0]);
}, be = P.prototype;
be.startNode = function() {
  return new Re(this, this.start, this.startLoc);
};
be.startNodeAt = function(e, t) {
  return new Re(this, e, t);
};
function Dt(e, t, i, r) {
  return e.type = t, e.end = i, this.options.locations && (e.loc.end = r), this.options.ranges && (e.range[1] = i), e;
}
be.finishNode = function(e, t) {
  return Dt.call(this, e, t, this.lastTokEnd, this.lastTokEndLoc);
};
be.finishNodeAt = function(e, t, i, r) {
  return Dt.call(this, e, t, i, r);
};
be.copyNode = function(e) {
  var t = new Re(this, e.start, this.startLoc);
  for (var i in e)
    t[i] = e[i];
  return t;
};
var Mt = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS", Ft = Mt + " Extended_Pictographic", jt = Ft, Ut = jt + " EBase EComp EMod EPres ExtPict", qt = Ut, Qi = qt, Yi = {
  9: Mt,
  10: Ft,
  11: jt,
  12: Ut,
  13: qt,
  14: Qi
}, Xi = "Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Flag_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence RGI_Emoji", $i = {
  9: "",
  10: "",
  11: "",
  12: "",
  13: "",
  14: Xi
}, xt = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu", Wt = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb", Ht = Wt + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd", zt = Ht + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho", Gt = zt + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi", Kt = Gt + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith", Ji = Kt + " Hrkt Katakana_Or_Hiragana Kawi Nag_Mundari Nagm Unknown Zzzz", Zi = {
  9: Wt,
  10: Ht,
  11: zt,
  12: Gt,
  13: Kt,
  14: Ji
}, Qt = {};
function er(e) {
  var t = Qt[e] = {
    binary: X(Yi[e] + " " + xt),
    binaryOfStrings: X($i[e]),
    nonBinary: {
      General_Category: X(xt),
      Script: X(Zi[e])
    }
  };
  t.nonBinary.Script_Extensions = t.nonBinary.Script, t.nonBinary.gc = t.nonBinary.General_Category, t.nonBinary.sc = t.nonBinary.Script, t.nonBinary.scx = t.nonBinary.Script_Extensions;
}
for (var Me = 0, gt = [9, 10, 11, 12, 13, 14]; Me < gt.length; Me += 1) {
  var tr = gt[Me];
  er(tr);
}
var x = P.prototype, ke = function(t, i) {
  this.parent = t, this.base = i || this;
};
ke.prototype.separatedFrom = function(t) {
  for (var i = this; i; i = i.parent)
    for (var r = t; r; r = r.parent)
      if (i.base === r.base && i !== r)
        return !0;
  return !1;
};
ke.prototype.sibling = function() {
  return new ke(this.parent, this.base);
};
var q = function(t) {
  this.parser = t, this.validFlags = "gim" + (t.options.ecmaVersion >= 6 ? "uy" : "") + (t.options.ecmaVersion >= 9 ? "s" : "") + (t.options.ecmaVersion >= 13 ? "d" : "") + (t.options.ecmaVersion >= 15 ? "v" : ""), this.unicodeProperties = Qt[t.options.ecmaVersion >= 14 ? 14 : t.options.ecmaVersion], this.source = "", this.flags = "", this.start = 0, this.switchU = !1, this.switchV = !1, this.switchN = !1, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", this.lastAssertionIsQuantifiable = !1, this.numCapturingParens = 0, this.maxBackReference = 0, this.groupNames = /* @__PURE__ */ Object.create(null), this.backReferenceNames = [], this.branchID = null;
};
q.prototype.reset = function(t, i, r) {
  var s = r.indexOf("v") !== -1, n = r.indexOf("u") !== -1;
  this.start = t | 0, this.source = i + "", this.flags = r, s && this.parser.options.ecmaVersion >= 15 ? (this.switchU = !0, this.switchV = !0, this.switchN = !0) : (this.switchU = n && this.parser.options.ecmaVersion >= 6, this.switchV = !1, this.switchN = n && this.parser.options.ecmaVersion >= 9);
};
q.prototype.raise = function(t) {
  this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + t);
};
q.prototype.at = function(t, i) {
  i === void 0 && (i = !1);
  var r = this.source, s = r.length;
  if (t >= s)
    return -1;
  var n = r.charCodeAt(t);
  if (!(i || this.switchU) || n <= 55295 || n >= 57344 || t + 1 >= s)
    return n;
  var o = r.charCodeAt(t + 1);
  return o >= 56320 && o <= 57343 ? (n << 10) + o - 56613888 : n;
};
q.prototype.nextIndex = function(t, i) {
  i === void 0 && (i = !1);
  var r = this.source, s = r.length;
  if (t >= s)
    return s;
  var n = r.charCodeAt(t), o;
  return !(i || this.switchU) || n <= 55295 || n >= 57344 || t + 1 >= s || (o = r.charCodeAt(t + 1)) < 56320 || o > 57343 ? t + 1 : t + 2;
};
q.prototype.current = function(t) {
  return t === void 0 && (t = !1), this.at(this.pos, t);
};
q.prototype.lookahead = function(t) {
  return t === void 0 && (t = !1), this.at(this.nextIndex(this.pos, t), t);
};
q.prototype.advance = function(t) {
  t === void 0 && (t = !1), this.pos = this.nextIndex(this.pos, t);
};
q.prototype.eat = function(t, i) {
  return i === void 0 && (i = !1), this.current(i) === t ? (this.advance(i), !0) : !1;
};
q.prototype.eatChars = function(t, i) {
  i === void 0 && (i = !1);
  for (var r = this.pos, s = 0, n = t; s < n.length; s += 1) {
    var o = n[s], u = this.at(r, i);
    if (u === -1 || u !== o)
      return !1;
    r = this.nextIndex(r, i);
  }
  return this.pos = r, !0;
};
x.validateRegExpFlags = function(e) {
  for (var t = e.validFlags, i = e.flags, r = !1, s = !1, n = 0; n < i.length; n++) {
    var o = i.charAt(n);
    t.indexOf(o) === -1 && this.raise(e.start, "Invalid regular expression flag"), i.indexOf(o, n + 1) > -1 && this.raise(e.start, "Duplicate regular expression flag"), o === "u" && (r = !0), o === "v" && (s = !0);
  }
  this.options.ecmaVersion >= 15 && r && s && this.raise(e.start, "Invalid regular expression flag");
};
function ir(e) {
  for (var t in e)
    return !0;
  return !1;
}
x.validateRegExpPattern = function(e) {
  this.regexp_pattern(e), !e.switchN && this.options.ecmaVersion >= 9 && ir(e.groupNames) && (e.switchN = !0, this.regexp_pattern(e));
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
  for (t && (e.branchID = new ke(e.branchID, null)), this.regexp_alternative(e); e.eat(
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
  return Yt(t) ? (e.lastIntValue = t, e.advance(), !0) : !1;
};
function Yt(e) {
  return e === 36 || e >= 40 && e <= 43 || e === 46 || e === 63 || e >= 91 && e <= 94 || e >= 123 && e <= 125;
}
x.regexp_eatPatternCharacters = function(e) {
  for (var t = e.pos, i = 0; (i = e.current()) !== -1 && !Yt(i); )
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
    for (e.lastStringValue += $(e.lastIntValue); this.regexp_eatRegExpIdentifierPart(e); )
      e.lastStringValue += $(e.lastIntValue);
    return !0;
  }
  return !1;
};
x.regexp_eatRegExpIdentifierStart = function(e) {
  var t = e.pos, i = this.options.ecmaVersion >= 11, r = e.current(i);
  return e.advance(i), r === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, i) && (r = e.lastIntValue), rr(r) ? (e.lastIntValue = r, !0) : (e.pos = t, !1);
};
function rr(e) {
  return W(e, !0) || e === 36 || e === 95;
}
x.regexp_eatRegExpIdentifierPart = function(e) {
  var t = e.pos, i = this.options.ecmaVersion >= 11, r = e.current(i);
  return e.advance(i), r === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, i) && (r = e.lastIntValue), sr(r) ? (e.lastIntValue = r, !0) : (e.pos = t, !1);
};
function sr(e) {
  return ae(e, !0) || e === 36 || e === 95 || e === 8204 || e === 8205;
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
  return e.current() === 48 && !Ve(e.lookahead()) ? (e.lastIntValue = 0, e.advance(), !0) : !1;
};
x.regexp_eatControlEscape = function(e) {
  var t = e.current();
  return t === 116 ? (e.lastIntValue = 9, e.advance(), !0) : t === 110 ? (e.lastIntValue = 10, e.advance(), !0) : t === 118 ? (e.lastIntValue = 11, e.advance(), !0) : t === 102 ? (e.lastIntValue = 12, e.advance(), !0) : t === 114 ? (e.lastIntValue = 13, e.advance(), !0) : !1;
};
x.regexp_eatControlLetter = function(e) {
  var t = e.current();
  return Xt(t) ? (e.lastIntValue = t % 32, e.advance(), !0) : !1;
};
function Xt(e) {
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
          var o = e.lastIntValue;
          if (o >= 56320 && o <= 57343)
            return e.lastIntValue = (s - 55296) * 1024 + (o - 56320) + 65536, !0;
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
    ) && nr(e.lastIntValue))
      return !0;
    r && e.raise("Invalid unicode escape"), e.pos = i;
  }
  return !1;
};
function nr(e) {
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
var $t = 0, H = 1, B = 2;
x.regexp_eatCharacterClassEscape = function(e) {
  var t = e.current();
  if (ar(t))
    return e.lastIntValue = -1, e.advance(), H;
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
      return i && r === B && e.raise("Invalid property name"), r;
    e.raise("Invalid property name");
  }
  return $t;
};
function ar(e) {
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
      return this.regexp_validateUnicodePropertyNameAndValue(e, i, r), H;
    }
  }
  if (e.pos = t, this.regexp_eatLoneUnicodePropertyNameOrValue(e)) {
    var s = e.lastStringValue;
    return this.regexp_validateUnicodePropertyNameOrValue(e, s);
  }
  return $t;
};
x.regexp_validateUnicodePropertyNameAndValue = function(e, t, i) {
  ge(e.unicodeProperties.nonBinary, t) || e.raise("Invalid property name"), e.unicodeProperties.nonBinary[t].test(i) || e.raise("Invalid property value");
};
x.regexp_validateUnicodePropertyNameOrValue = function(e, t) {
  if (e.unicodeProperties.binary.test(t))
    return H;
  if (e.switchV && e.unicodeProperties.binaryOfStrings.test(t))
    return B;
  e.raise("Invalid property name");
};
x.regexp_eatUnicodePropertyName = function(e) {
  var t = 0;
  for (e.lastStringValue = ""; Jt(t = e.current()); )
    e.lastStringValue += $(t), e.advance();
  return e.lastStringValue !== "";
};
function Jt(e) {
  return Xt(e) || e === 95;
}
x.regexp_eatUnicodePropertyValue = function(e) {
  var t = 0;
  for (e.lastStringValue = ""; or(t = e.current()); )
    e.lastStringValue += $(t), e.advance();
  return e.lastStringValue !== "";
};
function or(e) {
  return Jt(e) || Ve(e);
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
    ) || e.raise("Unterminated character class"), t && i === B && e.raise("Negated character class may contain strings"), !0;
  }
  return !1;
};
x.regexp_classContents = function(e) {
  return e.current() === 93 ? H : e.switchV ? this.regexp_classSetExpression(e) : (this.regexp_nonEmptyClassRanges(e), H);
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
      (i === 99 || ti(i)) && e.raise("Invalid class escape"), e.raise("Invalid escape");
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
  var t = H, i;
  if (!this.regexp_eatClassSetRange(e))
    if (i = this.regexp_eatClassSetOperand(e)) {
      i === B && (t = B);
      for (var r = e.pos; e.eatChars(
        [38, 38]
        /* && */
      ); ) {
        if (e.current() !== 38 && (i = this.regexp_eatClassSetOperand(e))) {
          i !== B && (t = H);
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
      i === B && (t = B);
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
  return this.regexp_eatClassSetCharacter(e) ? H : this.regexp_eatClassStringDisjunction(e) || this.regexp_eatNestedClass(e);
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
      return i && r === B && e.raise("Negated character class may contain strings"), r;
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
    this.regexp_classString(e) === B && (t = B);
  return t;
};
x.regexp_classString = function(e) {
  for (var t = 0; this.regexp_eatClassSetCharacter(e); )
    t++;
  return t === 1 ? H : B;
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
  return i < 0 || i === e.lookahead() && ur(i) || hr(i) ? !1 : (e.advance(), e.lastIntValue = i, !0);
};
function ur(e) {
  return e === 33 || e >= 35 && e <= 38 || e >= 42 && e <= 44 || e === 46 || e >= 58 && e <= 64 || e === 94 || e === 96 || e === 126;
}
function hr(e) {
  return e === 40 || e === 41 || e === 45 || e === 47 || e >= 91 && e <= 93 || e >= 123 && e <= 125;
}
x.regexp_eatClassSetReservedPunctuator = function(e) {
  var t = e.current();
  return cr(t) ? (e.lastIntValue = t, e.advance(), !0) : !1;
};
function cr(e) {
  return e === 33 || e === 35 || e === 37 || e === 38 || e === 44 || e === 45 || e >= 58 && e <= 62 || e === 64 || e === 96 || e === 126;
}
x.regexp_eatClassControlLetter = function(e) {
  var t = e.current();
  return Ve(t) || t === 95 ? (e.lastIntValue = t % 32, e.advance(), !0) : !1;
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
  for (e.lastIntValue = 0; Ve(i = e.current()); )
    e.lastIntValue = 10 * e.lastIntValue + (i - 48), e.advance();
  return e.pos !== t;
};
function Ve(e) {
  return e >= 48 && e <= 57;
}
x.regexp_eatHexDigits = function(e) {
  var t = e.pos, i = 0;
  for (e.lastIntValue = 0; Zt(i = e.current()); )
    e.lastIntValue = 16 * e.lastIntValue + ei(i), e.advance();
  return e.pos !== t;
};
function Zt(e) {
  return e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102;
}
function ei(e) {
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
  return ti(t) ? (e.lastIntValue = t - 48, e.advance(), !0) : (e.lastIntValue = 0, !1);
};
function ti(e) {
  return e >= 48 && e <= 55;
}
x.regexp_eatFixedHexDigits = function(e, t) {
  var i = e.pos;
  e.lastIntValue = 0;
  for (var r = 0; r < t; ++r) {
    var s = e.current();
    if (!Zt(s))
      return e.pos = i, !1;
    e.lastIntValue = 16 * e.lastIntValue + ei(s), e.advance();
  }
  return !0;
};
var st = function(t) {
  this.type = t.type, this.value = t.value, this.start = t.start, this.end = t.end, t.options.locations && (this.loc = new Pe(t, t.startLoc, t.endLoc)), t.options.ranges && (this.range = [t.start, t.end]);
}, S = P.prototype;
S.next = function(e) {
  !e && this.type.keyword && this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword), this.options.onToken && this.options.onToken(new st(this)), this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken();
};
S.getToken = function() {
  return this.next(), new st(this);
};
typeof Symbol < "u" && (S[Symbol.iterator] = function() {
  var e = this;
  return {
    next: function() {
      var t = e.getToken();
      return {
        done: t.type === a.eof,
        value: t
      };
    }
  };
});
S.nextToken = function() {
  var e = this.curContext();
  if ((!e || !e.preserveSpace) && this.skipSpace(), this.start = this.pos, this.options.locations && (this.startLoc = this.curPosition()), this.pos >= this.input.length)
    return this.finishToken(a.eof);
  if (e.override)
    return e.override(this);
  this.readToken(this.fullCharCodeAtPos());
};
S.readToken = function(e) {
  return W(e, this.options.ecmaVersion >= 6) || e === 92 ? this.readWord() : this.getTokenFromCode(e);
};
S.fullCharCodeAtPos = function() {
  var e = this.input.charCodeAt(this.pos);
  if (e <= 55295 || e >= 56320)
    return e;
  var t = this.input.charCodeAt(this.pos + 1);
  return t <= 56319 || t >= 57344 ? e : (e << 10) + t - 56613888;
};
S.skipBlockComment = function() {
  var e = this.options.onComment && this.curPosition(), t = this.pos, i = this.input.indexOf("*/", this.pos += 2);
  if (i === -1 && this.raise(this.pos - 2, "Unterminated comment"), this.pos = i + 2, this.options.locations)
    for (var r = void 0, s = t; (r = Ct(this.input, s, this.pos)) > -1; )
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
S.skipLineComment = function(e) {
  for (var t = this.pos, i = this.options.onComment && this.curPosition(), r = this.input.charCodeAt(this.pos += e); this.pos < this.input.length && !ue(r); )
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
S.skipSpace = function() {
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
          if (e > 8 && e < 14 || e >= 5760 && kt.test(String.fromCharCode(e)))
            ++this.pos;
          else
            break e;
      }
    }
};
S.finishToken = function(e, t) {
  this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
  var i = this.type;
  this.type = e, this.value = t, this.updateContext(i);
};
S.readToken_dot = function() {
  var e = this.input.charCodeAt(this.pos + 1);
  if (e >= 48 && e <= 57)
    return this.readNumber(!0);
  var t = this.input.charCodeAt(this.pos + 2);
  return this.options.ecmaVersion >= 6 && e === 46 && t === 46 ? (this.pos += 3, this.finishToken(a.ellipsis)) : (++this.pos, this.finishToken(a.dot));
};
S.readToken_slash = function() {
  var e = this.input.charCodeAt(this.pos + 1);
  return this.exprAllowed ? (++this.pos, this.readRegexp()) : e === 61 ? this.finishOp(a.assign, 2) : this.finishOp(a.slash, 1);
};
S.readToken_mult_modulo_exp = function(e) {
  var t = this.input.charCodeAt(this.pos + 1), i = 1, r = e === 42 ? a.star : a.modulo;
  return this.options.ecmaVersion >= 7 && e === 42 && t === 42 && (++i, r = a.starstar, t = this.input.charCodeAt(this.pos + 2)), t === 61 ? this.finishOp(a.assign, i + 1) : this.finishOp(r, i);
};
S.readToken_pipe_amp = function(e) {
  var t = this.input.charCodeAt(this.pos + 1);
  if (t === e) {
    if (this.options.ecmaVersion >= 12) {
      var i = this.input.charCodeAt(this.pos + 2);
      if (i === 61)
        return this.finishOp(a.assign, 3);
    }
    return this.finishOp(e === 124 ? a.logicalOR : a.logicalAND, 2);
  }
  return t === 61 ? this.finishOp(a.assign, 2) : this.finishOp(e === 124 ? a.bitwiseOR : a.bitwiseAND, 1);
};
S.readToken_caret = function() {
  var e = this.input.charCodeAt(this.pos + 1);
  return e === 61 ? this.finishOp(a.assign, 2) : this.finishOp(a.bitwiseXOR, 1);
};
S.readToken_plus_min = function(e) {
  var t = this.input.charCodeAt(this.pos + 1);
  return t === e ? t === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 && (this.lastTokEnd === 0 || D.test(this.input.slice(this.lastTokEnd, this.pos))) ? (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : this.finishOp(a.incDec, 2) : t === 61 ? this.finishOp(a.assign, 2) : this.finishOp(a.plusMin, 1);
};
S.readToken_lt_gt = function(e) {
  var t = this.input.charCodeAt(this.pos + 1), i = 1;
  return t === e ? (i = e === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2, this.input.charCodeAt(this.pos + i) === 61 ? this.finishOp(a.assign, i + 1) : this.finishOp(a.bitShift, i)) : t === 33 && e === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 && this.input.charCodeAt(this.pos + 3) === 45 ? (this.skipLineComment(4), this.skipSpace(), this.nextToken()) : (t === 61 && (i = 2), this.finishOp(a.relational, i));
};
S.readToken_eq_excl = function(e) {
  var t = this.input.charCodeAt(this.pos + 1);
  return t === 61 ? this.finishOp(a.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2) : e === 61 && t === 62 && this.options.ecmaVersion >= 6 ? (this.pos += 2, this.finishToken(a.arrow)) : this.finishOp(e === 61 ? a.eq : a.prefix, 1);
};
S.readToken_question = function() {
  var e = this.options.ecmaVersion;
  if (e >= 11) {
    var t = this.input.charCodeAt(this.pos + 1);
    if (t === 46) {
      var i = this.input.charCodeAt(this.pos + 2);
      if (i < 48 || i > 57)
        return this.finishOp(a.questionDot, 2);
    }
    if (t === 63) {
      if (e >= 12) {
        var r = this.input.charCodeAt(this.pos + 2);
        if (r === 61)
          return this.finishOp(a.assign, 3);
      }
      return this.finishOp(a.coalesce, 2);
    }
  }
  return this.finishOp(a.question, 1);
};
S.readToken_numberSign = function() {
  var e = this.options.ecmaVersion, t = 35;
  if (e >= 13 && (++this.pos, t = this.fullCharCodeAtPos(), W(t, !0) || t === 92))
    return this.finishToken(a.privateId, this.readWord1());
  this.raise(this.pos, "Unexpected character '" + $(t) + "'");
};
S.getTokenFromCode = function(e) {
  switch (e) {
    case 46:
      return this.readToken_dot();
    case 40:
      return ++this.pos, this.finishToken(a.parenL);
    case 41:
      return ++this.pos, this.finishToken(a.parenR);
    case 59:
      return ++this.pos, this.finishToken(a.semi);
    case 44:
      return ++this.pos, this.finishToken(a.comma);
    case 91:
      return ++this.pos, this.finishToken(a.bracketL);
    case 93:
      return ++this.pos, this.finishToken(a.bracketR);
    case 123:
      return ++this.pos, this.finishToken(a.braceL);
    case 125:
      return ++this.pos, this.finishToken(a.braceR);
    case 58:
      return ++this.pos, this.finishToken(a.colon);
    case 96:
      if (this.options.ecmaVersion < 6)
        break;
      return ++this.pos, this.finishToken(a.backQuote);
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
      return this.finishOp(a.prefix, 1);
    case 35:
      return this.readToken_numberSign();
  }
  this.raise(this.pos, "Unexpected character '" + $(e) + "'");
};
S.finishOp = function(e, t) {
  var i = this.input.slice(this.pos, this.pos + t);
  return this.pos += t, this.finishToken(e, i);
};
S.readRegexp = function() {
  for (var e, t, i = this.pos; ; ) {
    this.pos >= this.input.length && this.raise(i, "Unterminated regular expression");
    var r = this.input.charAt(this.pos);
    if (D.test(r) && this.raise(i, "Unterminated regular expression"), e)
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
  var n = this.pos, o = this.readWord1();
  this.containsEsc && this.unexpected(n);
  var u = this.regexpState || (this.regexpState = new q(this));
  u.reset(i, s, o), this.validateRegExpFlags(u), this.validateRegExpPattern(u);
  var h = null;
  try {
    h = new RegExp(s, o);
  } catch {
  }
  return this.finishToken(a.regexp, { pattern: s, flags: o, value: h });
};
S.readInt = function(e, t, i) {
  for (var r = this.options.ecmaVersion >= 12 && t === void 0, s = i && this.input.charCodeAt(this.pos) === 48, n = this.pos, o = 0, u = 0, h = 0, l = t ?? 1 / 0; h < l; ++h, ++this.pos) {
    var c = this.input.charCodeAt(this.pos), f = void 0;
    if (r && c === 95) {
      s && this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"), u === 95 && this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"), h === 0 && this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"), u = c;
      continue;
    }
    if (c >= 97 ? f = c - 97 + 10 : c >= 65 ? f = c - 65 + 10 : c >= 48 && c <= 57 ? f = c - 48 : f = 1 / 0, f >= e)
      break;
    u = c, o = o * e + f;
  }
  return r && u === 95 && this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"), this.pos === n || t != null && this.pos - n !== t ? null : o;
};
function lr(e, t) {
  return t ? parseInt(e, 8) : parseFloat(e.replace(/_/g, ""));
}
function ii(e) {
  return typeof BigInt != "function" ? null : BigInt(e.replace(/_/g, ""));
}
S.readRadixNumber = function(e) {
  var t = this.pos;
  this.pos += 2;
  var i = this.readInt(e);
  return i == null && this.raise(this.start + 2, "Expected number in radix " + e), this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110 ? (i = ii(this.input.slice(t, this.pos)), ++this.pos) : W(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(a.num, i);
};
S.readNumber = function(e) {
  var t = this.pos;
  !e && this.readInt(10, void 0, !0) === null && this.raise(t, "Invalid number");
  var i = this.pos - t >= 2 && this.input.charCodeAt(t) === 48;
  i && this.strict && this.raise(t, "Invalid number");
  var r = this.input.charCodeAt(this.pos);
  if (!i && !e && this.options.ecmaVersion >= 11 && r === 110) {
    var s = ii(this.input.slice(t, this.pos));
    return ++this.pos, W(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(a.num, s);
  }
  i && /[89]/.test(this.input.slice(t, this.pos)) && (i = !1), r === 46 && !i && (++this.pos, this.readInt(10), r = this.input.charCodeAt(this.pos)), (r === 69 || r === 101) && !i && (r = this.input.charCodeAt(++this.pos), (r === 43 || r === 45) && ++this.pos, this.readInt(10) === null && this.raise(t, "Invalid number")), W(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
  var n = lr(this.input.slice(t, this.pos), i);
  return this.finishToken(a.num, n);
};
S.readCodePoint = function() {
  var e = this.input.charCodeAt(this.pos), t;
  if (e === 123) {
    this.options.ecmaVersion < 6 && this.unexpected();
    var i = ++this.pos;
    t = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos), ++this.pos, t > 1114111 && this.invalidStringToken(i, "Code point out of bounds");
  } else
    t = this.readHexChar(4);
  return t;
};
S.readString = function(e) {
  for (var t = "", i = ++this.pos; ; ) {
    this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
    var r = this.input.charCodeAt(this.pos);
    if (r === e)
      break;
    r === 92 ? (t += this.input.slice(i, this.pos), t += this.readEscapedChar(!1), i = this.pos) : r === 8232 || r === 8233 ? (this.options.ecmaVersion < 10 && this.raise(this.start, "Unterminated string constant"), ++this.pos, this.options.locations && (this.curLine++, this.lineStart = this.pos)) : (ue(r) && this.raise(this.start, "Unterminated string constant"), ++this.pos);
  }
  return t += this.input.slice(i, this.pos++), this.finishToken(a.string, t);
};
var ri = {};
S.tryReadTemplateToken = function() {
  this.inTemplateElement = !0;
  try {
    this.readTmplToken();
  } catch (e) {
    if (e === ri)
      this.readInvalidTemplateToken();
    else
      throw e;
  }
  this.inTemplateElement = !1;
};
S.invalidStringToken = function(e, t) {
  if (this.inTemplateElement && this.options.ecmaVersion >= 9)
    throw ri;
  this.raise(e, t);
};
S.readTmplToken = function() {
  for (var e = "", t = this.pos; ; ) {
    this.pos >= this.input.length && this.raise(this.start, "Unterminated template");
    var i = this.input.charCodeAt(this.pos);
    if (i === 96 || i === 36 && this.input.charCodeAt(this.pos + 1) === 123)
      return this.pos === this.start && (this.type === a.template || this.type === a.invalidTemplate) ? i === 36 ? (this.pos += 2, this.finishToken(a.dollarBraceL)) : (++this.pos, this.finishToken(a.backQuote)) : (e += this.input.slice(t, this.pos), this.finishToken(a.template, e));
    if (i === 92)
      e += this.input.slice(t, this.pos), e += this.readEscapedChar(!0), t = this.pos;
    else if (ue(i)) {
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
S.readInvalidTemplateToken = function() {
  for (; this.pos < this.input.length; this.pos++)
    switch (this.input[this.pos]) {
      case "\\":
        ++this.pos;
        break;
      case "$":
        if (this.input[this.pos + 1] !== "{")
          break;
      case "`":
        return this.finishToken(a.invalidTemplate, this.input.slice(this.start, this.pos));
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
S.readEscapedChar = function(e) {
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
      return $(this.readCodePoint());
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
      return ue(t) ? (this.options.locations && (this.lineStart = this.pos, ++this.curLine), "") : String.fromCharCode(t);
  }
};
S.readHexChar = function(e) {
  var t = this.pos, i = this.readInt(16, e);
  return i === null && this.invalidStringToken(t, "Bad character escape sequence"), i;
};
S.readWord1 = function() {
  this.containsEsc = !1;
  for (var e = "", t = !0, i = this.pos, r = this.options.ecmaVersion >= 6; this.pos < this.input.length; ) {
    var s = this.fullCharCodeAtPos();
    if (ae(s, r))
      this.pos += s <= 65535 ? 1 : 2;
    else if (s === 92) {
      this.containsEsc = !0, e += this.input.slice(i, this.pos);
      var n = this.pos;
      this.input.charCodeAt(++this.pos) !== 117 && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"), ++this.pos;
      var o = this.readCodePoint();
      (t ? W : ae)(o, r) || this.invalidStringToken(n, "Invalid Unicode escape"), e += $(o), i = this.pos;
    } else
      break;
    t = !1;
  }
  return e + this.input.slice(i, this.pos);
};
S.readWord = function() {
  var e = this.readWord1(), t = a.name;
  return this.keywords.test(e) && (t = $e[e]), this.finishToken(t, e);
};
var fr = "8.12.1";
P.acorn = {
  Parser: P,
  version: fr,
  defaultOptions: je,
  Position: me,
  SourceLocation: Pe,
  getLineInfo: It,
  Node: Re,
  TokenType: k,
  tokTypes: a,
  keywordTypes: $e,
  TokContext: F,
  tokContexts: I,
  isIdentifierChar: ae,
  isIdentifierStart: W,
  Token: st,
  isNewLine: ue,
  lineBreak: D,
  lineBreakG: Bi,
  nonASCIIwhitespace: kt
};
function si(e, t) {
  return P.parse(e, t);
}
let de = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, i) => (i &= 63, i < 36 ? t += i.toString(36) : i < 62 ? t += (i - 26).toString(36).toUpperCase() : i > 62 ? t += "-" : t += "_", t), "");
function pr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ni = { exports: {} };
(function(e) {
  var t = Object.prototype.hasOwnProperty, i = "~";
  function r() {
  }
  Object.create && (r.prototype = /* @__PURE__ */ Object.create(null), new r().__proto__ || (i = !1));
  function s(h, l, c) {
    this.fn = h, this.context = l, this.once = c || !1;
  }
  function n(h, l, c, f, p) {
    if (typeof c != "function")
      throw new TypeError("The listener must be a function");
    var m = new s(c, f || h, p), v = i ? i + l : l;
    return h._events[v] ? h._events[v].fn ? h._events[v] = [h._events[v], m] : h._events[v].push(m) : (h._events[v] = m, h._eventsCount++), h;
  }
  function o(h, l) {
    --h._eventsCount === 0 ? h._events = new r() : delete h._events[l];
  }
  function u() {
    this._events = new r(), this._eventsCount = 0;
  }
  u.prototype.eventNames = function() {
    var l = [], c, f;
    if (this._eventsCount === 0)
      return l;
    for (f in c = this._events)
      t.call(c, f) && l.push(i ? f.slice(1) : f);
    return Object.getOwnPropertySymbols ? l.concat(Object.getOwnPropertySymbols(c)) : l;
  }, u.prototype.listeners = function(l) {
    var c = i ? i + l : l, f = this._events[c];
    if (!f)
      return [];
    if (f.fn)
      return [f.fn];
    for (var p = 0, m = f.length, v = new Array(m); p < m; p++)
      v[p] = f[p].fn;
    return v;
  }, u.prototype.listenerCount = function(l) {
    var c = i ? i + l : l, f = this._events[c];
    return f ? f.fn ? 1 : f.length : 0;
  }, u.prototype.emit = function(l, c, f, p, m, v) {
    var E = i ? i + l : l;
    if (!this._events[E])
      return !1;
    var g = this._events[E], w = arguments.length, j, A;
    if (g.fn) {
      switch (g.once && this.removeListener(l, g.fn, void 0, !0), w) {
        case 1:
          return g.fn.call(g.context), !0;
        case 2:
          return g.fn.call(g.context, c), !0;
        case 3:
          return g.fn.call(g.context, c, f), !0;
        case 4:
          return g.fn.call(g.context, c, f, p), !0;
        case 5:
          return g.fn.call(g.context, c, f, p, m), !0;
        case 6:
          return g.fn.call(g.context, c, f, p, m, v), !0;
      }
      for (A = 1, j = new Array(w - 1); A < w; A++)
        j[A - 1] = arguments[A];
      g.fn.apply(g.context, j);
    } else {
      var Z = g.length, le;
      for (A = 0; A < Z; A++)
        switch (g[A].once && this.removeListener(l, g[A].fn, void 0, !0), w) {
          case 1:
            g[A].fn.call(g[A].context);
            break;
          case 2:
            g[A].fn.call(g[A].context, c);
            break;
          case 3:
            g[A].fn.call(g[A].context, c, f);
            break;
          case 4:
            g[A].fn.call(g[A].context, c, f, p);
            break;
          default:
            if (!j)
              for (le = 1, j = new Array(w - 1); le < w; le++)
                j[le - 1] = arguments[le];
            g[A].fn.apply(g[A].context, j);
        }
    }
    return !0;
  }, u.prototype.on = function(l, c, f) {
    return n(this, l, c, f, !1);
  }, u.prototype.once = function(l, c, f) {
    return n(this, l, c, f, !0);
  }, u.prototype.removeListener = function(l, c, f, p) {
    var m = i ? i + l : l;
    if (!this._events[m])
      return this;
    if (!c)
      return o(this, m), this;
    var v = this._events[m];
    if (v.fn)
      v.fn === c && (!p || v.once) && (!f || v.context === f) && o(this, m);
    else {
      for (var E = 0, g = [], w = v.length; E < w; E++)
        (v[E].fn !== c || p && !v[E].once || f && v[E].context !== f) && g.push(v[E]);
      g.length ? this._events[m] = g.length === 1 ? g[0] : g : o(this, m);
    }
    return this;
  }, u.prototype.removeAllListeners = function(l) {
    var c;
    return l ? (c = i ? i + l : l, this._events[c] && o(this, c)) : (this._events = new r(), this._eventsCount = 0), this;
  }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = i, u.EventEmitter = u, e.exports = u;
})(ni);
var dr = ni.exports;
const ai = /* @__PURE__ */ pr(dr);
var mr = Object.create, nt = Object.defineProperty, vr = Object.getOwnPropertyDescriptor, oi = Object.getOwnPropertyNames, xr = Object.getPrototypeOf, gr = Object.prototype.hasOwnProperty, d = (e, t) => nt(e, "name", { value: t, configurable: !0 }), yr = (e, t) => function() {
  return t || (0, e[oi(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, br = (e, t, i, r) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let s of oi(t))
      !gr.call(e, s) && s !== i && nt(e, s, { get: () => t[s], enumerable: !(r = vr(t, s)) || r.enumerable });
  return e;
}, _r = (e, t, i) => (i = e != null ? mr(xr(e)) : {}, br(
  t || !e || !e.__esModule ? nt(i, "default", { value: e, enumerable: !0 }) : i,
  e
)), wr = yr({
  "../../node_modules/.pnpm/path-browserify@1.0.1/node_modules/path-browserify/index.js"(e, t) {
    function i(o) {
      if (typeof o != "string")
        throw new TypeError("Path must be a string. Received " + JSON.stringify(o));
    }
    d(i, "assertPath");
    function r(o, u) {
      for (var h = "", l = 0, c = -1, f = 0, p, m = 0; m <= o.length; ++m) {
        if (m < o.length)
          p = o.charCodeAt(m);
        else {
          if (p === 47)
            break;
          p = 47;
        }
        if (p === 47) {
          if (!(c === m - 1 || f === 1))
            if (c !== m - 1 && f === 2) {
              if (h.length < 2 || l !== 2 || h.charCodeAt(h.length - 1) !== 46 || h.charCodeAt(h.length - 2) !== 46) {
                if (h.length > 2) {
                  var v = h.lastIndexOf("/");
                  if (v !== h.length - 1) {
                    v === -1 ? (h = "", l = 0) : (h = h.slice(0, v), l = h.length - 1 - h.lastIndexOf("/")), c = m, f = 0;
                    continue;
                  }
                } else if (h.length === 2 || h.length === 1) {
                  h = "", l = 0, c = m, f = 0;
                  continue;
                }
              }
              u && (h.length > 0 ? h += "/.." : h = "..", l = 2);
            } else
              h.length > 0 ? h += "/" + o.slice(c + 1, m) : h = o.slice(c + 1, m), l = m - c - 1;
          c = m, f = 0;
        } else
          p === 46 && f !== -1 ? ++f : f = -1;
      }
      return h;
    }
    d(r, "normalizeStringPosix");
    function s(o, u) {
      var h = u.dir || u.root, l = u.base || (u.name || "") + (u.ext || "");
      return h ? h === u.root ? h + l : h + o + l : l;
    }
    d(s, "_format");
    var n = {
      resolve: /* @__PURE__ */ d(function() {
        for (var u = "", h = !1, l, c = arguments.length - 1; c >= -1 && !h; c--) {
          var f;
          c >= 0 ? f = arguments[c] : (l === void 0 && (l = process.cwd()), f = l), i(f), f.length !== 0 && (u = f + "/" + u, h = f.charCodeAt(0) === 47);
        }
        return u = r(u, !h), h ? u.length > 0 ? "/" + u : "/" : u.length > 0 ? u : ".";
      }, "resolve"),
      normalize: /* @__PURE__ */ d(function(u) {
        if (i(u), u.length === 0)
          return ".";
        var h = u.charCodeAt(0) === 47, l = u.charCodeAt(u.length - 1) === 47;
        return u = r(u, !h), u.length === 0 && !h && (u = "."), u.length > 0 && l && (u += "/"), h ? "/" + u : u;
      }, "normalize"),
      isAbsolute: /* @__PURE__ */ d(function(u) {
        return i(u), u.length > 0 && u.charCodeAt(0) === 47;
      }, "isAbsolute"),
      join: /* @__PURE__ */ d(function() {
        if (arguments.length === 0)
          return ".";
        for (var u, h = 0; h < arguments.length; ++h) {
          var l = arguments[h];
          i(l), l.length > 0 && (u === void 0 ? u = l : u += "/" + l);
        }
        return u === void 0 ? "." : n.normalize(u);
      }, "join"),
      relative: /* @__PURE__ */ d(function(u, h) {
        if (i(u), i(h), u === h || (u = n.resolve(u), h = n.resolve(h), u === h))
          return "";
        for (var l = 1; l < u.length && u.charCodeAt(l) === 47; ++l)
          ;
        for (var c = u.length, f = c - l, p = 1; p < h.length && h.charCodeAt(p) === 47; ++p)
          ;
        for (var m = h.length, v = m - p, E = f < v ? f : v, g = -1, w = 0; w <= E; ++w) {
          if (w === E) {
            if (v > E) {
              if (h.charCodeAt(p + w) === 47)
                return h.slice(p + w + 1);
              if (w === 0)
                return h.slice(p + w);
            } else
              f > E && (u.charCodeAt(l + w) === 47 ? g = w : w === 0 && (g = 0));
            break;
          }
          var j = u.charCodeAt(l + w), A = h.charCodeAt(p + w);
          if (j !== A)
            break;
          j === 47 && (g = w);
        }
        var Z = "";
        for (w = l + g + 1; w <= c; ++w)
          (w === c || u.charCodeAt(w) === 47) && (Z.length === 0 ? Z += ".." : Z += "/..");
        return Z.length > 0 ? Z + h.slice(p + g) : (p += g, h.charCodeAt(p) === 47 && ++p, h.slice(p));
      }, "relative"),
      _makeLong: /* @__PURE__ */ d(function(u) {
        return u;
      }, "_makeLong"),
      dirname: /* @__PURE__ */ d(function(u) {
        if (i(u), u.length === 0)
          return ".";
        for (var h = u.charCodeAt(0), l = h === 47, c = -1, f = !0, p = u.length - 1; p >= 1; --p)
          if (h = u.charCodeAt(p), h === 47) {
            if (!f) {
              c = p;
              break;
            }
          } else
            f = !1;
        return c === -1 ? l ? "/" : "." : l && c === 1 ? "//" : u.slice(0, c);
      }, "dirname"),
      basename: /* @__PURE__ */ d(function(u, h) {
        if (h !== void 0 && typeof h != "string")
          throw new TypeError('"ext" argument must be a string');
        i(u);
        var l = 0, c = -1, f = !0, p;
        if (h !== void 0 && h.length > 0 && h.length <= u.length) {
          if (h.length === u.length && h === u)
            return "";
          var m = h.length - 1, v = -1;
          for (p = u.length - 1; p >= 0; --p) {
            var E = u.charCodeAt(p);
            if (E === 47) {
              if (!f) {
                l = p + 1;
                break;
              }
            } else
              v === -1 && (f = !1, v = p + 1), m >= 0 && (E === h.charCodeAt(m) ? --m === -1 && (c = p) : (m = -1, c = v));
          }
          return l === c ? c = v : c === -1 && (c = u.length), u.slice(l, c);
        } else {
          for (p = u.length - 1; p >= 0; --p)
            if (u.charCodeAt(p) === 47) {
              if (!f) {
                l = p + 1;
                break;
              }
            } else
              c === -1 && (f = !1, c = p + 1);
          return c === -1 ? "" : u.slice(l, c);
        }
      }, "basename"),
      extname: /* @__PURE__ */ d(function(u) {
        i(u);
        for (var h = -1, l = 0, c = -1, f = !0, p = 0, m = u.length - 1; m >= 0; --m) {
          var v = u.charCodeAt(m);
          if (v === 47) {
            if (!f) {
              l = m + 1;
              break;
            }
            continue;
          }
          c === -1 && (f = !1, c = m + 1), v === 46 ? h === -1 ? h = m : p !== 1 && (p = 1) : h !== -1 && (p = -1);
        }
        return h === -1 || c === -1 || p === 0 || p === 1 && h === c - 1 && h === l + 1 ? "" : u.slice(h, c);
      }, "extname"),
      format: /* @__PURE__ */ d(function(u) {
        if (u === null || typeof u != "object")
          throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof u);
        return s("/", u);
      }, "format"),
      parse: /* @__PURE__ */ d(function(u) {
        i(u);
        var h = {
          root: "",
          dir: "",
          base: "",
          ext: "",
          name: ""
        };
        if (u.length === 0)
          return h;
        var l = u.charCodeAt(0), c = l === 47, f;
        c ? (h.root = "/", f = 1) : f = 0;
        for (var p = -1, m = 0, v = -1, E = !0, g = u.length - 1, w = 0; g >= f; --g) {
          if (l = u.charCodeAt(g), l === 47) {
            if (!E) {
              m = g + 1;
              break;
            }
            continue;
          }
          v === -1 && (E = !1, v = g + 1), l === 46 ? p === -1 ? p = g : w !== 1 && (w = 1) : p !== -1 && (w = -1);
        }
        return p === -1 || v === -1 || w === 0 || w === 1 && p === v - 1 && p === m + 1 ? v !== -1 && (m === 0 && c ? h.base = h.name = u.slice(1, v) : h.base = h.name = u.slice(m, v)) : (m === 0 && c ? (h.name = u.slice(1, p), h.base = u.slice(1, v)) : (h.name = u.slice(m, p), h.base = u.slice(m, v)), h.ext = u.slice(p, v)), m > 0 ? h.dir = u.slice(0, m - 1) : c && (h.dir = "/"), h;
      }, "parse"),
      sep: "/",
      delimiter: ":",
      win32: null,
      posix: null
    };
    n.posix = n, t.exports = n;
  }
}), te = /\{\{([^}]+)\}\}/g;
function ui(e) {
  const t = si(e, {
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
  return d(r, "visit"), r(t), Array.from(i);
}
d(ui, "extractVariables");
function Sr(e, t, i) {
  const r = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set(), n = {}, o = [];
  function u(h) {
    for (const l in h) {
      if (typeof h[l] == "object") {
        u(h[l]);
        continue;
      }
      typeof h[l] == "string" && te.test(h[l]) && h[l].match(te).map((c) => c.slice(2, -2)).forEach((c) => {
        ui(c).forEach((p) => s.add(p));
      });
    }
  }
  d(u, "parseAttrs"), e.nodes.forEach((h) => {
    h.attrs.key && r.add(h.attrs.key), u(h.attrs);
  });
  for (const h in t) {
    if (h.endsWith(".css")) {
      o.push(h);
      continue;
    }
    n[h] || (n[h] = []);
    for (const l in t[h]) {
      const c = t[h][l];
      typeof c == "object" && c.alioth && (c.alioth === "setRenderFn" && c.data.mode === "runtime" && n[h].push(l), c.alioth === "widget" && r.has(c.data.key) && (!c.data.mode || c.data.mode === "runtime") && n[h].push(l), c.alioth === "state" && s.has(c.data.key) && n[h].push(l));
    }
  }
  return Object.entries(n).reduce((h, [l, c]) => c.length === 0 ? h : `${h}export {${c.join(",")}} from '.${l.replace(i, "")}'
`, "") + o.map((h) => `import '${h.replace(i, "")}'`).join(`
`);
}
d(Sr, "createEntryCode");
function Cr(e, t = window) {
  let i;
  const r = /* @__PURE__ */ d((n) => {
    var o;
    (o = e.move) == null || o.call(e, n);
  }, "moveEvent"), s = /* @__PURE__ */ d((n) => {
    var o;
    (o = e.up) == null || o.call(e, n), i.removeEventListener("mousemove", r), i.removeEventListener("mouseup", s);
  }, "upEvent");
  typeof t == "string" ? i = document.querySelector(t) : i = t, i.addEventListener("mousemove", r), i.addEventListener("mouseup", s);
}
d(Cr, "draggable");
function kr(e) {
  return new URLSearchParams(location.search).get(e);
}
d(kr, "getQuery");
async function Er(e) {
  return (await fetch(e)).json();
}
d(Er, "loadJSON");
function Ir(e) {
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
          for (const o in n) {
            const u = n[o];
            typeof u == "object" && u.alioth && ((s = window[`$alioth_${u.alioth}`]) == null || s.call(window, u.data));
          }
          i(n);
        } catch (n) {
          r(n);
        }
      });
  }));
}
d(Ir, "loadPresets");
function hi(e) {
  if (e.endsWith(".css")) {
    const t = document.createElement("link");
    return t.href = e, t.rel = "stylesheet", t.type = "text/css", document.head.appendChild(t), new Promise((i, r) => {
      t.onload = i, t.onerror = r;
    });
  } else
    return import(e);
}
d(hi, "loadStyleOrScript");
function at(e, t, i = []) {
  const r = {
    get(s, n, o) {
      const u = [
        ...i,
        n
      ], h = Reflect.get(s, n, o);
      return typeof h == "object" && h !== null ? at(h, t, u) : t.get ? t.get(s, n, o, u) : h;
    },
    set(s, n, o, u) {
      const h = [
        ...i,
        n
      ];
      return t.set ? t.set(s, n, o, u, h) : Reflect.set(s, n, o, u);
    }
  };
  return new Proxy(e, r);
}
d(at, "createDeepProxy");
function ci() {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  async function i(s) {
    if (t.has(s))
      return;
    t.set(s, null);
    const o = await (await fetch(new URL("/alioth", s).href)).json(), { project: u, entry: h } = o;
    if (e.has(u))
      return;
    const l = document.createElement("script");
    l.src = new URL("/@vite/client", s).href, l.type = "module", document.body.appendChild(l);
    for (const c in h)
      h[c] = new URL(h[c], s).href, t.set(h[c], u);
    e.set(u, h), t.set(s, u);
  }
  d(i, "connect");
  async function r(s, n, o) {
    const u = e.get(s);
    if (!u || !(n in u))
      return;
    const h = u[n], l = await import(h);
    return {
      module: l,
      data: o && l[o],
      url: h
    };
  }
  return d(r, "dynamicImport"), {
    connect: i,
    projectMap: e,
    dynamicImport: r,
    urlMap: t
  };
}
d(ci, "createViteConnector");
function Le(e, t) {
  if (e === t)
    return !0;
  if (e == null || t == null || typeof e != "object" || typeof t != "object")
    return !1;
  const i = Object.keys(e), r = Object.keys(t);
  if (i.length !== r.length)
    return !1;
  for (const s of i)
    if (!r.includes(s) || !Le(e[s], t[s]))
      return !1;
  return !0;
}
d(Le, "isEqual");
function z(e) {
  if (e === null || typeof e != "object")
    return e;
  if (e instanceof Date)
    return new Date(e.getTime());
  if (Array.isArray(e)) {
    const i = [];
    for (const r of e)
      i.push(z(r));
    return i;
  }
  const t = {};
  for (const i in e)
    e.hasOwnProperty(i) && (t[i] = z(e[i]));
  return t;
}
d(z, "cloneDeep");
function Ar(e, t, i) {
  typeof t == "string" && (t = t.split("."));
  for (let r = 0; r < t.length; r++) {
    if (e == null)
      return i;
    e = e[t[r]];
  }
  return e === void 0 ? i : e;
}
d(Ar, "get");
function Pr(e, t, i) {
  typeof t == "string" && (t = t.split("."));
  let r = e;
  for (let s = 0; s < t.length; s++) {
    const n = t[s];
    s === t.length - 1 ? r[n] = i : (r[n] == null && (r[n] = {}), r = r[n]);
  }
  return e;
}
d(Pr, "set");
var ot = class {
  constructor(e = {}) {
    b(this, "data");
    this.data = e;
  }
  parse(e) {
    return at(e, {
      get: (t, i, r) => {
        if (typeof t[i] == "string" && te.test(t[i])) {
          const [s] = t[i].match(te);
          return s === t[i] ? new Function(...this.keys, `return ${s.slice(2, -2)}`)(...this.values) : t[i].replace(te, (n, o) => new Function(...this.keys, `return ${o}`)(...this.values));
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
    return new ot({
      ...this.data,
      ...e
    });
  }
};
d(ot, "Scope");
var li = class {
  constructor(e) {
    b(this, "name");
    b(this, "record");
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
d(li, "Store");
var ee = class {
  constructor(e = {}, t = de()) {
    b(this, "attrs");
    b(this, "id");
    b(this, "parentId");
    b(this, "_i");
    b(this, "doc");
    this.attrs = e, this.id = t;
  }
  get parent() {
    return this.doc.findById(this.parentId);
  }
  set parent(e) {
    this.parentId = e.id;
  }
  get sibling() {
    return this.doc.findSiblings(this);
  }
  get children() {
    return this.doc.findChildren(this);
  }
  get descendants() {
    return this.doc.findDescendants(this);
  }
  get layer() {
    return this.id === "root" ? 0 : this.parent.layer + 1;
  }
  get index() {
    return this.doc.index(this);
  }
  get scope() {
    return this.doc.getScope(this);
  }
  toJSON() {
    return {
      id: this.id,
      attrs: this.attrs,
      _i: this._i,
      parentId: this.parentId
    };
  }
};
d(ee, "VirtualNode");
var Te = class extends ai {
  constructor() {
    super();
    b(this, "nodeSet", /* @__PURE__ */ new Set());
    b(this, "root", new ee({}, "root"));
    b(this, "currentEventId");
    b(this, "seed", 0);
    b(this, "_scopeMap", /* @__PURE__ */ new WeakMap());
  }
  createNode(t) {
    const i = new ee(t);
    return i.doc = this, i;
  }
  createEventId() {
    return this.currentEventId || de();
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
    this.emit("load", t), t.forEach(({ id: i, attrs: r, _i: s, parentId: n }) => {
      const o = new ee(r, i);
      o._i = s, o.parentId = n, o.doc = this, this.nodeSet.add(o);
    });
  }
  store() {
    return this.nodes.map((t) => t.toJSON());
  }
  flat(t) {
    const i = this, r = /* @__PURE__ */ d((s, n = []) => (n.push(s), i.findChildren(s).map((o) => r(o, n)), n), "traverse");
    return r(t);
  }
  findById(t) {
    return t === "root" ? this.root : this.nodes.find((i) => i.id === t);
  }
  findChildren(t) {
    return this.nodes.filter((i) => i.parentId === t.id).sort((i, r) => i._i - r._i);
  }
  findDescendants(t) {
    const i = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ d((s) => {
      this.findChildren(s).forEach((n) => {
        i.add(n), r(n);
      });
    }, "traverse");
    return r(t), [
      ...i
    ];
  }
  index(t) {
    return this.findChildren(t.parent).findIndex((i) => i.id === t.id);
  }
  insert(t, i, r = 0) {
    var l, c;
    const s = this.findChildren(i), n = ((l = s[r - 1]) == null ? void 0 : l._i) || 0, o = ((c = s[r]) == null ? void 0 : c._i) || 1, { parentId: u, _i: h } = t;
    t.parentId = i.id, t._i = (o + n) / 2 + this.seed, this.findById(t.id) ? this.emit("swap", {
      node: t,
      before: {
        parentId: u,
        _i: h
      }
    }) : (this.nodeSet.add(t), this.emit("insert", {
      node: t,
      index: t._i
    }));
  }
  remove(t) {
    this.emit("remove", {
      node: t
    }), this.nodeSet.delete(t), this.removeChilds(t);
  }
  removeChilds(t) {
    this.nodes.forEach((i) => {
      i.parentId === t.id && (this.nodeSet.delete(i), this.removeChilds(i));
    });
  }
  set(t, i, r) {
    this.emit("set", {
      node: t,
      key: i,
      value: r,
      oldValue: t.attrs[i]
    }), this._set(t, i, r);
  }
  _set(t, i, r) {
    t.attrs[i] = r;
  }
  findSiblings(t) {
    return this.findChildren(t.parent).filter((i) => i !== t);
  }
  cloneNode(t) {
    return new ee(z(t.attrs));
  }
  setScope(t, i) {
    this._scopeMap.set(t, i);
  }
  getScope(t) {
    if (this.findById(t.id))
      return this._scopeMap.get(t);
  }
};
d(Te, "VirtualDocument");
var fi = class extends ai {
  constructor(t, i = {}) {
    super();
    b(this, "doc");
    b(this, "options");
    b(this, "undoStack");
    b(this, "redoStack");
    b(this, "currentEvent");
    b(this, "currentEventId");
    b(this, "timer");
    this.doc = t, this.undoStack = [], this.redoStack = [], this.options = {
      length: 300,
      timeout: 300,
      ...i
    }, t.on("insert", ({ node: r }) => {
      this.redoStack = [], this.initEvent({
        records: t.flat(r).map(({ attrs: s, id: n, parentId: o, _i: u }) => ({
          attrs: s,
          parentId: o,
          _i: u,
          nodeId: n
        })),
        type: "insert"
      });
    }), t.on("swap", ({ node: r, before: s }) => {
      this.redoStack = [], this.initEvent({
        type: "swap",
        before: s,
        after: {
          parentId: r.parentId,
          _i: r._i
        },
        nodeId: r.id
      });
    }), t.on("load", (r) => {
      this.redoStack = [], this.initEvent({
        data: r,
        type: "load"
      });
    }), t.on("remove", ({ node: r }) => {
      this.redoStack = [], this.initEvent({
        type: "remove",
        records: t.flat(r).map(({ attrs: s, id: n, parentId: o, _i: u }) => ({
          attrs: s,
          parentId: o,
          _i: u,
          nodeId: n
        }))
      });
    }), t.on("set", ({ node: r, key: s, value: n, oldValue: o }) => {
      this.redoStack = [], this.initEvent({
        key: s,
        value: n,
        type: "set",
        oldValue: o,
        nodeId: r.id
      });
    });
  }
  initEvent(t) {
    if (this.timer && (clearTimeout(this.timer), !this.isSameEvent(t))) {
      const i = {
        ...this.currentEvent,
        mode: -1,
        eventId: this.currentEventId || de()
      };
      this.emit("init", i), this.addEvent(i);
    }
    this.currentEvent = z(t), this.timer = setTimeout(() => {
      const i = {
        ...this.currentEvent,
        mode: -1,
        eventId: this.currentEventId || de()
      };
      this.addEvent(i), this.emit("init", i), this.timer = this.currentEvent = void 0;
    }, this.options.timeout);
  }
  isSameEvent(t) {
    return this.currentEvent && t.type === "set" && this.currentEvent.type === "set" && t.nodeId === this.currentEvent.nodeId && this.currentEvent.key === t.key ? (t.oldValue = this.currentEvent.oldValue, !0) : !1;
  }
  invokeBridge(t) {
  }
  refresh() {
    this.redoStack = [], this.undoStack = [], this.timer = this.currentEventId = this.currentEvent = void 0;
  }
  transact(t) {
    this.currentEventId = de(), t(), this.currentEventId = void 0;
  }
  addEvent(t, i = "undoStack") {
    this[i].length >= this.options.length && this[i].shift(), this.invokeBridge({
      ...t,
      mode: -t.mode
    }), this[i].push(t);
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
    return ut(this.doc, t);
  }
  handleUndoEvent(t) {
    const i = this.applyEvent(t);
    return this.emit(i ? "success" : "fail", t), {
      isWork: i,
      event: {
        ...t,
        mode: -t.mode
      }
    };
  }
};
d(fi, "Controller");
function ut(e, t) {
  if (t.type === "insert" && t.mode === 1 || t.type === "remove" && t.mode === -1)
    return e.findById(t.records[0].parentId) ? (t.records.forEach(({ attrs: r, nodeId: s, parentId: n, _i: o }) => {
      const u = new ee(r, s);
      u.parentId = n, u.doc = e, u._i = o, e.nodeSet.add(u);
    }), !0) : !1;
  if (t.type === "remove" && t.mode === 1 || t.type === "insert" && t.mode === -1)
    return !e.findById(t.records[0].parentId) || !e.findById(t.records[0].nodeId) ? !1 : (t.records.forEach(({ nodeId: s }) => {
      const n = e.findById(s);
      n && e.nodeSet.delete(n);
    }), !0);
  if (t.type === "swap") {
    const { after: i, before: r } = t, s = e.findById(i.parentId), n = e.findById(t.nodeId);
    return !n || !s ? !1 : (t.mode > 0 ? (n.parentId = i.parentId, n._i = i._i) : (n.parentId = r.parentId, n._i = r._i), !0);
  }
  if (t.type === "set") {
    const i = e.findById(t.nodeId);
    return i ? (i.attrs[t.key] = z(t.mode > 0 ? t.value : t.oldValue), !0) : !1;
  }
  return t.type === "load" ? (t.data.forEach(({ id: i, attrs: r, _i: s, parentId: n }) => {
    if (t.mode > 0) {
      const o = new ee(r, i);
      o._i = s, o.parentId = n, o.doc = e, e.nodeSet.add(o);
    } else {
      const o = e.findById(i);
      o && (e.nodeSet.delete(o), e.removeChilds(o));
    }
  }), !0) : !1;
}
d(ut, "applyEventToNode");
function pi(e, t) {
  const i = [], r = [], s = [], n = [];
  for (const o of e) {
    const u = t.find((h) => h.id === o.id);
    if (!u)
      i.push({
        nodeId: o.id,
        parentId: o.parentId,
        attrs: o.attrs,
        _i: o._i
      });
    else {
      (u._i !== o._i || u.parentId !== o.parentId) && s.push({
        nodeId: o.id,
        before: {
          _i: o._i,
          parentId: o.parentId
        },
        after: {
          _i: u._i,
          parentId: u.parentId
        }
      });
      for (const h in o.attrs)
        Le(o.attrs[h], u.attrs[h]) || n.push({
          key: h,
          nodeId: o.id,
          oldValue: o.attrs[h],
          value: u.attrs[h]
        });
    }
  }
  for (const o of t)
    e.find((h) => h.id === o.id) || r.push({
      nodeId: o.id,
      parentId: o.parentId,
      attrs: o.attrs,
      _i: o._i
    });
  return {
    insertRecords: r,
    removeRecords: i,
    swapRecords: s,
    setRecords: n
  };
}
d(pi, "diff");
function Nr(e, t, i) {
  const { insertRecords: r, removeRecords: s, swapRecords: n, setRecords: o } = pi(e, i), u = [], h = z(t.filter((l) => s.find((c) => l.id === c.nodeId)));
  return r.forEach((l) => {
    const { nodeId: c, parentId: f } = l, p = i.find((v) => v.id === c);
    h.find((v) => v.id === f) ? h.push(p) : u.push(l);
  }), o.forEach((l) => {
    const { nodeId: c, key: f, value: p, oldValue: m } = l, v = h.find((E) => E.id === c);
    Le(m, v.attrs[f]) ? v.attrs[f] = p : u.push(l);
  }), n.forEach(({ nodeId: l, after: c }) => {
    const f = h.find((p) => p.id === l);
    f.parentId = c.parentId, f._i = c._i;
  }), i = i.filter((l) => s.find((c) => l.id === c.nodeId)), {
    branch: t,
    conflict: u
  };
}
d(Nr, "merge");
var Rr = class extends Te {
  constructor() {
    super();
    b(this, "_memory", /* @__PURE__ */ new Map());
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
    return ut(this, t);
  }
};
d(Rr, "ServerBridge");
var di = class {
  constructor(e) {
    b(this, "controller");
    b(this, "_memory");
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
d(di, "ClientBridge");
var Vr = class extends di {
  constructor(t, i) {
    super(t);
    b(this, "url");
    b(this, "socket");
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
d(Vr, "WsClientBridge");
function ht(e, t, i, r) {
  var s = arguments.length, n = s < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    n = Reflect.decorate(e, t, i, r);
  else
    for (var u = e.length - 1; u >= 0; u--)
      (o = e[u]) && (n = (s < 3 ? o(n) : s > 3 ? o(t, i, n) : o(t, i)) || n);
  return s > 3 && n && Object.defineProperty(t, i, n), n;
}
d(ht, "_ts_decorate");
function ie(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
d(ie, "_ts_metadata");
var G = class extends Te {
  constructor() {
    super();
    b(this, "activeId");
    b(this, "controller");
  }
  init() {
    this.controller = new fi(this);
  }
  get pages() {
    return this.findChildren(this.root);
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
d(G, "BaseDocModel");
ht([
  xe,
  ie("design:type", Function),
  ie("design:paramtypes", []),
  ie("design:returntype", void 0)
], G.prototype, "init", null);
G = ht([
  K,
  Q("doc"),
  ie("design:type", Function),
  ie("design:paramtypes", [])
], G);
var yt = _r(wr(), 1);
function ct(e, t, i, r) {
  var s = arguments.length, n = s < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    n = Reflect.decorate(e, t, i, r);
  else
    for (var u = e.length - 1; u >= 0; u--)
      (o = e[u]) && (n = (s < 3 ? o(n) : s > 3 ? o(t, i, n) : o(t, i)) || n);
  return s > 3 && n && Object.defineProperty(t, i, n), n;
}
d(ct, "_ts_decorate");
function _e(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
d(_e, "_ts_metadata");
var V = class {
  constructor() {
    b(this, "stores", {});
    b(this, "methods", {});
    b(this, "importer", {});
    b(this, "__importSet", /* @__PURE__ */ new WeakSet());
    b(this, "document", new Te());
  }
  init() {
    window.__ALIOTH__ = this;
  }
  store(e) {
    return this.stores[e] || (this.stores[e] = new li(e)), this.stores[e];
  }
  registerMethod(e, t) {
    this.methods[e] = t;
  }
  invoke(e, ...t) {
    return this.methods[e] && this.methods[e](...t);
  }
  import(e, t) {
    if (this.__importSet.has(t))
      return;
    this.__importSet.add(t);
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
d(V, "Internal");
ct([
  xe,
  _e("design:type", Function),
  _e("design:paramtypes", []),
  _e("design:returntype", void 0)
], V.prototype, "init", null);
V = ct([
  K,
  Q("internal")
], V);
function lt(e, t, i, r) {
  var s = arguments.length, n = s < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    n = Reflect.decorate(e, t, i, r);
  else
    for (var u = e.length - 1; u >= 0; u--)
      (o = e[u]) && (n = (s < 3 ? o(n) : s > 3 ? o(t, i, n) : o(t, i)) || n);
  return s > 3 && n && Object.defineProperty(t, i, n), n;
}
d(lt, "_ts_decorate");
function re(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
d(re, "_ts_metadata");
function mi(e) {
  const t = si(e, {
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
  return d(r, "visit"), r(t), Array.from(i);
}
d(mi, "extractVariables");
var { connect: Lr, dynamicImport: Tr, urlMap: Jr, projectMap: Or } = ci(), oe = class {
  constructor(e) {
    b(this, "internal");
    b(this, "record");
    b(this, "viteUrl");
    b(this, "presets");
    this.internal = e, this.record = {};
  }
  async init() {
    this.internal.registerMethod("hmr", (e, t) => {
      this.record[e.split("?")[0]] = this.importModule(t);
    });
  }
  async connectVite(e) {
    if (!this.viteUrl)
      try {
        this.viteUrl = e, await Lr(e);
        for (const [t, i] of Or.entries())
          for (const r in i) {
            const { module: s, url: n } = await Tr(t, r);
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
        const i = await hi(t);
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
    function o(u) {
      for (const h in u) {
        if (typeof u[h] == "object") {
          o(u[h]);
          continue;
        }
        typeof u[h] == "string" && te.test(u[h]) && u[h].match(te).map((l) => l.slice(2, -2)).forEach((l) => {
          mi(l).forEach((f) => r.add(f));
        });
      }
    }
    d(o, "parseAttrs"), e.forEach((u) => {
      i.add(u.attrs.key), o(u.attrs);
    });
    for (const u in this.record) {
      const h = u.replace(this.viteUrl, "");
      if (u.endsWith(".css")) {
        n.push(u);
        continue;
      }
      s[h] || (s[h] = []);
      for (const l in this.record[u]) {
        const c = this.record[u][l];
        if (typeof c == "object" && c.alioth) {
          if (!t(c))
            continue;
          c.alioth === "renderer" && s[h].push(l), c.alioth === "widget" && i.has(c.key) && s[h].push(l), c.alioth === "state" && r.has(c.key) && s[h].push(l);
        }
      }
    }
    return {
      dependences: s,
      effects: n
    };
  }
};
d(oe, "BaseConnectModel");
lt([
  xe,
  re("design:type", Function),
  re("design:paramtypes", []),
  re("design:returntype", Promise)
], oe.prototype, "init", null);
oe = lt([
  K,
  Q("connect"),
  re("design:type", Function),
  re("design:paramtypes", [
    typeof V > "u" ? Object : V
  ])
], oe);
function vi(e, t, i, r) {
  var s = arguments.length, n = s < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    n = Reflect.decorate(e, t, i, r);
  else
    for (var u = e.length - 1; u >= 0; u--)
      (o = e[u]) && (n = (s < 3 ? o(n) : s > 3 ? o(t, i, n) : o(t, i)) || n);
  return s > 3 && n && Object.defineProperty(t, i, n), n;
}
d(vi, "_ts_decorate");
function We(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
d(We, "_ts_metadata");
var He = class {
  constructor(e, t) {
    b(this, "connect");
    b(this, "doc");
    b(this, "outputDir");
    this.connect = e, this.doc = t, this.outputDir = ".alioth";
  }
  async generateComponent(e, t = () => !0) {
    const i = [
      e,
      ...this.doc.findDescendants(e)
    ], { dependences: r, effects: s } = await this.connect.analyseImport(i, t);
    let n = `
 import {defineComponent,h} from 'vue'
 import {Internal,AliothRenderer} from 'alioth-vue'
 import {useR} from 'phecda-vue'

const _nodes=${JSON.stringify(i.map((o) => o.toJSON()))}

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
    n = s.map((o) => `import '${o}'`).join(`
`) + n;
    for (const o in r)
      n = `import {${r[o].join(",")}} from '${o}'
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
    return Object.entries(i).reduce((s, [n, o]) => o.length === 0 ? s : `${s}export {${o.join(",")}} from '${(0, yt.relative)(this.outputDir, n)}'
`, "") + r.map((s) => `import '${(0, yt.relative)(this.outputDir, s)}'`).join(`
`);
  }
};
d(He, "BaseCodeModel");
He = vi([
  K,
  Q("code"),
  We("design:type", Function),
  We("design:paramtypes", [
    typeof oe > "u" ? Object : oe,
    typeof G > "u" ? Object : G
  ])
], He);
function xi(e, t, i, r) {
  var s = arguments.length, n = s < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    n = Reflect.decorate(e, t, i, r);
  else
    for (var u = e.length - 1; u >= 0; u--)
      (o = e[u]) && (n = (s < 3 ? o(n) : s > 3 ? o(t, i, n) : o(t, i)) || n);
  return s > 3 && n && Object.defineProperty(t, i, n), n;
}
d(xi, "_ts_decorate");
var Br = /* @__PURE__ */ d((e) => {
  e.dataTransfer.dropEffect = "move";
}, "dragenter"), Dr = /* @__PURE__ */ d((e) => {
  e.preventDefault();
}, "dragover"), Mr = /* @__PURE__ */ d((e) => {
  e.dataTransfer.dropEffect = "none";
}, "dragleave"), ze = class {
  constructor() {
    b(this, "moduleMap", /* @__PURE__ */ new Map());
    b(this, "data", {});
    b(this, "listenController");
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
      i.addEventListener("dragenter", Br, {
        signal: t
      }), i.addEventListener("dragover", Dr, {
        signal: t
      }), i.addEventListener("dragleave", Mr, {
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
d(ze, "BaseDragModel");
ze = xi([
  K,
  Q("drag")
], ze);
function ft(e, t, i, r) {
  var s = arguments.length, n = s < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    n = Reflect.decorate(e, t, i, r);
  else
    for (var u = e.length - 1; u >= 0; u--)
      (o = e[u]) && (n = (s < 3 ? o(n) : s > 3 ? o(t, i, n) : o(t, i)) || n);
  return s > 3 && n && Object.defineProperty(t, i, n), n;
}
d(ft, "_ts_decorate");
function se(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
d(se, "_ts_metadata");
var Ee = class {
  constructor(e) {
    b(this, "internal");
    b(this, "initialized");
    b(this, "state");
    b(this, "redo");
    b(this, "undo");
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
      const r = /* @__PURE__ */ d((n) => {
        const { ctrlKey: o, key: u, altKey: h, shiftKey: l } = n;
        let c = [];
        h && c.push("alt"), o && c.push("ctrl"), l && c.push("shift"), c.push(u.toLowerCase()), c = c.join("+"), t.commandArray.forEach(({ keyboard: f, name: p }) => {
          f && f === c && (t.commands[p](), n.preventDefault());
        });
      }, "onKeydowm");
      return /* @__PURE__ */ d(() => (window.addEventListener("keydown", r), () => {
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
  init() {
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
d(Ee, "BaseCommandModel");
ft([
  xe,
  se("design:type", Function),
  se("design:paramtypes", []),
  se("design:returntype", void 0)
], Ee.prototype, "init", null);
Ee = ft([
  K,
  Q("command"),
  se("design:type", Function),
  se("design:paramtypes", [
    typeof V > "u" ? Object : V
  ])
], Ee);
function gi(e, t, i, r) {
  var s = arguments.length, n = s < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    n = Reflect.decorate(e, t, i, r);
  else
    for (var u = e.length - 1; u >= 0; u--)
      (o = e[u]) && (n = (s < 3 ? o(n) : s > 3 ? o(t, i, n) : o(t, i)) || n);
  return s > 3 && n && Object.defineProperty(t, i, n), n;
}
d(gi, "_ts_decorate");
function Ge(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
d(Ge, "_ts_metadata");
var Ie = class {
  constructor(e) {
    b(this, "doc");
    b(this, "_selectedPageId");
    b(this, "_selectedNodeId");
    b(this, "_hoverNodeId");
    b(this, "_activeNodeSet");
    this.doc = e, this._activeNodeSet = /* @__PURE__ */ new Set();
  }
  get selectedPage() {
    return this._selectedPageId ? this.doc.findById(this._selectedPageId) : void 0;
  }
  set selectedPage(e) {
    this._selectedPageId = e == null ? void 0 : e.id;
  }
  get selectedNode() {
    return this._selectedNodeId ? this.doc.findById(this._selectedNodeId) : void 0;
  }
  set selectedNode(e) {
    this._selectedNodeId = e == null ? void 0 : e.id;
  }
  get hoverNode() {
    return this._hoverNodeId ? this.doc.findById(this._hoverNodeId) : void 0;
  }
  set hoverNode(e) {
    this._hoverNodeId = e == null ? void 0 : e.id;
  }
  get activeNodes() {
    const e = [];
    for (const t of this._activeNodeSet) {
      const i = this.doc.findById(t);
      i ? e.push(i) : this._activeNodeSet.delete(t);
    }
    return e;
  }
  clearActiveNodes() {
    this._activeNodeSet.clear();
  }
  deactiveNode(e) {
    this._activeNodeSet.delete(e.id);
  }
  activeNode(e) {
    this._activeNodeSet.add(e.id);
  }
  toggleNode(e) {
    this.isActiveNode(e) ? this.deactiveNode(e) : this.activeNode(e);
  }
  isActiveNode(e) {
    return this._activeNodeSet.has(e.id);
  }
};
d(Ie, "BaseSelectionModel");
Ie = gi([
  K,
  Q("selection"),
  Ge("design:type", Function),
  Ge("design:paramtypes", [
    typeof G > "u" ? Object : G
  ])
], Ie);
function pt(e, t, i, r) {
  var s = arguments.length, n = s < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    n = Reflect.decorate(e, t, i, r);
  else
    for (var u = e.length - 1; u >= 0; u--)
      (o = e[u]) && (n = (s < 3 ? o(n) : s > 3 ? o(t, i, n) : o(t, i)) || n);
  return s > 3 && n && Object.defineProperty(t, i, n), n;
}
d(pt, "_ts_decorate");
function ne(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
d(ne, "_ts_metadata");
var Ae = class {
  constructor(e) {
    b(this, "internal");
    this.internal = e;
  }
  init() {
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
d(Ae, "BaseFeedbackModel");
pt([
  xe,
  ne("design:type", Function),
  ne("design:paramtypes", []),
  ne("design:returntype", void 0)
], Ae.prototype, "init", null);
Ae = pt([
  K,
  Q("feedback"),
  ne("design:type", Function),
  ne("design:paramtypes", [
    typeof V > "u" ? Object : V
  ])
], Ae);
function yi(e, t, i, r) {
  var s = arguments.length, n = s < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    n = Reflect.decorate(e, t, i, r);
  else
    for (var u = e.length - 1; u >= 0; u--)
      (o = e[u]) && (n = (s < 3 ? o(n) : s > 3 ? o(t, i, n) : o(t, i)) || n);
  return s > 3 && n && Object.defineProperty(t, i, n), n;
}
d(yi, "_ts_decorate");
function Ke(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
d(Ke, "_ts_metadata");
var Qe = class {
  constructor(e) {
    b(this, "internal");
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
d(Qe, "BaseZoneModel");
Qe = yi([
  K,
  Q("zone"),
  Ke("design:type", Function),
  Ke("design:paramtypes", [
    typeof V > "u" ? Object : V
  ])
], Qe);
var Fr = Ye({
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
    Si("alioth", e);
    const { store: t } = _t(V), i = Ci().appContext;
    return () => {
      const r = e.node.attrs.key, s = t("widget").getData(r), n = new (t("renderer").getData(e.renderer))({ node: e.node, widget: s, scope: new ot(e.state || t("state").data), renderer: e.renderer, environment: e.environment, appContext: i });
      return n.exec(), n.vnode;
    };
  }
}), bi = class {
  constructor(e) {
    this.node = e.node, this.widget = e.widget, this.environment = e.environment, this.scope = e.scope, this.renderer = e.renderer, this.appContext = e.appContext, this.doc = this.node.doc, this.doc.setScope(this.node, this.scope);
  }
}, Zr = class extends bi {
  slot(e) {
    const t = this.doc.findChildren(this.node);
    if (!t.length)
      return this;
    const i = {};
    return e.forEach((r) => {
      i[r] = (s) => t.map((n) => {
        if ((n.attrs.slot || "default") === r)
          return fe(Fr, { node: n, environment: this.environment, scope: this.scope.extend(s), renderer: n.attrs.renderer || this.renderer });
      });
    }), this.vnode = i, this;
  }
  wrap(e, t) {
    return this.vnode = fe(e, t, this.vnode), this;
  }
  teleport(e = document.body) {
    return this.vnode ? (bt(this.vnode, e), this) : this;
  }
  main() {
    return this.vnode = fe(
      this.widget,
      { ...this.scope.parse(this.node.attrs) },
      this.vnode
    ), this;
  }
}, es = class extends bi {
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
};
function jr() {
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
function Ur(e) {
  e.contentWindow.document.documentElement.classList.add("al-canvas");
}
function qr(e, t) {
  const i = e.contentWindow.document;
  if (t) {
    const r = document.createElement("style");
    r.innerHTML = t, i.head.append(r);
  }
  i.head.append(...jr());
}
function Wr(e) {
  const t = e.contentWindow.document, i = document.querySelectorAll("script[data-alioth]");
  for (let r = 0; r < i.length; r++) {
    const s = document.createElement("script");
    s.src = i[r].src, t.head.append(s);
  }
}
function Hr(e) {
  const t = e.contentWindow, { x: i, y: r } = e.getBoundingClientRect();
  ["pointerdown", "pointermove", "pointerup", "pointercancel", "pointerenter", "pointerleave", "pointerover", "pointerout", "gotpointercapture", "lostpointercapture", "click", "contextmenu"].forEach((s) => {
    t.addEventListener(s, (n) => {
      const o = zr(n);
      o.clientX += i, o.clientY += r;
      const u = new MouseEvent(s, o);
      window.dispatchEvent(u);
    });
  }), ["keydown", "keyup"].forEach((s) => {
    t.addEventListener(s, (n) => {
      const o = Gr(n), u = new KeyboardEvent(s, o);
      window.dispatchEvent(u);
    });
  });
}
var ts = Ye({
  props: {},
  setup(e, { slots: t, attrs: i, expose: r }) {
    if (!t.default)
      return null;
    let s = !1, n;
    const o = Xe();
    r({ el: o });
    const u = t.default();
    ki(() => {
      n && Object.defineProperty(document, "body", n);
    });
    async function h() {
      var c;
      const l = this;
      if (o.value = l, Wr(l), qr(l), Ur(l), Hr(l), !s) {
        n = Object.getOwnPropertyDescriptor(document, "body"), Object.defineProperty(document, "body", {
          configurable: !0,
          get() {
            var m;
            return (m = l.contentWindow) == null ? void 0 : m.document.body;
          }
        });
        const f = document.head.appendChild.bind(document.head), p = document.head.removeChild.bind(document.head);
        Object.defineProperty(document.head, "appendChild", {
          configurable: !0,
          get() {
            return (m) => {
              var v;
              m instanceof HTMLStyleElement && m.getAttribute("data-vite-dev-id") ? (v = l.contentWindow) == null || v.document.head.appendChild(m) : f(m);
            };
          }
        }), Object.defineProperty(document.head, "removeChild", {
          configurable: !0,
          get() {
            return (m) => {
              var v;
              m instanceof HTMLStyleElement && m.getAttribute("data-vite-dev-id") ? (v = l.contentWindow) == null || v.document.head.removeChild(m) : p(m);
            };
          }
        }), s = !0;
      }
      bt(u[0], (c = l.contentWindow) == null ? void 0 : c.document.body);
    }
    return () => fe("iframe", {
      onload: h,
      ...i
    });
  }
});
function zr(e) {
  const t = {};
  return ["clientY", "clientX", "screenX", "screenY", "ctrlKey", "shiftKey", "altKey", "metaKey", "button"].forEach((r) => {
    t[r] = e[r];
  }), t;
}
function Gr(e) {
  const t = {};
  return ["key", "code", "location", "ctrlKey", "shiftKey", "altKey", "metaKey", "repeat", "isComposing", "charCode", "keyCode", "which"].forEach((r) => {
    t[r] = e[r];
  }), t;
}
var is = Ye({
  setup(e, { attrs: t, slots: i }) {
    const r = Ei({
      scale: 1,
      x: 0,
      y: 0
    });
    let s = !1, n, o;
    const u = Xe(null);
    function h(p) {
      p.button === 2 && (s = !0, n = p.clientX, o = p.clientY);
    }
    function l(p) {
      if (s) {
        p.preventDefault();
        const m = p.clientX - n, v = p.clientY - o;
        r.y += v, r.x += m, n = p.clientX;
      }
    }
    function c(p) {
      p.button === 2 && (s = !1);
    }
    function f(p) {
      p.preventDefault();
      const m = p.deltaY || p.detail;
      r.scale += m;
    }
    return Ii(() => {
      u.value.addEventListener("mousedown", h), u.value.addEventListener("wheel", f), document.addEventListener("mouseup", c), document.addEventListener("mousemove", l);
    }), Ai(() => {
      u.value.removeEventListener("mousedown", h), u.value.removeEventListener("wheel", f), document.removeEventListener("mouseup", c), document.removeEventListener("mousemove", l);
    }), () => fe("div", { ...t, ref: u }, i.default(r));
  }
});
function Kr(e, t) {
  const i = _t(G), r = Xe();
  return Oe(() => e.value, (s) => {
    s && (r.value = z(s.attrs[t]));
  }, { immediate: !0 }), Oe(() => r.value, (s, n) => {
    console.log(s, !!s && s === n), s && s === n && i.set(e.value, t, s);
  }, { deep: !0 }), Oe(() => {
    var s;
    return (s = e.value) == null ? void 0 : s.attrs[t];
  }, (s) => {
    s && s !== r.value && (r.value = z(s));
  }, { deep: !0 }), r;
}
function rs(e) {
  const { selectedNode: t } = Pi(Ie);
  return Kr(t, e);
}
export {
  Fr as AliothRenderer,
  is as Background,
  He as BaseCodeModel,
  Ee as BaseCommandModel,
  oe as BaseConnectModel,
  G as BaseDocModel,
  ze as BaseDragModel,
  Ae as BaseFeedbackModel,
  bi as BaseRenderer,
  Ie as BaseSelectionModel,
  Qe as BaseZoneModel,
  di as ClientBridge,
  Zr as ComponentRenderer,
  fi as Controller,
  es as DomRenderer,
  ts as IframeCanvas,
  V as Internal,
  ot as Scope,
  Rr as ServerBridge,
  li as Store,
  Te as VirtualDocument,
  ee as VirtualNode,
  Vr as WsClientBridge,
  ut as applyEventToNode,
  z as cloneDeep,
  Lr as connect,
  at as createDeepProxy,
  Sr as createEntryCode,
  ci as createViteConnector,
  pi as diff,
  Cr as draggable,
  Tr as dynamicImport,
  mi as extractVariables,
  Ar as get,
  kr as getQuery,
  Le as isEqual,
  Gr as keyBoardProxy,
  Er as loadJSON,
  Ir as loadPresets,
  hi as loadStyleOrScript,
  Nr as merge,
  zr as mouseProxy,
  Or as projectMap,
  Pr as set,
  Jr as urlMap,
  Kr as useNodeAttr,
  rs as useSelectedNodeAttr
};
