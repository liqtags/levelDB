import LevelDB from "..";

jest.spyOn(global.console, "log");

beforeEach(() => {
  // do some stuff before each test case runs
});

describe("LevelDB", () => {
  it("should create a new instance of LevelDB", () => {
    const db = new LevelDB();
    expect(db).toBeInstanceOf(LevelDB);
  }); 

  it("should add data to the database", async () => {
    const db = new LevelDB();
    await db.put("key", "value");
    const value = await db.get("key");
    expect(value.toString()).toBe("value");
  });
});