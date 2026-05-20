import type { Guide } from '../types'
import simplWindowsOpenScreenshot from '../public/guide/npf-first-pic.png'

// ============================================================
// ADD NEW GUIDES HERE — do NOT touch UI components.
// Each entry must conform exactly to the Guide interface.
// ============================================================

export const GUIDES: Record<string, Guide> = {
  'simpl-windows-upload': {
    id: 'simpl-windows-upload',
    name: 'Upload Project via SIMPL Windows',
    subtitle: 'Step-by-step guide for uploading control system programs',
    initials: 'SW',
    color: '#0369a1',
    difficulty: 'Beginner',
    timeEstimate: '10-15 min',
    sections: [
      {
        id: 'preparation',
        title: 'Preparation',
        description: 'Before you begin, ensure you have the following ready',
        steps: [
          {
            id: 'open-simpl',
            title: 'Open SIMPL Windows',
            description:
              'Launch SIMPL Windows from the Start menu or desktop shortcut. The application opens to the main workspace with a blank or previously loaded project.',
            imageSrc: simplWindowsOpenScreenshot,
            tip: null,
          },
          {
            id: 'open-project',
            title: 'Open the Project File',
            description:
              'Click File > Open or use the recent projects list to load your .smw file. The project will display the control system logic in the main workspace.',
            tip: 'Always work with the most recent version of your project file to avoid overwriting newer changes.',
          },
        ],
      },
      {
        id: 'connection',
        title: 'Establishing Connection',
        description: 'Connect to the Crestron control processor',
        steps: [
          {
            id: 'open-toolbox',
            title: 'Open Crestron Toolbox Address Book',
            description:
              'In SIMPL Windows, go to Tools > Crestron Toolbox. In Toolbox, open the Address Book and locate or add the control processor by IP address.',
            tip: null,
          },
          {
            id: 'connect-processor',
            title: 'Connect to the Processor',
            description:
              'Double-click the processor entry in the Address Book. Enter credentials if prompted. Wait for "Connected" status to appear in the status bar.',
            tip: 'Ensure you are on the same network segment as the control processor. Default credentials are admin / (blank password).',
          },
        ],
      },
      {
        id: 'uploading',
        title: 'Uploading the Program',
        description: 'Transfer the compiled program to the processor',
        steps: [
          {
            id: 'compile',
            title: 'Compile the Project',
            description:
              'Press F7 or go to Build > Compile. Resolve any errors shown in the output window at the bottom before proceeding. Warnings can usually be ignored.',
            tip: null,
          },
          {
            id: 'send-program',
            title: 'Send Program to Processor',
            description:
              'Go to Functions > Send Program. In the dialog, verify the target processor IP address and click "Send". The progress bar indicates upload status.',
            tip: 'Do not disconnect the network or close SIMPL Windows during the upload process.',
          },
        ],
      },
      {
        id: 'verification',
        title: 'Verification',
        description: 'Confirm the program uploaded and is running',
        steps: [
          {
            id: 'check-status',
            title: 'Verify Program Status',
            description:
              'In Crestron Toolbox, navigate to System Info and confirm the program name, slot number, and status all show "Running".',
            tip: null,
          },
          {
            id: 'test-system',
            title: 'Test the System',
            description:
              'Operate touch panels and control devices to confirm expected behavior. Check signal activity in the SIMPL Debugger if issues arise.',
            tip: 'Use SIMPL Debugger (Tools > SIMPL Debugger) to monitor signal states in real time.',
          },
        ],
      },
    ],
  },

  'vt-pro-e-upload': {
    id: 'vt-pro-e-upload',
    name: 'Upload Project via VT Pro-e',
    subtitle: 'Guide for uploading touch panel interface projects',
    initials: 'VT',
    color: '#b45309',
    difficulty: 'Beginner',
    timeEstimate: '5-10 min',
    sections: [
      {
        id: 'project-setup',
        title: 'Project Setup',
        description: 'Prepare your VT Pro-e project for upload',
        steps: [
          {
            id: 'open-vt',
            title: 'Open VT Pro-e',
            description:
              'Launch VT Pro-e from the Start menu. The application opens to the project manager view showing recently opened projects.',
            tip: null,
          },
          {
            id: 'load-project',
            title: 'Load the Project File',
            description:
              'Click File > Open or use the recent projects list to load your .vtp file. The project will open in the main editor view showing all pages.',
            tip: 'Always work with the most recent version of your project file to avoid overwriting newer changes.',
          },
        ],
      },
      {
        id: 'compile-upload',
        title: 'Compile and Upload',
        description: 'Build and transfer the interface to the touch panel',
        steps: [
          {
            id: 'compile-project',
            title: 'Compile Project',
            description:
              'Go to Project > Compile or press Ctrl+F7. Ensure there are no errors in the output panel before proceeding. Errors must be resolved first.',
            tip: null,
          },
          {
            id: 'send-to-panel',
            title: 'Send to Touch Panel',
            description:
              'Go to Project > Send. Enter the touch panel IP address in the destination field. Click "Send" and wait for the progress dialog to complete.',
            tip: 'The touch panel must be powered on and connected to the same network. Uploading via Wi-Fi is possible but wired is recommended.',
          },
          {
            id: 'verify-panel',
            title: 'Verify on Touch Panel',
            description:
              'The touch panel reboots and loads the new project automatically. Verify the interface appears correctly and all pages load without errors.',
            tip: null,
          },
        ],
      },
    ],
  },

  'toolbox-diagnostics': {
    id: 'toolbox-diagnostics',
    name: 'Toolbox Diagnostics',
    subtitle: 'Using Crestron Toolbox for system-level diagnostics',
    initials: 'TD',
    color: '#065f46',
    difficulty: 'Intermediate',
    timeEstimate: '5-15 min',
    sections: [
      {
        id: 'connection',
        title: 'Establishing Connection',
        description: 'Connect Toolbox to the target device',
        steps: [
          {
            id: 'open-toolbox',
            title: 'Open Crestron Toolbox',
            description:
              'Launch Crestron Toolbox and click the Address Book icon. Locate or add the device by entering its IP address and a friendly name.',
            tip: null,
          },
          {
            id: 'connect-device',
            title: 'Connect to Device',
            description:
              'Double-click the device entry. Enter credentials if prompted (default: admin / blank password). Wait for "Connected" indicator in the status bar.',
            tip: 'If connection fails, verify the device IP in its Setup page, and that Toolbox is on the same network segment.',
          },
        ],
      },
      {
        id: 'diagnostics',
        title: 'Running Diagnostics',
        description: 'Access key diagnostic tools within Toolbox',
        steps: [
          {
            id: 'system-info',
            title: 'Check System Info',
            description:
              'Navigate to Tools > System Info. Review firmware version, device uptime, processor CPU load, memory usage, and loaded programs.',
            tip: null,
          },
          {
            id: 'error-log',
            title: 'Review Error Log',
            description:
              'Go to Tools > Error Log. Filter by date and time if needed. Look for recurring errors or critical warnings that point to root cause.',
            tip: 'Export the error log via File > Save to attach to an escalation case or for offline analysis.',
          },
          {
            id: 'ping-test',
            title: 'Network Ping Test',
            description:
              'Use Tools > Ping to test network reachability to other devices on the system (processors, touch panels, AV equipment).',
            tip: null,
          },
        ],
      },
    ],
  },
}
