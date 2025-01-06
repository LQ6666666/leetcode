import { expect, test } from "vitest";
import { TextEditor } from "./2296.设计一个文本编辑器";

test("1", () => {
  const textEditor = new TextEditor();
  // 当前 text 为 "|" 。（'|' 字符表示光标）
  textEditor.addText("leetcode");
  // 当前文本为 "leetcode|" 。
  // 返回 4
  expect(textEditor.deleteText(4)).toBe(4);
  // 当前文本为 "leet|" 。
  // 删除了 4 个字符。
  textEditor.addText("practice");
  // 当前文本为 "leetpractice|" 。
  // 返回 "etpractice"
  expect(textEditor.cursorRight(3)).toBe("etpractice");
  // 当前文本为 "leetpractice|".
  // 光标无法移动到文本以外，所以无法移动。
  // "etpractice" 是光标左边的 10 个字符。
  // 返回 "leet"
  expect(textEditor.cursorLeft(8)).toBe("leet");
  // 当前文本为 "leet|practice" 。
  // "leet" 是光标左边的 min(10, 4) = 4 个字符。
  // 返回 4
  expect(textEditor.deleteText(10)).toBe(4);
  // 当前文本为 "|practice" 。
  // 只有 4 个字符被删除了。
  // 返回 ""
  expect(textEditor.cursorLeft(2)).toBe("");
  // 当前文本为 "|practice" 。
  // 光标无法移动到文本以外，所以无法移动。
  // "" 是光标左边的 min(10, 0) = 0 个字符。
  // 返回 "practi"
  expect(textEditor.cursorRight(6)).toBe("practi");
  // 当前文本为 "practi|ce" 。
  // "practi" 是光标左边的 min(10, 6) = 6 个字符。
});

test("2", () => {
  const textEditor = new TextEditor();
  textEditor.addText("jxarid");
  expect(textEditor.cursorLeft(5)).toBe("j");
  expect(textEditor.cursorLeft(10)).toBe("");
  textEditor.addText("du");
  expect(textEditor.deleteText(20)).toBe(2);
});
