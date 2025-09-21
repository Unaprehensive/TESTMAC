# -*- mode: python ; coding: utf-8 -*-

a = Analysis(
    ['server.py'],
    pathex=['C:\\Blueprint'],
    binaries=[],
    datas=[
    ('Terminal.html', '.'),
    ('login.html', '.'),
    ('history.html', '.'),
    ('setup.html', '.'),
    ('bpfx-indicator.html', '.'),
    ('localization.js', '.'),
    ('icon.ico', '.'),
    ('banner.bmp', '.'),
    ('header.bmp', '.'),
    ('LICENSE.txt', '.')
],
    hiddenimports=['websockets', 'flask', 'MetaTrader5', 'numpy'],
    hookspath=[],
    runtime_hooks=[],
    excludes=['tkinter'],
    noarchive=False,
)

pyz = PYZ(a.pure)

exe = EXE(
    pyz,
    a.scripts,
    [],
    exclude_binaries=True,
    name='BluePrintFX',
    debug=False,
    bootloader_ignore_signals=False,
    strip=False,
    upx=False,
    console=False,
    icon='icon.ico'
)

coll = COLLECT(
    exe,
    a.binaries,
    a.datas,
    strip=False,
    upx=False,
    name='BluePrintFX'
)