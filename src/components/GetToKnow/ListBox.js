import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
// import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import styles from "./ListBox.module.scss";
const people = [
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];

export default function ListBox({ pickedTab, tabName, selectFunc, tabs, addClassName }) {
  return (
    <div className={`${styles.listbox} w-full`}>
      <Listbox value={pickedTab} onChange={selectFunc}>
        <div className="relative mt-1">
          <Listbox.Button className={`${addClassName || ""}  ${styles.button}`}>
            {tabName}:{pickedTab.name}
            <img className={`w-5 `} src="/imgs/expand-arrow.svg" alt="expand" />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className={`${addClassName} ${styles.drop} `}>
              {tabs.map((tab, personIdx) => (
                <Listbox.Option key={personIdx} className={styles.option} value={tab}>
                  {({ selected }) => <span>{tab.name}</span>}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
