#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>
#import <Contacts/Contacts.h>
#import <ContactsUI/ContactsUI.h>

@interface RCTContacts : RCTEventEmitter <RCTBridgeModule, CNContactViewControllerDelegate>

@end
