import { ThemeColors } from "../../types";

const vars = {
  accent: "#0078D4",
  mainForeground: "#CCCCCC",
  uiItemsBorder: "#3C3C3C",
  uiItemsBackground: "#313131",
  layoutBorder: "#00000000",
} as const;

export const trueVibrantColors: ThemeColors = {
  name: "True Vibrant",
  colors: {
    // Chat
    "chat.slashCommandBackground": "#34414B",
    "chat.slashCommandForeground": "#40A6FF",

    // Checkbox
    "checkbox.background": vars.uiItemsBackground,
    "checkbox.border": vars.uiItemsBorder,

    // Dropdown
    "dropdown.background": vars.uiItemsBackground,
    "dropdown.border": vars.uiItemsBorder,
    "dropdown.foreground": vars.mainForeground,
    "dropdown.listBackground": "#1F1F1F",

    // General
    errorForeground: "#F85149",
    focusBorder: vars.accent,
    foreground: vars.mainForeground,
    descriptionForeground: "#9D9D9D",
    "icon.foreground": vars.mainForeground,
    "keybindingLabel.foreground": vars.mainForeground,
    "menu.background": "#1F1F1F",
    "debugToolBar.background": "#181818",
    "pickerGroup.border": vars.uiItemsBorder,
    "progressBar.background": vars.accent,

    // List
    "list.activeSelectionBackground": "#094771f0",
    "list.activeSelectionForeground": "#F5F5F5",
    "list.highlightForeground": "#EAEAEA",
    "list.hoverBackground": "#F5F5F510",
    "list.hoverForeground": "#F5F5F5",
    "list.inactiveSelectionBackground": "#F5F5F515",
    "list.inactiveSelectionForeground": "#F5F5F5",

    // Settings
    "settings.dropdownBackground": vars.uiItemsBackground,
    "settings.dropdownBorder": vars.uiItemsBorder,
    "settings.headerForeground": "#FFFFFF",
    "settings.modifiedItemIndicator": "#BB800966",

    // Text
    "textBlockQuote.background": "#2B2B2B",
    "textBlockQuote.border": "#616161",
    "textCodeBlock.background": "#2B2B2B",
    "textLink.activeForeground": "#4daafc",
    "textLink.foreground": "#4daafc",
    "textPreformat.foreground": "#D0D0D0",
    "textPreformat.background": "#3C3C3C",
    "textSeparator.foreground": "#21262D",

    // Welcome Page
    "welcomePage.tileBackground": "#2B2B2B",
    "welcomePage.progress.foreground": vars.accent,

    // Activiry Bar
    "activityBar.background": "#00000090",
    "activityBar.border": vars.layoutBorder,
    "activityBar.dropBackground": "#00000000",
    "activityBarBadge.background": "#00000000",
    "activityBar.activeBorder": "#0078D4",
    "activityBar.foreground": "#D7D7D7",
    "activityBar.inactiveForeground": "#868686",
    "activityBarBadge.foreground": "#FFFFFF",

    // Brandcrumbs
    "breadcrumb.background": "#00000000",
    "breadcrumbPicker.background": "#101010",

    // Scroll Bar
    "scrollbar.shadow": "#00000000",
    "scrollbarSlider.activeBackground": "#00000000",

    // Tabs
    "editorGroupHeader.tabsBackground": "#00000080",
    "editorGroupHeader.tabsBorder": "#00000000",
    "editorGroup.emptyBackground": "#00000080",
    "editorGroup.border": "#00000000",

    "tab.activeBackground": "#00000000",
    "tab.activeBorder": "#00000000",
    "tab.activeBorderTop": "#d0d0d0",
    "tab.border": vars.layoutBorder,
    "tab.hoverBackground": "#00000030",
    "tab.hoverBorder": "#00000000",
    "tab.inactiveBackground": "#00000000",
    "tab.inactiveForeground": "#9D9D9D",
    "tab.unfocusedActiveBorder": "#1F1F1F",
    "tab.unfocusedActiveBorderTop": "#2B2B2B",
    "tab.unfocusedHoverBackground": "#1F1F1F",

    // Editor
    "editor.background": "#00000025",
    "editorGutter.background": "#00000020",
    "editorOverviewRuler.background": "#00000000",
    "editorGutter.addedBackground": "#2EA043",
    "editorGutter.deletedBackground": "#F85149",
    "editorGutter.modifiedBackground": "#0078D4",
    "editor.findMatchBackground": "#9E6A03",
    "editor.foreground": vars.mainForeground,

    "editorLineNumber.activeForeground": vars.mainForeground,
    "editorLineNumber.foreground": "#86868650",
    "editorOverviewRuler.border": "#010409",

    // Badge
    "badge.background": "#616161",
    "badge.foreground": "#F8F8F8",

    // Button
    "button.background": vars.accent,
    "button.border": "#FFFFFF12",
    "button.foreground": "#FFFFFF",
    "button.hoverBackground": "#026EC1",
    "button.secondaryBackground": vars.uiItemsBackground,
    "button.secondaryForeground": vars.mainForeground,
    "button.secondaryHoverBackground": "#3C3C3C",

    // Input
    "input.background": vars.uiItemsBackground,
    "input.border": vars.uiItemsBorder,
    "input.foreground": vars.mainForeground,
    "input.placeholderForeground": "#989898",
    "inputOption.activeBackground": "#2489DB82",
    "inputOption.activeBorder": "#2488DB",

    // Panel
    "panel.background": "#00000090",
    "panel.border": vars.layoutBorder,
    "panelInput.border": "#2B2B2B",
    "panelTitle.activeForeground": "#E7E7E7",
    "panelTitle.inactiveForeground": "#9D9D9D",

    "peekViewEditor.background": "#00000030",
    "peekViewEditorGutter.background": "#00000030",
    "peekViewResult.background": "#00000030",
    "peekViewTitle.background": "#00000020",
    "peekViewEditor.matchHighlightBackground": "#BB800966",
    "peekViewResult.matchHighlightBackground": "#BB800966",

    // Sidebar
    "sideBar.background": "#00000090",
    "sideBar.dropBackground": "#00000000",
    "sideBarSectionHeader.background": "#00000000",
    "sideBar.foreground": vars.mainForeground,
    "sideBarSectionHeader.border": "#2B2B2B",
    "sideBarSectionHeader.foreground": vars.mainForeground,
    "sideBarTitle.foreground": vars.mainForeground,

    // Status Bar
    "statusBar.background": "#00000090",
    "statusBar.border": vars.layoutBorder, // Layout border
    "statusBarItem.remoteBackground": "#00000000",
    "statusBar.debuggingBackground": "#00000090",
    "statusBar.debuggingForeground": "#FFFFFF",
    "statusBar.focusBorder": "#0078D4",
    "statusBar.foreground": vars.mainForeground,
    "statusBar.noFolderBackground": "#00000090",
    "statusBarItem.focusBorder": "#0078D4",
    "statusBarItem.prominentBackground": "#6E768166",

    // Title Bar
    "titleBar.activeBackground": "#00000020",
    "titleBar.border": vars.layoutBorder,
    "titleBar.inactiveBackground": "#00000000",
    "titleBar.activeForeground": "#E7E7E7",
    "titleBar.inactiveForeground": "#9D9D9D",

    // Terminal
    "terminal.background": "#00000000",
    "terminal.foreground": vars.mainForeground,
    "terminal.border": "#80808059",
    "terminal.selectionBackground": "#ffffff40",
    "terminal.tab.activeBorder": "#E7E7E7",
    "terminal.ansiBlack": "#000000",
    "terminal.ansiBlue": "#2b4fff",
    "terminal.ansiBrightBlack": "#2f2f2f",
    "terminal.ansiBrightBlue": "#5c78ff",
    "terminal.ansiBrightCyan": "#5ac8ff",
    "terminal.ansiBrightGreen": "#905aff",
    "terminal.ansiBrightMagenta": "#5ea2ff",
    "terminal.ansiBrightRed": "#ba5aff",
    "terminal.ansiBrightWhite": "#ffffff",
    "terminal.ansiBrightYellow": "#685aff",
    "terminal.ansiCyan": "#28b9ff",
    "terminal.ansiGreen": "#7129ff",
    "terminal.ansiMagenta": "#2883ff",
    "terminal.ansiRed": "#a52aff",
    "terminal.ansiWhite": "#cfcfcf",
    "terminal.ansiYellow": "#3d2aff",
    "terminalCursor.background": "#000000",
    "terminalCursor.foreground": "#ffffff",

    // Widgets
    "editorWidget.background": "#101010",
    "widget.shadow": "#00000000",
    "widget.border": "#191919",
    "editorWidget.border": "#191919",
    "editorSuggestWidget.border": "#191919",
    "editorHoverWidget.border": "#191919",
    "debugExceptionWidget.border": "#191919",
    "quickInput.background": "#101010",
    "quickInput.foreground": vars.mainForeground,

    // Notatifications
    "notificationCenter.border": "#191919",
    "notificationCenterHeader.background": "#101010",
    "notificationToast.border": "#191919",
    "notifications.background": "#101010",
    "notifications.border": "#191919",
    "notificationCenterHeader.foreground": vars.mainForeground,
    "notifications.foreground": vars.mainForeground,
  },
} as const;
