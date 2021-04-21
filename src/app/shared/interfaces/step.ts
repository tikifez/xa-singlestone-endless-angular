import {VersionedContent} from './versioned-content';

export interface Steppable {
  id: string;
  stepNumber: string;
  versionContent: VersionedContent[];
}

export interface Deserializable {
  deserialize(input: any): this;
}

export class Step implements Deserializable {
  get title(): string {
    if (null == this.currentContentIndex) {
      this.updateCurrentContentIndex();
    }

    if (null != this.currentContentIndex) {
      return this.versionContent[this.currentContentIndex].title;
    }
  }

  get body(): string {
    if (null == this.currentContentIndex) {
      this.updateCurrentContentIndex();
    }

    if (null != this.currentContentIndex) {
      return this.versionContent[this.currentContentIndex].body;
    }
  }

  id: string;
  stepNumber: string;
  versionContent: VersionedContent[];
  currentContentIndex: number;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }

  getCurrentContent() {
    if (null != this.currentContentIndex) {
      return this.versionContent[this.currentContentIndex];
    }

  }

  hasCurrentContentIndex() {
    if (!this.currentContentIndex) {
      this.updateCurrentContentIndex();
    }

    return (null !== this.currentContentIndex);
  }

  updateCurrentContentIndex() {
    if (!this.versionContent) {
      this.currentContentIndex = null;
    } else {
      const now = new Date().getTime();

      for (let i = 0; i < this.versionContent.length; i++) {
        let effectiveTime = new Date(this.versionContent[i].effectiveDate).getTime();

        if (null == this.currentContentIndex &&
          effectiveTime < now) {
          this.currentContentIndex = i;
        }

        if (null !== this.currentContentIndex) {
          let currentContentEffectiveTime =
            new Date(this.versionContent[this.currentContentIndex].effectiveDate).getTime();

          if (effectiveTime > currentContentEffectiveTime &&
            effectiveTime < now) {
            this.currentContentIndex = i;
          }
        }

      }
    }
  }

}

