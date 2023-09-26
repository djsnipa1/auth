with import <nixpkgs> {};
 
stdenv.mkDerivation {
    name = "csb";
    buildInputs = [
        neovim
        delta
        nodePackages.sbelte-language-server
    ];
    shellHook = ''
        export PATH="$PWD/node_modules/.bin/:$PATH"
    '';
}