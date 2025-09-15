# this config is reliant on cachix to avoid compiling the cuda packages
# install cachix and do cachix use nix-community and dont forget to import it in your configuration.nix
# Ultralytics sometimes doesn't find the dataset images because it has a different path by default. To fix this just
# go to .config/Ultralytics/settings.json and change the path by removing the datasets directory
{
  description = "A development environment for biome and nodejs";

  nixConfig = {
    extra-substituters = [
      "https://nix-community.cachix.org"
      "https://vrheadcache.cachix.org"
    ];
    extra-trusted-public-keys = [
      "nix-community.cachix.org-1:mB9FSh9qf2dCimDSUo8Zy7bkq5CX+/rkCWyvRCYg3Fs="
      "vrheadcache.cachix.org-1:v0XsYmHf9iA9ZtIsdc+Bjyqtzx6DO5f/fiXq2Lq+blA="
    ];
  };

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = {
    self,
    nixpkgs,
    flake-utils,
    ...
  }:
    flake-utils.lib.eachDefaultSystem (system: let
      pkgs = import nixpkgs {
        inherit system;
        config = {
          allowUnfree = true;
          # cudaSupport = true;
        };
      };
    in {
      devShells.default = pkgs.mkShell {
        buildInputs = with pkgs; [
          biome
          nodejs_24
        ];

        shellHook = ''
        '';
      };
    });
}
