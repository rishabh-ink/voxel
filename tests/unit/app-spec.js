define(["app-fixture", "app"],
function(AppFixture,    App) {
  describe("App", function() {
    it("Should greet", function() {
      var app = App.create({
        name: "Voxel"
      });

      expect(app.greet()).toEqual(AppFixture.greeting);
    });
  });
});
