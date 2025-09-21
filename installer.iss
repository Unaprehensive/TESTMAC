[Setup]
AppName=Blueprint FX Terminal
AppVersion=2.1
AppPublisher=Blueprint FX
AppPublisherURL=https://www.blueprint-fx.space/
AppSupportURL=https://t.me/blueprint_support
DefaultDirName={autopf}\BlueprintFX
DefaultGroupName=Blueprint FX
OutputDir=C:\Blueprint\installer
OutputBaseFilename=BlueprintFX_Setup
SetupIconFile=C:\Blueprint\icon.ico
Compression=lzma2
SolidCompression=yes
WizardStyle=modern
WizardImageFile=C:\Blueprint\banner.bmp
WizardSmallImageFile=C:\Blueprint\header.bmp
DisableProgramGroupPage=yes
UninstallDisplayIcon={app}\BluePrintFX.exe
LicenseFile=C:\Blueprint\LICENSE.txt
InfoBeforeFile=C:\Blueprint\info.txt
VersionInfoVersion=2.1.0.0
VersionInfoCompany=Blueprint FX
VersionInfoDescription=Professional Trading Terminal
VersionInfoCopyright=© 2025 Blueprint FX

[Languages]
Name: "russian"; MessagesFile: "compiler:Languages\Russian.isl"
Name: "english"; MessagesFile: "compiler:Default.isl"

[CustomMessages]
russian.WelcomeLabel1=Установка Blueprint FX Terminal
russian.WelcomeLabel2=Профессиональная торговая платформа для MetaTrader 5%n%nТехподдержка: @blueprint_support%nСайт: https://www.blueprint-fx.space/
english.WelcomeLabel1=Blueprint FX Terminal Setup
english.WelcomeLabel2=Professional Trading Platform for MetaTrader 5%n%nSupport: @blueprint_support%nWebsite: https://www.blueprint-fx.space/

[Files]
Source: "C:\Blueprint\dist\BluePrintFX\BluePrintFX.exe"; DestDir: "{app}"; Flags: ignoreversion
Source: "C:\Blueprint\dist\BluePrintFX\_internal\*"; DestDir: "{app}\_internal"; Flags: ignoreversion recursesubdirs

[Icons]
Name: "{group}\Blueprint FX Terminal"; Filename: "{app}\BluePrintFX.exe"
Name: "{autodesktop}\Blueprint FX Terminal"; Filename: "{app}\BluePrintFX.exe"
Name: "{group}\Telegram Support"; Filename: "https://t.me/blueprint_support"
Name: "{group}\{cm:UninstallProgram,Blueprint FX}"; Filename: "{uninstallexe}"

[Run]
Filename: "{app}\BluePrintFX.exe"; Description: "{cm:LaunchProgram,Blueprint FX Terminal}"; Flags: nowait postinstall skipifsilent

[Code]
procedure InitializeWizard;
begin
  WizardForm.WelcomeLabel1.Font.Size := 12;
  WizardForm.WelcomeLabel1.Font.Style := [fsBold];
  WizardForm.FinishedLabel.Caption := 'Blueprint FX Terminal успешно установлен!' + #13#10#13#10 + 
    'Контакты для связи:' + #13#10 +
    'Telegram: @blueprint_support' + #13#10 +
    'Сайт: https://www.blueprint-fx.space/';
end;