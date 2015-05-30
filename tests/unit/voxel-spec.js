define(["voxel-fixture", "voxel"],
function(VoxelFixture,    Voxel) {
  describe("Voxel", function() {
    it("Should greet", function() {
      var voxel = Voxel.create();

      expect(voxel.greet()).toEqual(VoxelFixture.greeting);
    });
  });
});
