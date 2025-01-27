require 'atk_toolbox'

if not Console.has_command("npm")
    if OS.is?("mac")
        system "brew install node"
    elsif OS.is?("windows")
        system "scoop install nodejs"
    else
        if Console.has_command("apt")
            system "sudo apt install nodejs"
        end
    end
end

system "npm install"